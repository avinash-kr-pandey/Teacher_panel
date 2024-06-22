import React, { useState } from "react";
import Cross from "../../../Assets/Icons/tpcross.svg";
import DRDetails from "./DRDetails";
import DRResult from "./DRResult";
import ConfirmPopUp from "./ConfirmPopUp";

const DeclareResultDetails = ({
  setDeclareResultDetails,
  setResultSubmit,
  setAciveSection,
  activeSection,
}) => {
  // const [activeSection, setAciveSection] = useState('Details');
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  return (
    <div
      className={`bg-white h-full w-full px-4 py-6 font-int relative ${
        confirmPopUp && "appearance-none"
      }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <img
            onClick={() => setDeclareResultDetails(false)}
            className="w-5 h-5 cursor-pointer"
            src={Cross}
            alt=""
          />
        </div>
        <div className="flex justify-between items-start">
          <p className="text-[26px] text-[#3C3C3C] font-medium">
            Articulate structure of C++ and Java in Semester 1
          </p>
          {activeSection === "Result" && (
            <button
              onClick={() => setConfirmPopUp(true)}
              className="py-2 w-[150px] bg-[#2C62EE] text-white rounded text-[13px]"
            >
              Publish Result
            </button>
          )}
        </div>
        <div className="flex bg-[#EEEFF9] w-max text-[13px] rounded">
          <button
            onClick={() => setAciveSection("Details")}
            className={`py-2 w-[120px]  text-[#7E7E7E] rounded ${
              activeSection === "Details" ? "bg-[#2C62EE] text-white" : ""
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setAciveSection("Result")}
            className={`py-2 w-[120px] text-[#7E7E7E] rounded ${
              activeSection === "Result" ? "bg-[#2C62EE] text-white" : ""
            }`}
          >
            Result
          </button>
        </div>
        {activeSection === "Details" && <DRDetails />}
        {activeSection === "Result" && <DRResult />}
      </div>
      {confirmPopUp && (
        <ConfirmPopUp
          setConfirmPopUp={setConfirmPopUp}
          setResultSubmit={setResultSubmit}
          setDeclareResultDetails={setDeclareResultDetails}
        />
      )}
    </div>
  );
};

export default DeclareResultDetails;
