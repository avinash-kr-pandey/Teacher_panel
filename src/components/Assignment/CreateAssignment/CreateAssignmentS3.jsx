import React, { useState } from "react";
import Upload from "../../../Assets/Icons/tpupload.svg";
import Left from "../../../Assets/Icons/tpassignmentleft.svg";
import Cross from "../../../Assets/Icons/tpassignmentcross.svg";

const CreateAssignmentS3 = ({ setShowStep }) => {
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
        <p className="text-[#434343] font-semibold">
          Assignment Specifications
        </p>
        <div className="flex gap-3 bg-[#F1F1F1] px-4 py-2 rounded-md mb-2">
          <input
            className="bg-[#F1F1F1] text-[13px] w-[200px] outline-none"
            type="text"
            placeholder="Total Marks"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-[#434343] text-[11px]">Passing Percentage</p>
            <p className="text-[#3D70F5] text-[11px]">70%</p>
          </div>
          <input
            type="range"
            name=""
            id=""
            min={0}
            max={100}
            className="outline-none h-[6px]"
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
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
        <div className="flex flex-col gap-2 mt-5">
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
        <label
          htmlFor="UploadFiles"
          className="flex gap-3 mt-8 items-center border border-[#000000] justify-center py-2 rounded text-[13px] cursor-pointer"
        >
          <p>Upload Files</p>
          <img className="w-3 h-3" src={Upload} alt="" />
          <input
            type="file"
            id="UploadFiles"
            multiple
            onChange={handleFileChange}
            hidden
          />
        </label>
        <div className="flex gap-4 flex-wrap overflow-hidden pl-4 mt-2">
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#E9E9E9] rounded px-4 py-1 w-max"
            >
              <p className="text-[13px] text-[#5C5C5C]">{file.name}</p>
              <img
                className="w-3 h-3 cursor-pointer"
                src={Cross}
                alt=""
                onClick={() => removeFile(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between text-[13px] text-[#6B6B6B]">
        <div
          onClick={() => setShowStep("step2")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img className="w-3 h-3" src={Left} alt="" />
          <p>Back</p>
        </div>
        <button
          onClick={() => setShowStep("step4")}
          className="py-2 w-[150px] bg-[#2C62EE] text-white rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateAssignmentS3;
