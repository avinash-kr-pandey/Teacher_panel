import React, { useEffect, useState } from "react";
import bell from "../../Assets/Icons/tpbell.svg";
import Profile from "../../Assets/Icons/tpprofile.svg";
import Arrow from "../../Assets/Icons/tparrow.svg";
import ProfilePurple from "../../Assets/Icons/tpnavbarprofile.svg";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";

const Navbar = ({}) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [instructor, setInstructor] = useState({
    name: "",
    bio: "",
    email: "",
    phone: "",
    experience: "",
    profile: "",
  });

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function Logout(){
    try {
        let token=localStorage.getItem('teachertoken')
        if(token){
            localStorage.removeItem('teachertoken')
navigate('/login')
        }
    } catch (error) {
        console.log(error);
    }
  }
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
    setInstructor({
      ...instructor,
      [name]: value,
    });
  };

  function goToProfile() {
    navigate("/userprofile");
    setShowMenu(false);
  }

  return (
    <div className="bg-[#000000] w-full text-[#FFFFFF] px-6 py-4 font-int flex justify-between">
      <p className="font-semibold text-[25px]">Hii, {instructor.name}</p>
      <div className="flex gap-6">
        <div className="bg-[#808080] flex justify-center items-center h-[35px] w-[35px] rounded-full relative">
          <img className="w-6 h-6" src={bell} alt="" />
          <div className="w-2 h-2 bg-[#000000CC] rounded-full absolute top-[15%] right-[25%]"></div>
        </div>
        <div
          onClick={handleShowMenu}
          className="flex items-center gap-2 bg-[#808080] h-[35px] px-2 rounded-full paste-button cursor-pointer"
        >
          <img className="w-6 h-6" src={Profile} alt="" />
          <img
            className={`w-3 transition-transform duration-500 ${
              showMenu ? "rotate-180" : "rotate-0"
            }`}
            src={Arrow}
            alt=""
          />
          {showMenu && (
            <div className="dropdown-content text-[#5B5B5B] py-2 text-[12px] bg-white rounded-xl">
              <div
                onClick={goToProfile}
                className="flex items-center gap-2 py-2 px-4"
              >
                <div className="bg-[#FAEDFF] p-2 rounded-full">
                  <img className="w-4 h-4" src={ProfilePurple} alt="" />
                </div>
                <p>My Profile</p>
              </div>
              <div className="flex items-center gap-2 py-2 px-4">
                <div className="bg-[#FFEDED] p-2 rounded-full">
                  <img className="w-4 h-4" src={Logout} alt="" />
                </div>
                <p onClick={Logout}>Log Out</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
