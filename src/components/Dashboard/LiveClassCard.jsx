import React from "react";
import Clock from "../../Assets/Icons/tpclock.svg";
import Calendar from "../../Assets/Icons/tpcalender.svg";
import { formatDate, formatTime, getClassStatus } from "../../Api/api";
import { Link } from "react-router-dom";

const LiveClassCard = ({ data}) => {
  return (
    <div className="border border-gray-400 rounded-xl px-4 py-2 text-gray-400 font-int flex flex-col gap-3">
      <div>
        <p className="font-semibold text-[18px]">{data?.lesson_name}</p>
      </div>
      <p className="border border-gray-400 w-max px-2 rounded text-[13px]">
        Batch: {''}
      </p>
      <div className="flex gap-8 items-center text-[14px]">
        <div className="flex gap-1 items-center">
          <img className="w-5 h-5" src={Clock} alt="Clock Icon" />
          <p>{formatTime(data?.liveClass?.startDate)}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img className="w-5 h-5" src={Calendar} alt="Calendar Icon" />
          <p>{formatDate(data?.liveClass?.startDate)}</p>
        </div>
      </div>
      <p className="w-max px-6 py-1 rounded text-[12px] bg-gray-200">
        Status: {getClassStatus(data?.liveClass?.startDate,data?.liveClass?.endDate)}
      </p>
      <Link to={data?.liveClass?.meetingLink} target="_blank" className="bg-black text-white rounded py-2 text-[14px] text-center">
        Join Now
      </Link>
    </div>
  );
};

export default LiveClassCard;
