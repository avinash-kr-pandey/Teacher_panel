import React, { useState } from "react";
import Download from "../../../Assets/Icons/tpdownload.svg";

const DRResult = () => {
  const [addNote, setAddNote] = useState(false);
  return (
    <div className="border border-[#D9D9D9] flex flex-col text-[13px]">
      {/* heading */}
      <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr] w-full bg-[#F1F1F1] border-b border-[#D9D9D9] text-[#474747] font-medium py-2 px-4">
        <p>Student ID</p>
        <p>Name</p>
        <p className="text-center ">Attachements</p>
        <p className="text-center ">Marks</p>
        <p>Actions</p>
      </div>
      <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr] w-full text-[#474747] items-center py-2 px-4">
        <p>TIPSGHM 2022336</p>
        <p>Harsh Kadyan</p>
        <div className="flex mx-auto gap-2 border border-[#D7D7D7] px-3 py-1 w-max rounded">
          <p>Download</p>
          <img src={Download} alt="" />
        </div>
        <div className="flex gap-2 mx-auto">
          <input
            type="number"
            name=""
            id=""
            className="w-[40px] h-[20px] border border-[#D7D7D7] outline-none rounded"
          />
          <p>/50</p>
        </div>
        <div className="text-[#2C62EE] flex gap-2 relative">
          <button
            onClick={() => setAddNote(true)}
            className="flex items-center bg-[#F2F2F2] py-1 px-2 rounded "
          >
            <p>+Add Note</p>
          </button>
          {addNote && (
            <div className="w-[180px] border border-[#E7E7E7] min-h-[140px] bg-white absolute top-[115%] right-[30%] py-2 rounded-lg flex flex-col items-center gap-2 text-[13px]">
              <textarea
                name=""
                id=""
                placeholder="Add note..."
                className="border border-[#E7E7E7] rounded-md p-1 w-[165px] h-[90px]"
              />
              <button
                onClick={() => setAddNote(false)}
                className="flex items-center bg-[#F2F2F2] py-1 px-2 rounded relative"
              >
                OK
              </button>
            </div>
          )}
          <button className="flex items-center bg-[#ECF1FF] py-1 px-2 rounded">
            <p>Save</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DRResult;
