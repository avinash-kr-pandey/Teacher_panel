import React, { useState } from "react";
import Search from "../../Assets/Icons/tpsearch.svg";
import Arrow from "../../Assets/Icons/tpbatcharrow.svg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BatchDetails from "./BatchDetails/BatchDetails";
import { BatchDetailsProvider, useBatchDetails } from "./BatchDetailsContext";
import "./Batch.css";
import Attendance from "./AttendanceReport/Attendance";

const Batches = () => {
  return (
    <BatchDetailsProvider>
      <BatchesContent />
    </BatchDetailsProvider>
  );
};

const BatchesContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { batchDetails, setBatchDetails } = useBatchDetails();
  const [showAttendance, setShowAttendance] = useState(false);

  return (
    <div className="px-8 py-10 flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center font-int">
          <div>
            <p className="font-semibold text-[19px]">My Courses</p>
          </div>
        </div>
        <div className="flex justify-between font-int border-b border-[#E4E4E4]">
          <div className="flex items-start gap-4">
            <div
              onClick={() => navigate("/teacherpanel/batch/courses")}
              className={`font-semibold text-[#6D6D6D] pb-3 cursor-pointer ${
                location.pathname === "/teacherpanel/batch/courses"
                  ? "border-b-[2px] border-[#6A6A6A] text-black"
                  : ""
              }`}
            >
              Courses
            </div>
            {location.pathname === "/teacherpanel/batch/batches" && (
              <div className="flex items-center gap-4 font-semibold cursor-pointer text-black">
                <img className="w-3" src={Arrow} alt="" />
                <p>Batches</p>
              </div>
            )}
          </div>
          <div className="flex gap-3 bg-[#F1F1F1] px-4 py-1 rounded-lg mb-2">
            <img src={Search} alt="" />
            <input
              className="bg-[#F1F1F1] text-[13px] w-[200px] outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <Outlet />
      {batchDetails && (
        <div className="w-[75%] flex right-0 top-0 h-[100vh] absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] ">
          <BatchDetails
            setBatchDetails={setBatchDetails}
            setShowAttendance={setShowAttendance}
          />
        </div>
      )}
      {showAttendance && (
        <div className="w-[75%] flex right-0 top-0 h-[100vh] absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] ">
          <Attendance
            setBatchDetails={setBatchDetails}
            setShowAttendance={setShowAttendance}
          />
        </div>
      )}
    </div>
  );
};

export default Batches;
