import React, { useState } from "react";
import Arrow from "../../../Assets/Icons/tpattendancearrow.svg";
import Clock from "../../../Assets/Icons/tpattendanceclock.svg";
import Calender from "../../../Assets/Icons/tpattendancecalender.svg";
import AttendanceList from "./AttendanceList";

const ReviewAttendance = ({
  setBatchDetails,
  setShowAttendance,
  setActiveAttendance,
}) => {
  const handleClose = () => {
    setBatchDetails(false);
    setShowAttendance(false);
  };
  return (
    <div className="bg-white w-full px-4 py-6 font-int ">
      <div className="flex flex-col gap-6">
        <img
          onClick={() => setActiveAttendance("report")}
          className="w-5 h-5 cursor-pointer"
          src={Arrow}
          alt=""
        />
        <div className="flex justify-between">
          <p className="text-[28px] text-[#434343] font-semibold">
            Attendance Report{" "}
          </p>
          <button
            onClick={() => setActiveAttendance("final")}
            className="px-6 py-2 bg-[#2C62EE] text-white text-[13px] rounded-md"
          >
            Confirm
          </button>
        </div>
        <p className="text-[20px] text-[#000000] font-semibold">
          How to Make an Array and it’s Types in C++
        </p>
        <div className="text-[#989898] text-[13px] flex gap-4 font-medium">
          <p className="border-[#D3D3D3] border px-2 py-1 rounded">
            Batch 3CO - JVY
          </p>
          <div className="flex items-center gap-3">
            <img className="w-4 h-4" src={Clock} alt="" />
            <p>12:40 PM</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4 h-4" src={Calender} alt="" />
            <p>03 Jan 2023</p>
          </div>
          <div className="bg-[#EDEDED] px-2 py-[2px] rounded flex items-center">
            <p>Status : Completed</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <p className="text-[20px] text-[#000000] font-semibold">
            Total Students : 256
          </p>
          <div className="flex gap-10 text-[18px]">
            <p className="text-[#11A529]">Present : 256</p>
            <p className="text-[#F93333]">Absent : 256</p>
          </div>
          <p className="text-[#474747] text-[18px]">List of Absent Students</p>
        </div>
      </div>
      <div className="py-6">
        <AttendanceList />
      </div>
    </div>
  );
};

export default ReviewAttendance;
