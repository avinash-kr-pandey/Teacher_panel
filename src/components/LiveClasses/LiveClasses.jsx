import React, { useState } from "react";
import Plus from "../../Assets/Icons/tppluswhite.svg";
import Search from "../../Assets/Icons/tpsearch.svg";
import ScheduledClasses from "./ScheduledClasses";
import ClassHistory from "./ClassHistory";
import Modal from "./Modal";

const LiveClasses = () => {
  const [classes, setClasses] = useState("scheduled");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="px-8 py-10 flex flex-col gap-5">
      <div className="flex justify-between items-center font-int">
        <div>
          <p className="font-semibold text-[19px]">Live Classes</p>
        </div>
        {classes === "scheduled" && (
          <div
            className="flex items-center gap-2 bg-[#808080] px-10 py-2 rounded-lg text-white w-max cursor-pointer"
            onClick={handleModalToggle}
          >
            <img src={Plus} alt="Add Class" />
            <p>Add Class</p>
          </div>
        )}
      </div>
      <div className="flex justify-between font-int border-b border-[#E4E4E4]">
        <div className="flex gap-6">
          <p
            onClick={() => setClasses("scheduled")}
            className={`font-semibold text-[#6D6D6D] cursor-pointer ${
              classes === "scheduled" ? "border-b-[1.5px] border-black" : ""
            }`}
          >
            Scheduled Classes
          </p>
          <p
            onClick={() => setClasses("history")}
            className={`font-semibold text-[#6D6D6D] cursor-pointer ${
              classes === "history" ? "border-b-[1.5px] border-black" : ""
            }`}
          >
            Class History
          </p>
        </div>
        <div className="flex gap-3 bg-[#F1F1F1] px-4 py-1 rounded-lg mb-2">
          <img src={Search} alt="Search" />
          <input
            className="bg-[#F1F1F1] text-[13px] w-[200px] outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div>
        {classes === "scheduled" && <ScheduledClasses />}
        {classes === "history" && <ClassHistory />}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
    </div>
  );
};

export default LiveClasses;
