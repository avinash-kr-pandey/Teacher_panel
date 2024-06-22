import React, { useState } from "react";
import Cross from "../../../Assets/Icons/tpcross.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import CreateAssignmentS1 from "./CreateAssignmentS1";
import CreateAssignmentFinal from "./CreateAssignmentFinal";
import CreateAssignmentS4 from "./CreateAssignmentS4";
import CreateAssignmentS3 from "./CreateAssignmentS3";
import CreateAssignmentS2 from "./CreateAssignmentS2";

const CreateAssignment = ({ setCreateAssignment }) => {
  const [showStep, setShowStep] = useState("step1");
  return (
    <div className="bg-white h-full w-full px-4 py-6 font-int ">
      <div className="flex flex-col gap-6">
        <img
          onClick={() => setCreateAssignment(false)}
          className="w-5 h-5 cursor-pointer"
          src={Cross}
          alt=""
        />
        <p className="text-[28px] text-[#434343] font-semibold">
          Create New Assignment
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[13px] text-[#787878]">
            <span className="text-[#3D70F5]">
              {showStep === "step1"
                ? 1
                : showStep === "step2"
                ? 2
                : showStep === "step3"
                ? 3
                : showStep === "step4" && 4}
            </span>
            /4 Steps
          </p>
          <ProgressBar
            completed={
              showStep === "step1"
                ? 25
                : showStep === "step2"
                ? 50
                : showStep === "step3"
                ? 75
                : showStep === "step4" && 100
            }
            bgColor="#3D70F5"
            height="4px"
            borderRadius="0"
            isLabelVisible={false}
            baseBgColor="#DDDDDD"
            labelColor="#e80909"
          />
        </div>
      </div>
      <div>
        {showStep === "step1" && (
          <CreateAssignmentS1 setShowStep={setShowStep} />
        )}
        {showStep === "step2" && (
          <CreateAssignmentS2 setShowStep={setShowStep} />
        )}
        {showStep === "step3" && (
          <CreateAssignmentS3 setShowStep={setShowStep} />
        )}
        {showStep === "step4" && (
          <CreateAssignmentS4
            setShowStep={setShowStep}
            setCreateAssignment={setCreateAssignment}
          />
        )}
      </div>
    </div>
  );
};

export default CreateAssignment;
