import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../Api/api";
import { jwtDecode } from "jwt-decode";


const InstructorDetail = ({ courseDetails, setCourseDetails }) => {
  const [selectedInstructorId, setSelectedInstructorId] = useState("");
  const [loading, setLoading] = useState(true);

  // Function to fetch the logged-in instructor profile
  const fetchInstructorProfile = async () => {
    let token = localStorage.getItem("teachertoken");
    if (token) {
      let email = jwtDecode(token)?.email;
      try {
        const response = await fetch(`${BASE_URL}/inst/${email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch instructor details");
        }

        const data = await response.json();
        setSelectedInstructorId(data?.instructorDetails?._id); // Set instructor ID
        setCourseDetails({
          ...courseDetails,
          instructor: data?.instructorDetails?._id // Update courseDetails with instructor ID
        });
      } catch (error) {
        console.error("Error fetching instructor details:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchInstructorProfile(); // Fetch instructor profile on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <div className="flex flex-col gap-4 py-6 pl-20 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem] ">
      <h1 className="text-green-500 text-3xl font-semibold font-Montserrat">
        Instructor Details
      </h1>
      <div className="flex bg-gradient-to-r from-greenColor to-green-300 px-5 py-6 rounded-md shadow-md shadow-green-500/5 flex-col gap-2">
        <p className="text-green-100 text-[16px] font-semibold font-Montserrat">
          Instructor Id
        </p>
        <input
          type="text"
          name="instructor"
          value={selectedInstructorId || ""}
          readOnly // Input is read-only since the ID is auto-fetched
          className="px-2 py-1 text-green-400 rounded-md outline-none shadow-md lg:w-[30rem] xl:w-[45rem] md:w-[20rem]"
        />
      </div>
    </div>
  );
};

export default InstructorDetail;
