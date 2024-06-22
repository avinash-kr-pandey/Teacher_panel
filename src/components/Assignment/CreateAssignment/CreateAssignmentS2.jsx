import React, { useState } from "react";
import Search from "../../../Assets/Icons/tpsearch.svg";
import Right from "../../../Assets/Icons/tpassignmentright.svg";
import Left from "../../../Assets/Icons/tpassignmentleft.svg";

const CreateAssignmentS2 = ({ setShowStep }) => {
  const [selected, setselected] = useState(false);
  return (
    <div className="px-[20%] pt-14 font-int flex flex-col gap-2">
      <p>Optional</p>
      <div className="border border-[#E1E1E1] rounded  px-3 py-6 flex flex-col gap-2">
        <p className="text-[#434343] font-semibold">Select Subject</p>
        <div className="flex gap-3 bg-[#F1F1F1] px-4 py-2 rounded-md mb-2">
          <img src={Search} alt="" />
          <input
            className="bg-[#F1F1F1] text-[13px] w-[200px] outline-none"
            type="text"
            placeholder="Select Subject"
          />
        </div>
        <div className="max-h-[50vh] overflow-y-auto customScrollfortp text-[13px] text-[#6A6A6A] px-4 flex flex-col gap-4">
          <div
            onClick={() => setselected(!selected)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className={`w-4 h-4 rounded-full ${
                selected ? "border-[4px] border-[#3D70F5]" : "border "
              }`}
            ></div>
            <p>B.Tech Specialization in Health Informatics</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[13px] text-[#6B6B6B]">
        <div
          onClick={() => setShowStep("step1")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img className="w-3 h-3" src={Left} alt="" />
          <p>Back</p>
        </div>
        <div
          onClick={() => setShowStep("step3")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <p>Next</p>
          <img className="w-3 h-3" src={Right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentS2;
