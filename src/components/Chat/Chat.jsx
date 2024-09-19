import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { BASE_URL, Fetchcourses } from "../../Api/api";

const token = localStorage.getItem("teachertoken");

const socket = io(BASE_URL); // Initialize socket connection

const Chat = ({ data }) => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState("");
  const [groupId, setGroupId] = useState(`group_${Date.now()}`); // Generate and set unique groupId
  const [instrutorId, setInstrutorId] = useState("6620b6040d83b9fb26153bce");
  const [isMinimized, setIsMinimized] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 16)
  ); // Default to current date and time

  const chatboxRef = useRef(null);

  const addMessage = (messageData) => {
    const { msg, user, timestamp } = messageData;
    setChat((prevMessages) => [
      ...prevMessages,
      { message: msg, user, timestamp },
    ]);
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      socket.emit("group message", {
        groupId, // Use the current groupId
        msg: userInput,
        user,
        isTeacher: true,
        teacherId: instrutorId,
        token,
      });
      setUserInput("");
    }
  };
  // Define the function
  function getFirstNWords(data, numWords = 4) {
    const words = data.split(" ");
    const selectedWords = words.slice(0, numWords);
    return selectedWords.join(" ");
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleStartDateChange = async (e) => {
    setStartDate(e.target.value);

    // Automatically send message when startDate changes
    try {
      const response = await fetch(`${BASE_URL}/createlivestream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          courseId: selectedCourse,
          lessonId: lessonId,
          startDate, // Use the selected startDate
          groupId, // Include groupId when creating a live stream
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create live stream");
      }

      const data = await response.json();
      console.log("Live stream created successfully:", data);

      // Send a message notifying that the live stream was created
      socket.emit("group message", {
        groupId,
        msg: `Live stream scheduled for ${new Date(
          startDate
        ).toLocaleString()}`,
        user,
        isTeacher: true,
        teacherId: instrutorId,
        token,
      });
    } catch (error) {
      console.error("Error creating live stream:", error);
    }
  };

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleCourseSelection = (e) => {
    const selectedCourseId = e.target.value;
    setSelectedCourse(selectedCourseId);

    const selectedCourse = courses.find(
      (course) => course._id === selectedCourseId
    );

    if (selectedCourse && selectedCourse.lessons?.length > 0) {
      setLessonId(selectedCourse?.lessons[0]._id);
    } else {
      console.warn("No lessons found for this course.");
      setLessonId("");
    }
  };

  useEffect(() => {
    socket.emit("join group chat", groupId); 

    socket.on("group message", (messageData) => {
      addMessage(messageData);
    });

    return () => {
      socket.off("group message");
    };
  }, [groupId]);

  useEffect(() => {
    const fetchUserData = async () => {
      setUser("TeacherName");
    };

    fetchUserData();
  }, []);

  const fetchCourses = async () => {
    try {
      const courses = await Fetchcourses();
      console.log(courses); // Check the data structure
      if (Array.isArray(courses)) {
        setCourses(courses);
      } else {
        console.error("Courses data is not an array", courses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  

  return (
    <div className="w-[28vw] h-max fixed bottom-4 right-0">
      <div className="w-full h-full">
        <div
          className={`bg-white shadow-md rounded-lg max-w-lg w-full ${
            isMinimized ? "h-[50px]" : "h-[600px]"
          } flex flex-col justify-between`}
        >
          <div className="bg-green-500 py-3 flex flex-row">
            <select
              className="bg-transparent text-lg text-white font-semibold rounded-md border"
              value={selectedCourse}
              onChange={handleCourseSelection}
            >
              <option value="" className="text-black">
                Select Course
              </option>
              {courses?.map((course) => (
                <option
                  key={course._id}
                  value={course._id}
                  className="text-black"
                >
                  {getFirstNWords(course?.slug, 4)}
                </option>
              ))}
            </select>
            <div >
            <button onClick={handleToggleMinimize}>
              {isMinimized ? "⬆️" : "⬇️"}
            </button>
          </div>
          </div>
         
          {!isMinimized && (
            <>
              <div
                id="chatbox"
                ref={chatboxRef}
                className="p-4 overflow-y-auto h-full"
              >
                {chat?.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-1 ${msg.user === user ? "text-right" : ""}`}
                  >
                    <p
                      className={`rounded-md px-2 inline-block ${
                        msg.user === user
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {msg.message}
                    </p>
                    <p
                      className={`font-bold leading-none text-[9px] pt-[2px] ${
                        msg.user === user ? "text-green-500" : "text-gray-700"
                      }`}
                    >
                      {msg.user}{" "}
                      <span className="text-gray-400">
                        ({new Date(msg.timestamp).toLocaleTimeString()})
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t flex flex-col">
                <input
                  type="datetime-local"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="flex">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="Type a message"
                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
