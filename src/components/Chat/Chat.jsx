import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { BASE_URL, Fetchcourses } from "../../Api/api";
import CreateLiveClassForm from "./CreateLiveClassForm";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Establish the socket connection
const socket = io('https://api.hopingminds.com', {
	secure: true,
	reconnectionAttempts: 5,
	withCredentials: true,
});

const Chat = () => {
	const [chat, setChat] = useState([]);
	const [userInput, setUserInput] = useState('');
	const [user, setUser] = useState('');
	const [groupId, setGroupId] = useState("");
	const [instrutorId, setInstrutorId] = useState("");
	const [selectedStudent, setSelectedStudent] = useState(null); // Track selected student
	const [courses, setCourses] = useState([]);
	const [isChatAvailable, setIsChatAvailable] = useState(false); // Track chat availability
	const [liveChat, setLiveChat] = useState([]); // Added live chat state
    const [chatMode, setChatMode] = useState('live'); // 'live' or 'teacher'
    const [students, setStudents] = useState([]); // Added students state

	const chatboxRef = useRef(null);

	const addMessage = (messageData, mode) => {
		const { msg, user, timestamp, studentId } = messageData;
		if (mode === 'live') {
            setLiveChat(prevMessages => [
                ...prevMessages,
                { message: msg, user, timestamp }
            ]);
        } else {
            setChat(prevMessages => [
                ...prevMessages,
                { message: msg, user, timestamp, studentId }
            ]);
        }
		chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
	};

	const handleSendMessage = () => {
		if (userInput.trim() !== '') {
			if (chatMode === 'live') {
                socket.emit('chat message', { groupId, msg: userInput, user });
				setUserInput('');
            } else if (chatMode === 'teacher') {
                if (selectedStudent) {
                    socket.emit('private message', {
						groupId,
						msg: userInput,
						user,
						isTeacher: true,
						teacherId: instrutorId,
						studentId: selectedStudent, // Include selected student ID
					});
                    console.log("sent to server private message");
					setUserInput('');
                } else {
                    alert('Please select a student to send a message.');
                }
            }
		}
	};

	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			handleSendMessage();
		}
	};

	const fetchInstructorDetails = async (email) => {
		try {
			const res = await axios.get(`${BASE_URL}/inst/${email}`);
			console.log(res?.data);
			setInstrutorId(res?.data?.instructorDetails?._id);
			setUser(res?.data?.instructorDetails?.name);
		} catch (error) {
			toast.error("Error fetching instructor details:", error);
		}
	};

	const makeTeacherChatAvailable = async () => {
		try {
			const token = localStorage.getItem("teachertoken");
			await axios.post(`${BASE_URL}/maketeacherchatavailable`, {
				groupId,
			}, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				}
			});
			// toast.success(`Chat ${isAvailable ? 'enabled' : 'disabled'} successfully.`);
		} catch (error) {
			toast.error("Error updating chat availability:", error);
		}
	};


	const checkChatAvailability = async () => {
		try {
			const token = localStorage.getItem("teachertoken");
			const StreamKey = localStorage.getItem("sk");
			const res = await axios.get(`${BASE_URL}/isteacherchatavailableforinst?groupId=${StreamKey}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(res?.data)
			setIsChatAvailable(res?.data?.success);
			toast.success(`Chat ${res?.data?.success ? 'enabled' : 'disabled'} successfully.`);
		} catch (error) {
			toast.error("Error checking chat availability:", error);
		}
	};

	const handleCheckboxChange = async (event) => {
		const isChecked = event.target.checked;
		await makeTeacherChatAvailable(); // Toggle chat availability
		checkChatAvailability();
	};

	const handleLeaveGroup = () => {
        if (groupId && instrutorId) {
            socket.emit('leave group', { groupId, studentId: instrutorId });
        }
    };

	useEffect(() => {
		// Join the teacher's chat room
		socket.emit('join teacher chat', instrutorId);

		// Join group with instructorId
        if (groupId) {
            socket.emit('join group', { groupId, studentId: instrutorId });
        }
		
		socket.on('chat message', (messageData) => {
            addMessage(messageData, 'live');
        });

		// Listen for incoming private messages
		socket.on('private message', (messageData) => {
			addMessage(messageData, 'teacher');
		});

		socket.on('group users', (users) => {
            setStudents(users);
        });
		
		socket.on('student joined', (student) => {
            setStudents(prevStudents => [...prevStudents, student]);
        });
		
		socket.on('student left', ({ studentId, name }) => {
            setStudents(prevStudents => prevStudents.filter(student => student.studentId !== studentId));
            toast.success(`${name} has left the group`);
        });


		return () => {
			// Clean up event listeners
			socket.off('private message');
            socket.off('chat message');
            socket.off('student joined');
            socket.off('student left');
			socket.emit('leave group',{ groupId, studentId: instrutorId })
			handleLeaveGroup();
		};
	}, [instrutorId]);

	useEffect(() => {
		const token = localStorage.getItem('teachertoken');
		const decoded = jwtDecode(token);
		fetchInstructorDetails(decoded?.email);
		let liveClassKey = localStorage.getItem('sk');
		setGroupId(liveClassKey);
		checkChatAvailability(); // Check chat availability on mount
	}, []);

	useEffect(() => {
		const fetchCourses = async () => {
			const courses = await Fetchcourses();
			setCourses(courses);
		};

		fetchCourses();
	}, []);

	return (
		<div className='w-full h-max flex justify-between'>
			<Toaster/>
			<div className="w-[50%] h-full">
				<CreateLiveClassForm courses={courses} />
			</div>
			<div className='w-[50%] h-full'>
				<div className="bg-white shadow-md rounded-lg max-w-lg w-full h-[530px] flex flex-col justify-between">
					<div className="p-4 border-b bg-green-500 text-white flex justify-between">
						<div className="flex gap-2">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isChatAvailable}
                                    onChange={handleCheckboxChange}
                                    className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                            <p className={`text-lg font-semibold cursor-pointer ${chatMode === 'teacher' ?'text-red-500 border-b-2':''}`} onClick={() => setChatMode('teacher')}>
                                Teacher Chat
                            </p>
                        </div>
						<div>
							<p className={`text-lg font-semibold cursor-pointer ${chatMode === 'live' ?'text-red-500 border-b-2':''}`} onClick={() => setChatMode('live')}>
                                Live Chat <span className='text-[10px]'>({students.length} Students)</span>
                            </p>
						</div>
					</div>
					<div className="p-4 border-t bg-gray-100">
                            <label htmlFor="students-dropdown" className="block text-sm font-semibold text-gray-700 mb-2">Students:</label>
                            <select id="students-dropdown" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]">
                                {students.map(student => (
                                    <option key={student._id} value={student._id}>
                                        {student.name}
                                    </option>
                                ))}
                            </select>
                        </div>
					<div
						id="chatbox"
						ref={chatboxRef}
						className="p-4 overflow-y-auto h-full"
					>
						{(chatMode === 'live' ? liveChat : chat).map((msg, index) => (
                            <div key={index} className={`mb-1 ${msg.user === user ? 'text-right' : ''}`}>
                                {msg.user !== user ?
                                    <>
                                        {chatMode === 'live' ?
											<p className={`rounded-md px-2 inline-block ${msg.user === user ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
												{msg.message}
											</p>
											:
											<>
												<input
													type="radio"
													id={`studentchat-${index}`}
													name='studentchat'
													checked={selectedStudent === msg.studentId}
													onChange={() => setSelectedStudent(msg.studentId)}
												/>
												<label htmlFor={`studentchat-${index}`} className={`rounded-md px-2 inline-block ${msg.user === user ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
													{msg.message}
												</label>
											</>
										}
                                        <p className={`font-bold leading-none text-[9px] pt-[2px] ${msg.user === user ? 'text-green-500' : 'text-gray-700'}`}>
                                            {msg.user} <span className="text-gray-400">({new Date(msg.timestamp).toLocaleTimeString()})</span>
                                        </p>
                                    </>
                                    :
                                    <>
                                        <p className={`rounded-md px-2 inline-block ${msg.user === user ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                            {msg.message}
                                        </p>
                                        <p className={`font-bold leading-none text-[9px] pt-[2px] ${msg.user === user ? 'text-green-500' : 'text-gray-700'}`}>
                                            {msg.user} <span className="text-gray-400">({new Date(msg.timestamp).toLocaleTimeString()})</span>
                                        </p>
                                    </>
                                }
                            </div>
                        ))}
					</div>
					<div className="p-4 border-t flex">
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
			</div>
		</div>
	);
};

export default Chat;
