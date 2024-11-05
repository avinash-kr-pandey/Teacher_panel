import React, { useState, useEffect } from "react";
import LiveClassCard from "../Dashboard/LiveClassCard";
import ClassHistory from "./ClassHistory";
import { Fetchcourses, Liveclasses } from "../../Api/api";
import Search from "../../Assets/Icons/tpsearch.svg";

const ScheduledClasses = () => {
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [completedClasses, setCompletedClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function Fetchdata() {
      // let fetchcourses=await Fetchcourses()
      // setAllcourses(fetchcourses)
      let liveclass = await Liveclasses();
      setScheduledClasses(liveclass);
    }
    Fetchdata();
  }, []);

  return (
    <div>
      {/* <h2>Scheduled Classes</h2> */}

      <div className="flex flex-row justify-between px-4 py-2">
        <div className="text-gray-600 font-semibold text-lg">Scheduled Classes</div>
        <div>
          <div className="flex w-full gap-3 bg-[#F1F1F1] px-4 py-1 rounded-lg mb-2">
            <img src={Search} alt="Search" />
            <input
              className="bg-[#F1F1F1] text-[13px] w-[300px] h-8 outline-none"
              type="text"
              placeholder="Search by title or lesson..."
              value={searchTerm} // Bind the searchTerm to the input field
              onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 gap-y-8">
        {scheduledClasses?.map((classInfo, ind) => (
          <LiveClassCard key={ind} data={classInfo} />
        ))}
      </div>
    </div>
  );
};

export default ScheduledClasses;
