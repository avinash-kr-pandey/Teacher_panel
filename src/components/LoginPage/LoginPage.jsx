import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../../Assests/Images/bg-login.jpg";
import logo from "../../Assests/Images/HMLOGO.gif";
import toast, { Toaster } from "react-hot-toast";
import { AUTH_BASE_URL, BASE_URL } from "../../Api/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/instlogin`, {
        email,
        password,
      });

      if (!response || !response.data) {
        toast.error("Invalid response received from the server.");
        throw new Error("Invalid response received from the server.");
      }

      const { token } = response.data;
      localStorage.setItem("teachertoken", token);
      // localStorage.setItem("adminEmail", response.data.email);
      // console.log(token);

      // Show success toast
      toast.success("Login successful!");

      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid user id or password");
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="relative flex justify-center items-center px-6 lg:px-8 xl:w-[1200px] lg:w-[900px] md:w-[700px] py-5 my-[10rem] rounded-lg mx-auto">
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 object-cover z-0"
        />

        <img
          className="absolute xl:top-[15px] xl:w-[12rem] lg:top-[10px] lg:w-[10rem] md:top-[0.5rem] md:w-[8rem] left-5"
          src={logo}
          alt="Your Company"
        />
        <div className="relative z-10 lg:top-[2rem] lg:w-[22rem] xl:w-[25rem] lg:left-[14rem] xl:top-[8rem] xl:left-[18rem] md:top-[1rem] md:left-[11rem]  bg-white bg-opacity-[75%] lg:py-6 px-8 md:py-4  rounded-2xl shadow-md ">
          <div className="text-center text-[32px] font-bold text-greenColor mb-2 flex flex-col gap-0 leading-tight">
            <p className="text-center font-bold text-greenColor m-0">Sign in</p>
            <span className="text-[#000] text-lg m-0">your account</span>
          </div>

          <form
            className="lg:space-y-6 md:space-y-2"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="text-lg font-medium leading-6 text-black"
              >
                User Id
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-2 rounded-md py-1.5 text-gray-600 shadow-md placeholder:text-gray-400 focus:outline-none sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:border invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-lg font-medium leading-6 text-black"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-2 rounded-md py-1.5 text-gray-600 shadow-md placeholder:text-gray-400 focus:outline-none sm:leading-6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-greenColor px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-md shadow-green-400 hover:bg-green-500 gap-4 items-center"
              >
                Sign in
                {loading && (
                  <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-green-400" />
                )}
              </button>
            </div>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
}
