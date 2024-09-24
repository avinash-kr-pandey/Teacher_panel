import React, { useState } from "react";
import FirstCourseDetails from "./FirstCourseDetails";
import AddCourseDetails from "./AddCourseDetails";
import Course from "./Course";
import FAQ from "./FAQ";
import Theser from "./Theser";
import WhatWillILearn from "./WhatwillIlearn";
import { AddCourseByInstructor } from "../../Api/api";

const AddCourses = () => {
  const [courseData, setCourseData] = useState({
    firstCourseDetails: {},
    courseDetails: {},
    faqDetails: {},
    theserDetails: {},
    learnDetails: {},
  });

  const handleDataUpdate = (field, data) => {
    setCourseData((prevData) => ({
      ...prevData,
      [field]: data,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Prepare the form data for submission
    const formData = new FormData();
    for (const key in courseData) {
      formData.append(key, JSON.stringify(courseData[key]));
    }

    try {
      // API call
      const result = await AddCourseByInstructor(formData);
      console.log("Course successfully added:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 w-full px-14 py-14 font-int font-medium text-[#808080] text-[13px]"
    >
      {/* First Course Details */}
      <div>
        <FirstCourseDetails
          onDataUpdate={(data) => handleDataUpdate("firstCourseDetails", data)}
        />
      </div>

      {/* Course Section */}
      <div className="flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full">
        <Course onDataUpdate={(data) => handleDataUpdate("courseDetails", data)} />
      </div>

      {/* Theser Section */}
      <div>
        <Theser onDataUpdate={(data) => handleDataUpdate("theserDetails", data)} />
      </div>

      {/* FAQ and AddCourseDetails */}
      <div className="grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full text-[14px]">
        <div className="flex flex-col gap-2">
          <FAQ onDataUpdate={(data) => handleDataUpdate("faqDetails", data)} />
        </div>
        <div className="flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full">
          <AddCourseDetails />
        </div>
      </div>
      {/* What Will I Learn Section */}
      <div className="flex flex-col gap-2 border border-[#808080] px-8 py-4 w-full">
        <WhatWillILearn
          initialCourse={courseData.learnDetails}
          handleInputChange={(name, value) => handleDataUpdate("learnDetails", { [name]: value })}
        />
      </div>

      {/* Submit Button */}
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
