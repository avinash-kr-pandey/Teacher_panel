import React from "react";
import Download from "../../../Assets/Icons/tpdownload.svg";
import Eye from "../../../Assets/Icons/tpeye.svg";

const DRFinalList = () => {
  return (
    <div className="border border-[#D9D9D9] flex flex-col text-[13px]">
      {/* heading */}
      <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr] w-full bg-[#F1F1F1] border-b border-[#D9D9D9] text-[#474747] font-medium py-2 px-4">
        <p>Student ID</p>
        <p>Name</p>
        <p className="text-center ">Attachements</p>
        <p className="text-center ">Marks</p>
        <p className="text-center">Actions</p>
      </div>
      <div className="max-h-[70vh] overflow-y-auto customScrollfortp">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr] w-full text-[#474747] items-center py-2 px-4">
          <p>TIPSGHM 2022336</p>
          <p>Harsh Kadyan</p>
          <div className="flex mx-auto gap-2 border border-[#D7D7D7] px-3 py-1 w-max rounded">
            <p>Download</p>
            <img src={Download} alt="" />
          </div>
          <div className="flex gap-2 mx-auto">
            <p className="w-[40px] h-[20px] border border-[#D7D7D7] text-center rounded">
              30
            </p>
            <p>/50</p>
          </div>
          <div className="text-[#2C62EE] flex justify-center">
            <button className="flex items-center gap-2 bg-[#F2F2F2] py-1 px-2 rounded font-medium">
              <img src={Eye} alt="" />
              <p>View Details</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRFinalList;
