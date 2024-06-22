import React from "react";
import Cross from "../../../Assets/Icons/tpcross.svg";

const CreateAssignmentFinal = ({ setCreateAssignment }) => {
  return (
    <div className="bg-white h-full w-full px-4 py-6 font-int ">
      <div className="flex flex-col gap-6">
        <img
          onClick={() => setCreateAssignment(false)}
          className="w-5 h-5 cursor-pointer"
          src={Cross}
          alt=""
        />
        <div className="flex flex-col items-center gap-4 px-[15%] pt-[15%]">
          <p className="text-[#434343] text-[26px] font-semibold">
            Assignment Created Successfully
          </p>
          <div className="px-6">
            <p className="text-center text-[13px] text-[#434343]">
              New Assignment within B.Tech spcl. in Health Informatics with
              subject Network Engineering Added Succesfully with the following
              Name :{" "}
              <span className="font-semibold">
                BHI Health Informatics mid semester Assignment.
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between text-[13px] text-[#6B6B6B] mt-5">
            <button
              onClick={() => setCreateAssignment(null)}
              className="py-2 w-[180px] bg-[#2C62EE] text-white rounded"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentFinal;
