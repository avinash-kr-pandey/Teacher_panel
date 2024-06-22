import React, { useState } from "react";
import Left from "../../../Assets/Icons/tpassignmentleft.svg";

const CreateAssignmentS4 = ({ setShowStep, setCreateAssignment }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  return (
    <div className="px-[20%] py-14 font-int flex flex-col gap-2">
      <div className="border border-[#E1E1E1] rounded  px-3 py-6 flex flex-col gap-2">
        <p className="text-[#434343] font-semibold text-[24px]">Preview</p>
        <div className="text-[#434343] flex flex-col gap-1">
          <p className="font-semibold">
            <span className="font-normal">Name</span> BHI Health Informatics mid
            semester Exam.
          </p>
          <p className="font-semibold">
            <span className="font-normal">Course</span> B.Tech Spcl. in Health
            Informatics
          </p>
          <p className="font-semibold">
            <span className="font-normal">Subject</span> Networking
          </p>
          <p className="font-semibold">Total Marks : 50</p>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex gap-6">
            <p className="text-[#434343] text-[13px]">Passing Percentage</p>
            <p className="text-[#3D70F5] text-[13px]">70%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#434343] text-[13px]">Uploaded Filed</p>
          <div className="text-[11px] text-[#434343] flex gap-2 flex-wrap">
            <div className="flex justify-center items-center px-2 py-1 border border-[#D7D7D7] rounded">
              <p>New Assignment .pdf</p>
            </div>
            <div className="flex justify-center items-center px-2 py-1 border border-[#D7D7D7] rounded">
              <p>New Assignment .pdf</p>
            </div>
            <div className="flex justify-center items-center px-2 py-1 border border-[#D7D7D7] rounded">
              <p>New Assignment .pdf</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#434343] text-[11px]">Schedule</p>
          <div className="flex gap-4 items-center">
            <input
              type="date"
              name=""
              id=""
              className="cursor-pointer outline-none bg-[#EDEDF5] rounded px-2 py-[2px] w-[140px]"
            />
            <input
              type="time"
              name=""
              id=""
              className="cursor-pointer outline-none bg-[#EDEDF5] rounded px-2 py-[2px] w-[140px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-[#434343] text-[11px]">Due Date</p>
          <div className="flex gap-4 items-center">
            <input
              type="date"
              name=""
              id=""
              className="cursor-pointer outline-none bg-[#EDEDF5] rounded px-2 py-[2px] w-[140px]"
            />
            <input
              type="time"
              name=""
              id=""
              className="cursor-pointer outline-none bg-[#EDEDF5] rounded px-2 py-[2px] w-[140px]"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[13px] text-[#6B6B6B]">
        <div
          onClick={() => setShowStep("step3")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img className="w-3 h-3" src={Left} alt="" />
          <p>Back</p>
        </div>
        <button
          onClick={() => setCreateAssignment("final")}
          className="py-2 w-[150px] bg-[#2C62EE] text-white rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CreateAssignmentS4;
