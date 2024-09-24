// CourseInfo.js
import React from "react";
import InputBox from "./InputBoxs";

const CourseInfo = ({ courseDetails, setCourseDetails }) => {
  // console.log(courseDetails)
  const handleInputChange = (e) => {
    setCourseDetails({
      ...courseDetails,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  return (
    <>
      <fieldset className="flex flex-col gap-4 pl-20 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem]">

        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Course Details
        </h1>

        <div className="grid grid-cols-2 gap-4 px-4 py-6  rounded-md bg-gradient-to-r from-greenColor to-green-300 w-full">
          <InputBox
            label="courseID"
            type="text"
            placeholder="courseID"
            name="courseID"
            value={courseDetails.courseID} // Use the generated UUID here
            onChange={handleInputChange}
          />
          <InputBox
            label="Title"
            type="text"
            placeholder="Title"
            name="title"
            value={courseDetails.title}
            onChange={handleInputChange}
          />
          <InputBox
            label="Category"
            type="text"
            placeholder="Category"
            name="category"
            value={courseDetails.category}
            onChange={(e) => handleInputChange(e)}
          />
          <InputBox
            label="Subcategory"
            type="text"
            placeholder="Subcategory"
            name="subcategory"
            value={courseDetails.subcategory}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </fieldset>
    </>
  );
};

export default CourseInfo;
