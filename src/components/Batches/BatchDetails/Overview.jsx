import React from "react";
import Eye from "../../../Assets/Icons/tpbatcheye.svg";

const Overview = () => {
  return (
    <div className="font-int py-4 overflow-y-auto">
      <div>
        <p className="text-[#7E7E7E]">Course</p>
        <p className="text-[#3C3C3C] font-semibold">
          B.Tech In Computer Science and Engineering Specialization in Health
          Informatics
        </p>
      </div>
      <div className="my-7 flex flex-col gap-2">
        <p className="text-[#7E7E7E]">Lesson</p>
        <div className="grid grid-cols-2 gap-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-[#474747]">Lesson 1</p>
            <ul className="text-[11px] text-[#3C3C3C] ml-5 list-inside">
              <li className="list-decimal">C++ Language</li>
              <li className="list-decimal">OOPS using C#</li>
              <li className="list-decimal">Introduction to Bootstrap</li>
              <li className="list-decimal">Graphics Designing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-[#474747]">Lesson 1</p>
            <ul className="text-[11px] text-[#3C3C3C] ml-5 list-inside">
              <li className="list-decimal">C++ Language</li>
              <li className="list-decimal">OOPS using C#</li>
              <li className="list-decimal">Introduction to Bootstrap</li>
              <li className="list-decimal">Graphics Designing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-[#474747]">Lesson 1</p>
            <ul className="text-[11px] text-[#3C3C3C] ml-5 list-inside">
              <li className="list-decimal">C++ Language</li>
              <li className="list-decimal">OOPS using C#</li>
              <li className="list-decimal">Introduction to Bootstrap</li>
              <li className="list-decimal">Graphics Designing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-7 mt-24 flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-[#3C3C3C] font-semibold">
              Semester 5
            </p>
            <ul className="text-[11px] text-[#3C3C3C] ml-5 list-inside">
              <li className="list-decimal">C++ Language</li>
              <li className="list-decimal">OOPS using C#</li>
              <li className="list-decimal">Introduction to Bootstrap</li>
              <li className="list-decimal">Graphics Designing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-[#3C3C3C font-semibold">
              Semester 6
            </p>
            <ul className="text-[11px] text-[#3C3C3C] ml-5 list-inside">
              <li className="list-decimal">C++ Language</li>
              <li className="list-decimal">OOPS using C#</li>
              <li className="list-decimal">Introduction to Bootstrap</li>
              <li className="list-decimal">Graphics Designing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-7 flex flex-col gap-2">
        <p className="text-[#7E7E7E]">Course</p>
        <div className="flex flex-col gap-1">
          <p className="text-[#474747] text-[13px] font-medium">
            Batch Start Date : 02 Sep 2023
          </p>
          <p className="text-[#474747] text-[13px] font-medium">
            Batch Expected End Date : 02 Sep 2026
          </p>
          <p className="text-[#474747] text-[13px] font-medium">
            Total Semesters : 6
          </p>
          <p className="text-[#474747] text-[13px] font-medium">
            Semester Duration : 180 Days
          </p>
          <p className="text-[#474747] text-[13px] font-medium">
            Total Subjects : 73
          </p>
          <p className="text-[#474747] text-[13px] font-medium">
            Total Students : 560
          </p>
        </div>
      </div>
      <div className="my-7 flex flex-col gap-2">
        <p className="text-[#7E7E7E]">My Students</p>
        <div className="flex flex-col pr-4 text-[13px]">
          <div className="flex justify-between px-4 py-2 bg-[#F1F1F1] border border-[#D9D9D9] font-medium text-[#474747]">
            <p>Name</p>
            <p>Actions</p>
          </div>
          <div className="h-[60vh] overflow-y-auto customScrollfortp">
            <div className="flex justify-between px-4 py-2 border border-b-[#D9D9D9] font-medium text-[#474747]">
              <div className="flex gap-3 items-center">
                <div className="bg-[#474747] w-1 h-1 rounded-full"></div>
                <p>Rahul Sharma</p>
              </div>
              <div className="flex items-center gap-3">
                <img className="w-4 h-4" src={Eye} alt="" />
                <p className="text-[#2C62EE]">View Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
