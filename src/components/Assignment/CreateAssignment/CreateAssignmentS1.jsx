import React from "react";
import Search from "../../../Assets/Icons/tpsearch.svg";

const CreateAssignmentS1 = ({ setShowStep }) => {
  return (
    <div className="border border-[#E1E1E1] rounded font-int px-3 py-6 mx-[20%] mt-14 flex flex-col gap-2">
      <p className="text-[#434343] font-semibold">Select Course</p>
      <div className="flex gap-3 bg-[#F1F1F1] px-4 py-2 rounded-md mb-2">
        <img src={Search} alt="" />
        <input
          className="bg-[#F1F1F1] text-[13px] w-[200px] outline-none"
          type="text"
          placeholder="Select Course"
        />
      </div>
      <div className="max-h-[50vh] overflow-y-auto customScrollfortp text-[13px] text-[#6A6A6A] px-4 flex flex-col gap-4">
        <div
          onClick={() => setShowStep("step2")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="border w-4 h-4 rounded-full"></div>
          <p>B.Tech Specialization in Health Informatics</p>
        </div>
        <div
          onClick={() => setShowStep("step2")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="border w-4 h-4 rounded-full"></div>
          <p>B.Tech Specialization in Health Informatics</p>
        </div>
        <div
          onClick={() => setShowStep("step2")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="border w-4 h-4 rounded-full"></div>
          <p>B.Tech Specialization in Health Informatics</p>
        </div>
        <div
          onClick={() => setShowStep("step2")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="border w-4 h-4 rounded-full"></div>
          <p>B.Tech Specialization in Health Informatics</p>
        </div>
        <div
          onClick={() => setShowStep("step2")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="border w-4 h-4 rounded-full"></div>
          <p>B.Tech Specialization in Health Informatics</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentS1;
