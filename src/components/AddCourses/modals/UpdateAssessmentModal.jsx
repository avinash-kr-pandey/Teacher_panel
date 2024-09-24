// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   REACT_APP_SERVER_DOMAIN,
//   adminToken,
// } from "../../../components/Api/api";
// import { jwtDecode } from "jwt-decode";

// const UpdateAssessmentModal = ({ assessment, courseId, handleToggleOpen }) => {
//   const [form, setForm] = useState({}); // Initialize as an empty object
//   const [loading, setLoading] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   useEffect(() => {
//     if (assessment && courseId) {
//       setForm({
//         assessment_id: courseId,
//         assessmentName: assessment.assessmentName,
//         lastDate: assessment.lastDate,
//         timelimit: assessment.timelimit,
//       });
//     }
//   }, [courseId, assessment]);
  
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//       setForm((prevForm) => ({
//         ...prevForm,
//         [name]: value,
//       }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
  
//     // Check for valid token
//     try {
//       const validToken = jwtDecode(adminToken);
//       if (validToken) {
//         console.log(validToken);
  
//         try {
//           const response = await axios.put(
//             `${REACT_APP_SERVER_DOMAIN}/updateassessment`,
//             form, // Ensure `form` contains all required fields
//             {
//               headers: {
//                 "Content-Type": "application/json", // Changed to application/json
//                 Authorization: `Bearer ${adminToken}`,
//               },
//             }
//           );
  
//           if (response) {
//             console.log("Form data before submission:", form);
//             toast.success("Assessment submitted successfully!");
//             handleToggleOpen();
//           }
//         } catch (error) {
//           toast.error("Error submitting assessment. Please try again.");
//           console.error("Error submitting assessment:", error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     } catch (error) {
//       console.error("Token decoding failed:", error);
//       setLoading(false);
//     }
//   };
  

//   const handleConfirmation = () => {
//     setShowConfirmation(true);
//   };

//   const handleConfirmClose = () => {
//     setShowConfirmation(false);
//     handleToggleOpen();
//   };

//   const handleCancelClose = () => {
//     setShowConfirmation(false);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
//       <Toaster />
//       <div className="fixed inset-0 bg-black opacity-50"></div>
//       <form
//         onSubmit={handleSubmit}
//         className="relative bg-white border border-gray-300 rounded-lg shadow-lg max-h-screen overflow-y-auto"
//       >
//         <button
//           type="button"
//           className="absolute top-2 right-2 text-red-500 font-bold"
//           onClick={handleConfirmation}
//         >
//           X
//         </button>
//         <h1 className="text-center underline font-bold my-2 text-lg">
//           Assessment
//         </h1>
//         <div className="form-group mb-4 flex flex-col gap-2 px-4 py-3">
//           <div className="flex flex-col gap-1">
//             <span className="font-semibold">Assessment Id</span>
//             <input
//               type="text"
//               name="assessment_id"
//               disabled
//               value={form.assessment_id || ""}
//               className="form-control focus:outline-none shadow-md px-2 py-1"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <span className="font-semibold">Assessment Name</span>
//             <input
//               type="text"
//               name="assessmentName"
//               placeholder="Assessment name"
//               value={form.assessmentName || ""}
//               onChange={handleInputChange}
//               required
//               className="form-control focus:outline-none shadow-md px-2 py-1"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <span className="font-semibold">Ending Date</span>
//             <input
//               type="datetime-local"
//               name="lastDate"
//               placeholder="Last Date"
//               value={formatDate(form.lastDate)}
//               onChange={handleInputChange}
//               required
//               className="form-control focus:outline-none shadow-md px-2 py-1"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <span className="font-semibold">Duration (minute) </span>
//             <input
//               type="number"
//               name="timelimit"
//               placeholder="Duration in (min)"
//               min={0}
//               value={form.timelimit || ""}
//               onChange={handleInputChange}
//               required
//               className="form-control focus:outline-none shadow-md px-2 py-1"
//             />
//           </div>
//         </div>
//         <div className="flex justify-between items-center mx-3 my-2">
//           <button
//             type="submit"
//             className="mx-6 mb-2 w-[80%] px-4 py-2 bg-greenColor text-white rounded-md"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </div>
//       </form>
//       {showConfirmation && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <p>Are you sure you want to close without saving?</p>
//             <div className="flex justify-around mt-4">
//               <button
//                 className="p-2 bg-red-500 text-white rounded-md"
//                 onClick={handleConfirmClose}
//               >
//                 Yes
//               </button>
//               <button
//                 className="p-2 bg-gray-500 text-white rounded-md"
//                 onClick={handleCancelClose}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UpdateAssessmentModal;
