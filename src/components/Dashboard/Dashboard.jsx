import React, { useEffect, useState } from "react";
import Link from "../../Assets/Icons/tplink.svg";
import LinkGray from "../../Assets/Icons/tplinkgray.svg";
import LiveClassCard from "./LiveClassCard";
import MyCourseCard from "./MyCourseCard";
import MyBatchCard from "./MyBatchCard";
import ScheduledClasses from "../LiveClasses/ScheduledClasses";

const Dashboard = () => {
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [completedClasses, setCompletedClasses] = useState([]);

  useEffect(() => {
    // Simulated asynchronous data fetch
    const fetchData = () => {
      const initialData = [
        {
          id: 1,
          title: "How to Make an Array and its Types in C++",
          batch: "3CO - JVY",
          time: "12:12 PM",
          date: "03 Jan 2023",
          status: "Ongoing",
        },
        {
          id: 2,
          title: "Introduction to React Hooks",
          batch: "4AB - FGH",
          time: "10:00 AM",
          date: "15 Feb 2023",
          status: "Upcoming",
        },
        {
          id: 3,
          title: "Python Programming Fundamentals",
          batch: "5XY - OPQ",
          time: "02:30 PM",
          date: "20 Mar 2023",
          status: "Scheduled",
        },
        {
          id: 4,
          title: "FSD",
          batch: "FALCON",
          time: "10:30 PM",
          date: "10 Mar 2023",
          status: "Completed",
        },
        {
          id: 5,
          title: "Testing",
          batch: "5XY - OPQ",
          time: "02:30 PM",
          date: "20 Mar 2023",
          status: "Scheduled",
        },
      ];

      const filteredScheduledClasses = initialData.filter(
        (classInfo) => classInfo.status !== "Completed"
      );

      setScheduledClasses(filteredScheduledClasses);
    };

    // Simulate data fetch delay
    setTimeout(fetchData, 1000);
  }, []);
  return (
    <div className="px-8 py-10 grid grid-cols-3 gap-12">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-int">
          <p className="text-[#808080] font-medium text-[18px]">Live Classes</p>
          <div className="flex items-center gap-1 bg-black rounded-[4px] font-normal text-white px-2 py-1 text-[12px]">
            <p>View All</p>
            <img src={Link} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp">
          {/* <LiveClassCard/> */}
          {/* <ScheduledClasses className="flex flex-col gap-6 w-full" /> */}
          {scheduledClasses.map((classInfo) => (
            <LiveClassCard
              key={classInfo.id}
              title={classInfo.title}
              batch={classInfo.batch}
              time={classInfo.time}
              date={classInfo.date}
              status={classInfo.status}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4">
        <div className="flex justify-between font-int">
          <p className="text-[#808080] font-medium text-[18px]">My Course</p>
        </div>
        <div className="flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp">
          <MyCourseCard />
          <MyCourseCard />
          <MyCourseCard />
          <MyCourseCard />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-int">
          <p className="text-[#808080] font-medium text-[18px]">My Batches</p>
          <div className="flex items-center gap-1  rounded-[4px] font-normal text-[#808080] border border-[#808080] px-2 py-1 text-[12px]">
            <p>View All</p>
            <img src={LinkGray} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp">
          <MyBatchCard />
          <MyBatchCard />
          <MyBatchCard />
          <MyBatchCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
