import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/Images/hmlogo.png";
import Dashboard from "../../Assets/Icons/tpdashboard.svg";
import DashboardW from "../../Assets/Icons/tpdashboardwhite.svg";
import Live from "../../Assets/Icons/tplive.svg";
import LiveW from "../../Assets/Icons/tplivewhite.svg";
import Plus from "../../Assets/Icons/tpplus.svg";
import PlusW from "../../Assets/Icons/tppluswhite.svg";
import Assignment from "../../Assets/Icons/tpassignment.svg";
import AssignmentW from "../../Assets/Icons/tpassignmentwhite.svg";
import Batch from "../../Assets/Icons/tpbatch.svg";
import BatchW from "../../Assets/Icons/tpbatchwhite.svg";
import Doubts from "../../Assets/Icons/tpquestion.svg";
import DoubtsW from "../../Assets/Icons/tpquestionwhite.svg";
import Logout from "../../Assets/Icons/tplogout.svg";

const Sidebar = ({ onItemClick, selectedComponent }) => {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-between h-[100vh] pb-4 ">
      <div>
        <Link to={"/"} className="flex pl-4 w-full py-4 cursor-pointer">
          <img className="w-[55%]" src={Logo} alt="" />
        </Link>
        <div className="flex flex-col gap-2 px-4 w-full font-int text-[#808080] text-[14px]">
          <Link
            to={"dashboard"}
            onClick={() => onItemClick("dashboard")}
            className={`flex items-center gap-4 cursor-pointer  px-4 py-4 rounded-lg ${
              location.pathname === "/dashboard"
                ? "bg-[#7F7F7F] text-white"
                : " "
            }`}
          >
            <div>
              {location.pathname === "/dashboard" ? (
                <img className="w-4 h-4 invert-0" src={DashboardW} alt="" />
              ) : (
                <img className="w-4 h-4 invert-0" src={Dashboard} alt="" />
              )}
            </div>
            <p className="">Dashboard</p>
          </Link>
          <Link
            to={"liveclass"}
            onClick={() => onItemClick("liveclass")}
            className={`flex items-center gap-4 cursor-pointer px-4 py-4 rounded-lg ${
              location.pathname === "/liveclass"
                ? "bg-[#7F7F7F] text-white"
                : " "
            }`}
          >
            <div>
              {location.pathname === "/liveclass" ? (
                <img className="w-4 h-4 invert-0" src={LiveW} alt="" />
              ) : (
                <img className="w-4 h-4" src={Live} alt="" />
              )}
            </div>
            <p>Live Classes</p>
          </Link>
          <Link
            to={"addcourse"}
            onClick={() => onItemClick("addcourse")}
            className={`flex items-center gap-4 cursor-pointer px-4 py-4 rounded-lg ${
              location.pathname === "/addcourse"
                ? "bg-[#7F7F7F] text-white"
                : " "
            }`}
          >
            <div>
              {location.pathname === "/addcourse" ? (
                <img className="w-4 h-4 invert-0" src={PlusW} alt="" />
              ) : (
                <img className="w-4 h-4" src={Plus} alt="" />
              )}
            </div>
            <p>Add course</p>
          </Link>
          <Link
            to={"/assignment/scheduledassignments"}
            onClick={() => onItemClick("assignment")}
            className={`flex items-center gap-4 cursor-pointer px-4 py-4 rounded-lg ${
              location.pathname === "/assignment/history" ||
              location.pathname ===
                "/assignment/scheduledassignments"
                ? "bg-[#7F7F7F] text-white"
                : " "
            }`}
          >
            <div>
              {location.pathname === "/assignment/history" ||
              location.pathname ===
                "/assignment/scheduledassignments" ? (
                <img className="w-4 h-4 invert-0" src={AssignmentW} alt="" />
              ) : (
                <img className="w-4 h-4" src={Assignment} alt="" />
              )}
            </div>
            <p>Assignments</p>
          </Link>
          <Link
            to={"batch/courses"}
            onClick={() => onItemClick("batch")}
            className={`flex items-center gap-4 cursor-pointer px-4 py-4 rounded-lg ${
              location.pathname === "/batch/courses" ||
              location.pathname === "/batch/batches"
                ? "bg-[#7F7F7F] text-white"
                : " "
            }`}
          >
            <div>
              {location.pathname === "/batch/courses" ||
              location.pathname === "/batch/batches" ? (
                <img className="w-4 h-4 invert-0" src={BatchW} alt="" />
              ) : (
                <img className="w-4 h-4" src={Batch} alt="" />
              )}
            </div>
            <p>Batches</p>
          </Link>
          <Link
            to={"media"}
            onClick={() => onItemClick("media")}
            className={`flex items-center gap-4 cursor-pointer px-4 py-4 rounded-lg ${
              location.pathname === "/media"
                ? "bg-[#7F7F7F] text-white"
                : " "
            }`}
          >
            <div>
              {location.pathname === "/media" ? (
                <img className="w-4 h-4 invert-0" src={BatchW} alt="" />
              ) : (
                <img className="w-4 h-4" src={Batch} alt="" />
              )}
            </div>
            <p>Course Media</p>
          </Link>
          <div
            onClick={() => onItemClick("doubts")}
            className={`flex items-center gap-4 cursor-pointer px-4 py-4 rounded-lg ${
              location.pathname === "/doubts"
                ? "bg-[#7F7F7F] text-white"
                : " "
            }`}
          >
            <div>
              {location.pathname === "/doubts" ? (
                <img className="w-4 h-4 invert-0" src={DoubtsW} alt="" />
              ) : (
                <img className="w-4 h-4" src={Doubts} alt="" />
              )}
            </div>
            <p>Doubts</p>
          </div>
        </div>
      </div>
      <button className="flex text-white gap-2 bg-black mx-4 py-2 rounded-lg justify-center items-center">
        <img src={Logout} alt="" />
        <p>Log Out</p>
      </button>
    </div>
  );
};

export default Sidebar;
