import React from "react";
import Cross from "../../../Assets/Icons/tpcross.svg";
import Tick from "../../../Assets/Icons/tpdoubletick.svg";
import DRFinalList from "./DRFinalList";
import DRDetails from "./DRDetails";

const FinalSubmit = ({ setResultSubmit, activeSection, setAciveSection }) => {
  return (
    <div className="bg-white h-full w-full px-4 py-6 font-int">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start mt-3">
          <img
            onClick={() => setResultSubmit(false)}
            className="w-5 h-5 cursor-pointer"
            src={Cross}
            alt=""
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[26px] text-[#3C3C3C] font-medium">
            Declare Result
          </p>
          <div className="flex items-center gap-2 bg-[#ECF1FF] text-[13px] text-[#3D70F5] py-[6px] px-3 rounded">
            <p>Result Declared on 12:30 AM | 22 September 2023</p>
            <img className="w-3 h-2" src={Tick} alt="" />
          </div>
        </div>
        <p className="text-[20px] text-[#3C3C3C] font-semibold">
          Articulate structure of C++ and Java in Semester 1
        </p>
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
        {activeSection === "Result" && <DRFinalList />}
        {activeSection === "Details" && <DRDetails />}
      </div>
    </div>
  );
};

export default FinalSubmit;
