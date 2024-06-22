import React from "react";
import Clock from "../../../Assets/Icons/tpassignmentclock.svg";
import Calender from "../../../Assets/Icons/tpassignmentcalender.svg";
import ProgressBar from "@ramonak/react-progress-bar";

const ViewResults = () => {
  return (
    <div className="border border-[#E6E6E6] rounded-xl px-4 py-2 text-[#3C3C3C] font-int flex flex-col gap-2">
      <div>
        <p className="font-medium text-[16px]">
          Articulate structure of C++ and Java in Semester 1
        </p>
      </div>
      <p className="text-[#9A9A9A] text-[13px]">
        Course : B.Tech Specialization in Health Informatics
      </p>
      <p className="text-[#9A9A9A] text-[13px]">
        Subject : Network Engineering
      </p>
      <div className="flex gap-8 items-center text-[12px] text-[#3C3C3C]">
        <div className="flex gap-3 items-center">
          <img className="w-4 h-4" src={Calender} alt="" />
          <p>3-01-2023</p>
        </div>
        <div className="flex gap-3 items-center">
          <img className="w-4 h-4" src={Clock} alt="" />
          <p>12:30 AM - 01:40 PM</p>
        </div>
      </div>
      <p className="text-[#9A9A9A] text-[13px]">Questions : 50</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-[#3C3C3C] text-[11px]">Passing Percentage</p>
          <p className="text-[#6A6A6A] text-[11px]">70%</p>
        </div>
        <ProgressBar
          completed={50}
          bgColor="#989898"
          height="6px"
          isLabelVisible={false}
          labelColor="#D9D9D9"
        />
      </div>
      <button className="border border-[#989898] text-[#474747] rounded py-2 text-[11px] mt-3">
        View Results
      </button>
    </div>
  );
};

export default ViewResults;
