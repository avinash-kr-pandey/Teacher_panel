import React, { useState } from "react";
import AddCourseDetails from "./AddCourseDetails";
import Course from "./Course"
import FAQ from "./FAQ";
import Theser from "./Theser";
import WhatWillILearn from "./WhatwillIlearn";
import FirstCourseDetails from "./FirstCourseDetails";

const AddCourses = () => {
  const [course, setCourse] = useState({
    courseID: "",
    title: "",
    category: "",
    subcategory: "",
    level: "",
    overview: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleFileChange = (event, setPreviewFunction, fieldName) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewFunction({ name: file.name, url: fileUrl });
      setCourse((prevCourse) => ({ ...prevCourse, [fieldName]: file }));
    }
  };



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Prepare the form data
    const formData = new FormData();
    for (const key in course) {
      if (key === "faqs" || key === "curriculum") {
        formData.append(key, JSON.stringify(course[key]));
      } else {
        formData.append(key, course[key]);
      }
    }
    // API call to submit the form
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 w-full px-14 py-14 font-int font-medium text-[#808080] text-[13px]"
    >
      <div className="">
      <FirstCourseDetails/>
      </div>
      <div className="flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full">
        <Course/>
       
      </div>

      {/* Theser */}
      <div>
        <Theser/>
      </div>

      {/* FAQ  */}
      <div className="grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full text-[14px]">
        <div className="flex flex-col gap-2">
          <FAQ />
        </div>
        <div className="flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full">
         
          <AddCourseDetails />
        </div>
      </div>
      {/* What will I learn?  */}
      <div className="flex flex-col gap-2 border border-[#808080] px-8 py-4 w-full">
        <WhatWillILearn/>
        
      </div>
      <div className="flex justify-center font-normal text-[13px]">
        <button
          type="submit"
          className="flex text-white gap-2 bg-black px-12 py-3 rounded-lg justify-center items-center"
        >
          <p>Upload Course</p>
        </button>
      </div>
    </form>
  );
};

export default AddCourses;
