import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Cross from "../../Assets/Icons/tpcross.svg";
import Overview from "./BatchDetails/Overview";
import Classes from "./BatchDetails/Classes";
import { FetchBatchesForCourse } from "../../Api/api"; 

const BatchDetailsPage = ({ setBatchDetails, setShowAttendance }) => {
  const { courseId } = useParams(); // Get courseId from URL
  const [batches, setBatches] = useState([]); // State for batch data
  const [section, setSection] = useState("overview");

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const data = await FetchBatchesForCourse(courseId); 
        setBatches(data);
      } catch (error) {
        console.error("Error fetching batches:", error);
      }
    };

    fetchBatches();
  }, [courseId]);

  return (
    <div className="bg-white w-full px-4 py-6 font-int relative">
      <div className="flex flex-col gap-6">
        <img
          onClick={() => setBatchDetails(false)}
          className="w-5 h-5 cursor-pointer"
          src={Cross}
          alt="Close"
        />
        <p className="text-[28px] text-[#434343] font-semibold">
          Batch Details : {courseId}
        </p>
      </div>
      <div className="flex gap-10 mt-10 text-[#9A9A9A] border-b border-[#E4E4E4]">
        <div
          onClick={() => setSection("overview")}
          className={`cursor-pointer ${section === "overview" ? "text-[#2C62EE] font-medium border-b border-[#2C62EE] pb-3" : ""}`}
        >
          <p>Overview</p>
        </div>
        <div
          onClick={() => setSection("classes")}
          className={`cursor-pointer ${section === "classes" ? "text-[#2C62EE] font-medium border-b border-[#2C62EE] pb-3" : ""}`}
        >
          <p>Classes</p>
        </div>
      </div>
      <div className="overflow-y-auto h-[75%] customScrollfortp">
        {section === "overview" && <Overview batches={batches} />} {/* Pass batches data */}
        {section === "classes" && <Classes setShowAttendance={setShowAttendance} />}
      </div>
    </div>
  );
};

export default BatchDetailsPage;
