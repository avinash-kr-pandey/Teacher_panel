import React, { useState, useEffect } from "react";
import LiveClassCard from "../Dashboard/LiveClassCard";
import ClassHistory from "./ClassHistory";
import { Fetchcourses, Liveclasses } from "../../Api/api";

const ScheduledClasses = () => {
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [completedClasses, setCompletedClasses] = useState([]);

  useEffect(() => {
    async function Fetchdata(){
      // let fetchcourses=await Fetchcourses()
      // setAllcourses(fetchcourses)
      let liveclass=await Liveclasses();
      setScheduledClasses(liveclass)
    }
    Fetchdata()
  }, []);

  return (
    <div>
      {/* <h2>Scheduled Classes</h2> */}
      <div className="grid grid-cols-3 gap-5 gap-y-8">
        {scheduledClasses?.map((classInfo,ind) => (
          <LiveClassCard
            key={ind}
            data={classInfo}
          />
        ))}
      </div>
    </div>
  );
};


export default ScheduledClasses;
