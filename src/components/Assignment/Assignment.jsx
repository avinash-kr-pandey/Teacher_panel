import React from "react";
import Plus from "../../Assets/Icons/tppluswhite.svg";
import Search from "../../Assets/Icons/tpsearch.svg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Assignment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="px-8 py-10 flex flex-col gap-5">
      <div className="flex justify-between items-center font-int">
        <div>
          <p className="font-semibold text-[19px]">Assignments</p>
        </div>
        <div className="flex items-center gap-2 bg-[#808080] px-3 py-[2px] rounded text-white w-max text-[13px]">
          <img className="w-2 h-2" src={Plus} alt="" />
          <p>Add Assignement</p>
        </div>
      </div>
      <div className="flex justify-between font-int border-b border-[#E4E4E4]">
        <div className="flex gap-6">
          <p
            onClick={() =>
              navigate("/teacherpanel/assignment/scheduledassignments")
            }
            className={`text-[#6D6D6D] cursor-pointer pr-3 ${
              location.pathname ===
              "/teacherpanel/assignment/scheduledassignments"
                ? "border-b-[1.5px] border-[#6A6A6A] font-semibold"
                : ""
            }`}
          >
            Scheduled Assignments
          </p>
          <p
            onClick={() => navigate("/teacherpanel/assignment/history")}
            className={`text-[#6D6D6D] cursor-pointer px-3 ${
              location.pathname === "/teacherpanel/assignment/history"
                ? "border-b-[1.5px] border-[#6A6A6A] font-semibold"
                : ""
            }`}
          >
            History
          </p>
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
      <Outlet />
    </div>
  );
};

export default Assignment;
