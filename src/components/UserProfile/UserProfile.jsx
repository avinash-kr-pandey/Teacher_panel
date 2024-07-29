import React, { useState, useEffect } from "react";
import ProfileImg from "../../Assets/Images/profile-user.png";
import Message from "../../Assets/Icons/tpmessage.svg";
import Number from "../../Assets/Icons/tpnumber.svg";
import Bag from "../../Assets/Icons/tpbag.svg";
import { BASE_URL } from "../../Api/api";
import Navbar from "../Navbar/Navbar";
import { jwtDecode } from "jwt-decode";

const UserProfile = () => {
  const [instructor, setInstructor] = useState({
    name: "",
    lastName: "",
    bio: "",
    email: "",
    phone: "",
    experience: "",
    profile: "",
    timezone: "",
  });
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchInstructorDetails = async () => {
      // const email = "dummy@gmail.com"; // Replace with the dynamic email as needed
      const token = localStorage.getItem("teachertoken");
      if(token){
        let email=jwtDecode(token)?.email
        try {
          const response = await fetch(`${BASE_URL}/inst/${email}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch instructor details");
          }
  
          const data = await response.json();
          setInstructor(data?.instructorDetails);
        } catch (error) {
          console.error("Error fetching instructor details:", error);
        } finally {
          setLoading(false);
        }
      }

     
    };

    fetchInstructorDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInstructor = {
      ...instructor,
      [name]: value,
    };
    setInstructor(updatedInstructor);
    sendChangeRequest(updatedInstructor);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    sendChangeRequest({ ...instructor, profile: file });
  };

  const sendChangeRequest = async (updatedInstructor) => {
    const token = localStorage.getItem("teachertoken");

    try {
      const response = await fetch(`${BASE_URL}/changerequest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedInstructor),
      });

      if (!response.ok) {
        throw new Error("Failed to send change request");
      }

      alert("Change request sent to admin panel!");
    } catch (error) {
      console.error("Error sending change request:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!instructor) {
    return <div>Error loading instructor details.</div>;
  }

  return (
    <>
      {/* <Navbar userName={instructor.name} /> */}
      <div className="font-int px-10 pr-72 py-10 flex flex-col gap-4">
        <div className="text-[#384D6C] py-2 px-2 border-b w-max border-[#D0D0D0]">
          <p className="font-semibold text-[18px]">User Profile</p>
        </div>
        <form>
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-4 items-center">
              <div className="bg-white shadow-lg rounded-full w-[80px] h-[80px] flex justify-center items-center">
                <div className="w-[72px] h-[72px] rounded-full">
                  <img
                    src={preview || instructor.profile || ProfileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-[50%]"
                  />
                </div>
              </div>
              <div className="text-[#384D6C] font-mons">
                <p className="text-[16px] font-bold">{instructor.name}</p>
                <p className="text-[16px]">Full Stack Development</p>
                <p className="text-[13px] text-[#6B7280]">
                  {instructor.timezone}
                </p>
              </div>
            </div>
            <div className="text-white text-[11px] flex gap-10">
              <button
                type="button"
                className="bg-black rounded-md w-[150px] py-3 font-bold"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Upload New Photo
              </button>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <hr className="border-[#D0D0D0] mt-3" />
          <div className="flex flex-col gap-4 mt-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-[13px] text-[#384D6C] font-bold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="eg. Alaa"
                  className="border border-[#D1D5DB] px-4 py-2 text-[14px] placeholder:italic placeholder:font-light rounded-md outline-none"
                  value={instructor.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="lastName"
                  className="text-[13px] text-[#384D6C] font-bold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="eg. Mohamed"
                  className="border border-[#D1D5DB] px-4 py-2 text-[14px] placeholder:italic placeholder:font-light rounded-md outline-none"
                  value={instructor.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="bio"
                className="text-[13px] text-[#384D6C] font-bold"
              >
                Profession
              </label>
              <input
                type="text"
                name="bio"
                id="bio"
                placeholder="eg. Software Developer"
                className="border border-[#D1D5DB] px-4 py-2 text-[14px] placeholder:italic placeholder:font-light rounded-md outline-none"
                value={instructor.bio}
                onChange={handleChange}
              />
            </div>
          </div>
          <hr className="border-[#D0D0D0] mt-3" />
          <div className="flex flex-col gap-4 mt-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-[13px] text-[#384D6C] font-bold"
                >
                  Email Address
                </label>
                <div className="border border-[#D1D5DB] px-4 py-2 text-[14px] rounded-md flex gap-3 items-center">
                  <img className="w-4 h-4" src={Message} alt="" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-none w-full"
                    value={instructor.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="phone"
                  className="text-[13px] text-[#384D6C] font-bold"
                >
                  Phone Number
                </label>
                <div className="border border-[#D1D5DB] px-4 py-2 text-[14px] rounded-md flex gap-3 items-center">
                  <img className="w-4 h-4" src={Number} alt="" />
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="outline-none w-full"
                    value={instructor.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#D0D0D0] mt-3" />
          <div className="flex flex-col gap-4 mt-2">
            <div className="text-[14px] rounded-md flex flex-col gap-3 items-start font-mons text-[#384D6C]">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center p-2 bg-[#D0D0D0] rounded-full">
                  <img className="w-4 h-4" src={Bag} alt="" />
                </div>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  className="outline-none w-[20px]"
                  value={instructor.experience}
                  onChange={handleChange}
                />
                <span>
                  <b>years</b>
                </span>
              </div>
            </div>
          </div>
          <hr className="border-[#D0D0D0] mt-3" />
        </form>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4"
            onClick={() => alert("Changes Request sent to admin panel")}
          >
            Changes Request
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
