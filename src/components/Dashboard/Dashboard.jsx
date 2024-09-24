import React, { useEffect, useState } from "react";
import Link from "../../Assets/Icons/tplink.svg";
import LinkGray from "../../Assets/Icons/tplinkgray.svg";
import LiveClassCard from "./LiveClassCard";
import MyCourseCard from "./MyCourseCard";
import MyBatchCard from "./MyBatchCard";
import ScheduledClasses from "../LiveClasses/ScheduledClasses";
import { BASE_URL, Fetchcourses, Liveclasses } from "../../Api/api"; 
import { ImSpinner9 } from "react-icons/im";

const Dashboard = () => {
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [completedClasses, setCompletedClasses] = useState([]);
  const [Allcourses, setAllcourses] = useState([]);
  const [allLiveclasses, setallLiveclasses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true); // Loading state for courses
  const [loadingLiveClasses, setLoadingLiveClasses] = useState(true); // Loading state for live classes

  useEffect(() => {
    async function Fetchdata() {
      try {
        const fetchcourses = await Fetchcourses();
        setAllcourses(fetchcourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoadingCourses(false); // Stop loading after fetching courses
      }

      try {
        const liveclass = await Liveclasses();
        setallLiveclasses(liveclass);
      } catch (error) {
        console.error("Error fetching live classes:", error);
      } finally {
        setLoadingLiveClasses(false); // Stop loading after fetching live classes
      }
    }
    Fetchdata();
  }, []);
  
  return (
    <div className="px-8 py-10 grid grid-cols-3 gap-12">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-int">
          <p className="text-[#808080] font-medium text-[18px]">Live Classes</p>
        </div>
        <div className="flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp">
          {loadingLiveClasses ? (
            <div className="flex justify-center items-center h-full">
              <ImSpinner9 className="animate-spin text-4xl text-green-600 size-9" />
            </div>
          ) : (
            allLiveclasses?.map((classInfo, ind) => (
              <LiveClassCard data={classInfo} key={ind} />
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4">
        <div className="flex justify-between font-int">
          <p className="text-[#808080] font-medium text-[18px]">My Course</p>
        </div>
        <div className="flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp">
          {loadingCourses ? (
            <div className="flex justify-center items-center h-full">
              <ImSpinner9 className="animate-spin text-4xl text-green-600 size-9" />
            </div>
          ) : (
            Allcourses?.map((item, ind) => (
              <MyCourseCard key={ind} data={item} />
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-int">
          <p className="text-[#808080] font-medium text-[18px]">My Batches</p>
          <div className="flex items-center gap-1 rounded-[4px] font-normal text-[#808080] border border-[#808080] px-2 py-1 text-[12px]">
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
