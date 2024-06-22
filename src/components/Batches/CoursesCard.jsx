import React from "react";
import Img from "../../Assets/Images/tpcourseimg.png";
import Icon1 from "../../Assets/Icons/tpmycourseicon1.svg";
import Icon2 from "../../Assets/Icons/tpmycourseicon2.svg";
import { useNavigate } from "react-router-dom";

const CoursesCard = ({ setCourse }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/teacherpanel/batch/batches")}
      className="bg-white font-pop px-4 py-4 shadow-xl rounded-xl flex flex-col gap-2 cursor-pointer"
    >
      <div>
        <img className="rounded-xl w-max h-[150px]" src={Img} alt="" />
      </div>
      <div className="flex justify-between text-[#696984] text-[9px]">
        <div className="flex items-center gap-2">
          <img className="w-4 h-4" src={Icon1} alt="" />
          <p>Design</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-4 h-4" src={Icon2} alt="" />
          <p>3 Month</p>
        </div>
      </div>
      <p className="font-medium text-[16px] text-[#252641]">
        AWS Certified solutions Architect
      </p>
      <p className="text-[#696984] text-[11px]">
        Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
        tempor
      </p>
      <button className="bg-black text-white rounded py-1 text-[10px]">
        View Details
      </button>
    </div>
  );
};

export default CoursesCard;
