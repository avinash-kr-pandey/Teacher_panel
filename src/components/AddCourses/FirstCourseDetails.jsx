import React, { useState, useEffect } from "react";

const FirstCourseDetails = ({ onDataUpdate }) => {
  const [course, setCourse] = useState({
    courseID: "",
    title: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  // Use useEffect to send updated course data to the parent component
  useEffect(() => {
    onDataUpdate(course); // Send course data to parent component
  }, [course, onDataUpdate]);

  return (
    <div className="grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full">
      <div className="flex flex-col gap-2">
        <p>CourseID</p>
        <input
          className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal"
          type="text"
          name="courseID"
          value={course.courseID}
          onChange={handleInputChange}
          placeholder="CourseID"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>Title</p>
        <input
          className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal"
          type="text"
          name="title"
          value={course.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>Category</p>
        <input
          className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal"
          type="text"
          name="category"
          value={course.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
      </div>
    </div>
  );
};

export default FirstCourseDetails;
