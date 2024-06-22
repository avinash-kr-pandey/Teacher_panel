import React from "react";
import Clock from "../../Assets/Icons/tpclock.svg";
import Calendar from "../../Assets/Icons/tpcalender.svg";

const LiveClassCard = ({ title, batch, time, date, status }) => {
  return (
    <div className="border border-gray-400 rounded-xl px-4 py-2 text-gray-400 font-int flex flex-col gap-3">
      <div>
        <p className="font-semibold text-[18px]">{title}</p>
      </div>
      <p className="border border-gray-400 w-max px-2 rounded text-[13px]">
        Batch: {batch}
      </p>
      <div className="flex gap-8 items-center text-[14px]">
        <div className="flex gap-1 items-center">
          <img className="w-5 h-5" src={Clock} alt="Clock Icon" />
          <p>{time}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img className="w-5 h-5" src={Calendar} alt="Calendar Icon" />
          <p>{date}</p>
        </div>
      </div>
      <p className="w-max px-6 py-1 rounded text-[12px] bg-gray-200">
        Status: {status}
      </p>
      <button className="bg-black text-white rounded py-2 text-[14px]">
        Join Now
      </button>
    </div>
  );
};

export default LiveClassCard;
