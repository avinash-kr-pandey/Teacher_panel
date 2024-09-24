// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { REACT_APP_SERVER_DOMAIN, adminToken } from "../../../components/Api/api";

// const AssessmentModal = ({ courseId, handleToggleOpen }) => {
//   const [forms, setForms] = useState([
//     {
//       courseID: courseId,
//       assessmentName: "",
//       questions: null,
//       startDate: "",
//       lastDate: "",
//       timelimit:"",
//       isProtected: "",
//     },
//   ]);
//   const [loading, setLoading] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleInputChange = (index, event) => {
//     const values = [...forms];
//     if (event.target.name === "questions") {
//       values[index][event.target.name] = event.target.files[0];
//       toast.success("File uploaded successfully");
//     } else {
//       values[index][event.target.name] = event.target.value;
//     }
//     setForms(values);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     for (const form of forms) {
//       if (
//         !form.courseID ||
//         !form.assessmentName ||
//         !form.questions ||
//         !form.startDate ||
//         !form.lastDate ||
//         !form.timelimit
//       ) {
//         toast.error("Please fill out all required fields and upload a file.");
//         setLoading(false);
//         return;
//       }

//       const formData = new FormData();
//       formData.append("courseID", form.courseID);
//       formData.append("assessmentName", form.assessmentName);
//       formData.append("questions", form.questions);
//       formData.append("startDate", form.startDate);
//       formData.append("lastDate", form.lastDate);
//       formData.append("isProtected", form.isProtected);
//       formData.append("timelimit", form.timelimit);

//       try {
//         const response = await axios.post(
//           `${REACT_APP_SERVER_DOMAIN}/createcourseassessment`,
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${adminToken}`,
//             },
//           }
//         );
//         toast.success("Assessment submitted successfully!");
//         handleToggleOpen();
//       } catch (error) {
//         toast.error("Error submitting assessment. Please try again.");
//         console.error("Error submitting assessment:", error);
//         handleToggleOpen();
//       }
//     }

//     setLoading(false);
//   };

//   const handleDownloadTemplate = () => {
//     const link = document.createElement("a");
//     link.href = `${process.env.PUBLIC_URL}/Assessmenttesting.xlsx`; // Ensure the path matches the file location
//     link.download = "template.xlsx";
//     link.click();
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

//   const handleIsProtectedChange = (index, event) => {
//     const newForms = [...forms];
//     newForms[index].isProtected = event.target.value === "true";
//     setForms(newForms);
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
//         {forms.map((form, index) => (
//           <div
//             key={index}
//             className="form-group mb-4 flex flex-col gap-2 px-4 py-3"
//           >
//             <div className="flex flex-col gap-1">
//               <span className="font-semibold">Course ID</span>
//               <input
//                 type="text"
//                 name="courseID"
//                 disabled
//                 value={form.courseID}
//                 onChange={(event) => handleInputChange(index, event)}
//                 placeholder="Course Id"
//                 required
//                 className="form-control focus:outline-none shadow-md px-2 py-1"
//               />
//             </div>
//             <div className="flex flex-col gap-1">
//               <span className="font-semibold">Assessment Name</span>
//               <input
//                 type="text"
//                 name="assessmentName"
//                 placeholder="Assessment name"
//                 value={form.assessmentName}
//                 onChange={(event) => handleInputChange(index, event)}
//                 required
//                 className="form-control focus:outline-none shadow-md px-2 py-1"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <span className="font-semibold">Starting Date</span>
//               <input
//                 type="datetime-local"
//                 name="startDate"
//                 placeholder="Start Date"
//                 value={form.startDate}
//                 onChange={(event) => handleInputChange(index, event)}
//                 required
//                 className="form-control focus:outline-none shadow-md px-2 py-1"
//               />
//             </div>
//             <div className="flex flex-col gap-1">
//               <span className="font-semibold">Ending Date</span>
//               <input
//                 type="datetime-local"
//                 name="lastDate"
//                 placeholder="Last Date"
//                 value={form.lastDate}
//                 onChange={(event) => handleInputChange(index, event)}
//                 required
//                 className="form-control focus:outline-none shadow-md px-2 py-1"
//               />
//             </div>
//             <div className="flex flex-col gap-1">
//               <span className="font-semibold">Duration</span>
//               <input
//                 type="number"
//                 name="timelimit"
//                 placeholder="Duration"
//                 value={form.timelimit}
//                 onChange={(event) => handleInputChange(index, event)}
//                 required
//                 className="form-control focus:outline-none shadow-md px-2 py-1"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <span className="font-semibold">Questions (.xlsx)</span>
//               <input
//                 type="file"
//                 name="questions"
//                 accept=".xlsx, .xls"
//                 onChange={(event) => handleInputChange(index, event)}
//                 required
//                 className="form-control"
//               />
//             </div>
//             <div className="flex gap-2 items-center mt-2">
//               <p className="text-lg font-normal ">IsProtected</p>
//               <label className="flex items-center space-x-1 cursor-pointer">
//                 <input
//                   type="radio"
//                   value={"true"}
//                   checked={form.isProtected === true}
//                   onChange={(e) => handleIsProtectedChange(index, e)}
//                   className="form-radio h-5 w-5"
//                 />
//                 <span className="text-md font-medium ">True</span>
//               </label>
//               <label className="flex items-center space-x-1 cursor-pointer">
//                 <input
//                   type="radio"
//                   value={"false"}
//                   checked={form.isProtected === false}
//                   onChange={(e) => handleIsProtectedChange(index, e)}
//                   className="form-radio h-5 w-5"
//                 />
//                 <span className="text-md font-medium ">False</span>
//               </label>
//             </div>
//           </div>
//         ))}
//         <div className="flex justify-between items-center mx-3 my-2">
//           <button
//             type="submit"
//             className="center p-2 bg-greenColor text-white rounded-md"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//           <button
//             type="button"
//             onClick={handleDownloadTemplate}
//             className="p-2 bg-greenColor text-white rounded-md"
//           >
//             Download Template
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

// export default AssessmentModal;
