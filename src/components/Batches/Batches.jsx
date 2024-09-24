// import React, { useContext, useState } from "react";
// import Search from "../../Assets/Icons/tpsearch.svg";
// import Arrow from "../../Assets/Icons/tpbatcharrow.svg";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import BatchDetails from "./BatchDetails/BatchDetails";
// import { BatchDetailsProvider, useBatchDetails } from "./BatchDetailsContext";
// import { Fetchcourses } from "../../Api/api";
// import "./Batch.css";
// import Attendance from "./AttendanceReport/Attendance";

// const Batches = () => {
//   return (
//     <BatchDetailsProvider>
//       <BatchesContent />
//     </BatchDetailsProvider>
//   );
// };

// const BatchesContent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { batchDetails, setBatchDetails } = useBatchDetails();
//   const [showAttendance, setShowAttendance] = useState(false);

//   // Fetch courses from context
//   const courses = useContext(Fetchcourses);

//   return (
//     <div className="px-8 py-10 flex flex-col gap-3">
//       <div className="flex flex-col gap-3">
//         <div className="flex justify-between items-center font-int">
//           <div>
//             <p className="font-semibold text-[19px]">My Courses</p>
//           </div>
//         </div>
//         <div className="flex justify-between font-int border-b border-[#E4E4E4]">
//           <div className="flex items-start gap-4">
//             <div
//               onClick={() => navigate("/teacherpanel/batch/courses")}
//               className={`font-semibold text-[#6D6D6D] pb-3 cursor-pointer ${
//                 location.pathname === "/teacherpanel/batch/courses"
//                   ? "border-b-[2px] border-[#6A6A6A] text-black"
//                   : ""
//               }`}
//             >
//               Courses
//             </div>
//             {location.pathname === "/teacherpanel/batch/batches" && (
//               <div className="flex items-center gap-4 font-semibold cursor-pointer text-black">
//                 <img className="w-3" src={Arrow} alt="" />
//                 <p>Batches</p>
//               </div>
//             )}
//           </div>
//           <div className="flex gap-3 bg-[#F1F1F1] px-4 py-1 rounded-lg mb-2">
//             <img src={Search} alt="" />
//             <input
//               className="bg-[#F1F1F1] text-[13px] w-[200px] outline-none"
//               type="text"
//               placeholder="Search..."
//             />
//           </div>
//         </div>
//       </div>

//       {/* Display the courses */}
//       <div className="mt-5">
//         {courses && courses.length > 0 ? (
//           <div className="grid grid-cols-3 gap-4">
//             {courses.map((course) => (
//               <div key={course.id} className="p-4 border shadow-md">
//                 <h3 className="text-lg font-semibold">{course.name}</h3>
//                 <p>{course.description}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No courses available</p>
//         )}
//       </div>

//       <Outlet />
//       {batchDetails && (
//         <div className="w-[75%] flex right-0 top-0 h-[100vh] absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] ">
//           <BatchDetails
//             setBatchDetails={setBatchDetails}
//             setShowAttendance={setShowAttendance}
//           />
//         </div>
//       )}
//       {showAttendance && (
//         <div className="w-[75%] flex right-0 top-0 h-[100vh] absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] ">
//           <Attendance
//             setBatchDetails={setBatchDetails}
//             setShowAttendance={setShowAttendance}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Batches;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Img from "../../Assets/Images/tpcourseimg.png";
import Icon1 from "../../Assets/Icons/tpmycourseicon1.svg";
import Icon2 from "../../Assets/Icons/tpmycourseicon2.svg";
import { Fetchcourses } from "../../Api/api";
import { ImSpinner9 } from "react-icons/im";

const Batches = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const getCourses = async () => {
      const courses = await Fetchcourses();
      if (courses) {
        setAllCourses(courses);
      }
      setLoading(false);
    };
    getCourses();
  }, []);

  return (
    <div className="px-8 py-10">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center font-int">
          <div>
            <p className="font-semibold text-[19px]">My Courses</p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ImSpinner9 className="animate-spin text-4xl text-green-600 size-10" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 gap-6">
            {allCourses?.map((course, index) => (
              <div
                key={index}
                className="relative bg-white font-pop px-4 py-4 shadow-xl rounded-xl flex flex-col gap-2"
              >
                <div
                  className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                    course?.display ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>

                <div>
                  <img
                    className="rounded-xl"
                    src={course?.featured_image || Img}
                    alt="Course"
                  />
                </div>

                <div className="flex justify-between text-[#696984] text-[12px]">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src={Icon1} alt="Category" />
                    <p>{course?.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src={Icon2} alt="Duration" />
                    <p>3 Months</p>
                  </div>
                </div>

                <p className="font-medium text-[16px]">{course?.title}</p>

                <p className="text-[#696984] text-[11px]">
                  {course?.overview?.slice(0, 40)}...
                </p>

                <button
                  className="bg-black text-white rounded py-1 text-[10px]"
                  onClick={() => navigate(`/batchdetails/${course._id}`)} 
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Batches;
