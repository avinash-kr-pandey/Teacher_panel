import React, { useState } from "react";
import Cross from "../../../Assets/Icons/tpcross.svg";
import Overview from "./Overview";
import Classes from "./Classes";

const BatchDetails = ({ setBatchDetails, setShowAttendance }) => {
  const [section, setSection] = useState("overview");
  return (
    <div className="bg-white w-full px-4 py-6 font-int relative">
      <div className="flex flex-col gap-6">
        <img
          onClick={() => setBatchDetails(false)}
          className="w-5 h-5 cursor-pointer"
          src={Cross}
          alt=""
        />
        <p className="text-[28px] text-[#434343] font-semibold">
          Batch Details : 3CO-JVY{" "}
        </p>
      </div>
      <div className="flex gap-10 mt-10 text-[#9A9A9A] border-b border-[#E4E4E4]">
        <div
          onClick={() => setSection("overview")}
          className={`cursor-pointer ${
            section === "overview" &&
            "text-[#2C62EE] font-medium border-b border-[#2C62EE] pb-3"
          }`}
        >
          <p>Overview</p>
        </div>
        <div
          onClick={() => setSection("classes")}
          className={`cursor-pointer ${
            section === "classes" &&
            "text-[#2C62EE] font-medium border-b border-[#2C62EE] pb-3"
          }`}
        >
          <p>Classes</p>
        </div>
      </div>
      <div className="overflow-y-auto h-[75%] customScrollfortp">
        {section === "overview" && <Overview />}
        {section === "classes" && (
          <Classes setShowAttendance={setShowAttendance} />
        )}
      </div>
    </div>
  );
};

export default BatchDetails;
