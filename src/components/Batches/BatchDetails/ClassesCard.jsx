import React, { useState } from "react";
import Clock from "../../../Assets/Icons/tpclock.svg";
import Calender from "../../../Assets/Icons/tpcalender.svg";

const ClassesCard = ({ setShowAttendance }) => {
  return (
    <div className="border border-[#808080] bg-[#F6F6F6] rounded-xl px-4 py-2 text-[#808080] font-int flex flex-col gap-3">
      <div>
        <p className="font-semibold text-[18px] text-[#000000]">
          How to Make an Array and it’s Types in C++
        </p>
      </div>
      <p className="border border-[#80808080] w-max px-2 rounded text-[13px]">
        Batch 3CO - JVY
      </p>
      <div className="flex gap-8 items-center text-[14px]">
        <div className="flex gap-1 items-center">
          <img className="w-5 h-5" src={Clock} alt="" />
          <p>12:40 PM</p>
        </div>
        <div className="flex gap-1 items-center">
          <img className="w-5 h-5" src={Calender} alt="" />
          <p>03 Jan 2023</p>
        </div>
      </div>
      <p className="w-max px-6 py-1 rounded text-[12px] bg-[#F1F1F1CC]">
        Status : Completed
      </p>
      <button
        onClick={() => setShowAttendance(true)}
        className="bg-black text-white rounded py-2 text-[14px]"
      >
        Attendance Report
      </button>
    </div>
  );
};

export default ClassesCard;
