import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchBatchesForCourse, RemoveStudentFromBatch } from "../../Api/api";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const BatchDetailsPage = () => {
  const { courseId } = useParams();
  const [batches, setBatches] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const data = await FetchBatchesForCourse(courseId);
        if (data) {
          setBatches(data);
          setCourseName(data.courseName || "");
        } else {
          setError("No batches found for this course.");
        }
      } catch (err) {
        setError("Error fetching batch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBatches();
  }, [courseId]);

  const handleCardClick = (batch) => {
    setSelectedBatch(batch);
  };

  const handleRemoveUser = async (userId) => {
    if (selectedBatch) {
      try {
        // Make API call to remove the student from the batch
        const response = await RemoveStudentFromBatch({
          userID: userId,
          BatchId: selectedBatch._id,
          courseId: courseId, // pass the courseId as well
        });

        if (response.success) {
          toast.success("Student removed from batch.");
          setSelectedBatch((prevBatch) => ({
            ...prevBatch,
            users: prevBatch.users.filter((user) => user._id !== userId),
          }));
        } else {
          throw new Error(response.message || "Failed to remove student.");
        }
      } catch (error) {
        toast.error("Failed to remove student from batch.");
        console.error("Error removing student:", error);
      }
    }
  };

  if (loading) return <p className="flex flex-col items-center py-[30%]"><ImSpinner9 className="animate-spin text-4xl text-green-600 size-10"/></p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-white w-full px-4 py-6 font-int relative">
      <div className="flex flex-col gap-6">
        <p className="text-[28px] text-[#434343] font-semibold">
          Batch Details: {courseName}
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {batches.length > 0 ? (
          batches.map((batch) => (
            <div
              key={batch._id}
              className="p-4 shadow-lg rounded-md bg-white cursor-pointer"
              onClick={() => handleCardClick(batch)}
            >
              <h3 className="text-xl font-semibold">{batch.batchName}</h3>
              <p>
                Start Date: {new Date(batch.startDate).toLocaleDateString()}
              </p>
              <p>End Date: {new Date(batch.endDate).toLocaleDateString()}</p>
              <p>Batch Limit: {batch.batchlimit}</p>
              <p>Number of Users: {batch.users.length}</p>
            </div>
          ))
        ) : (
          <p>No batches available for this course</p>
        )}
      </div>

      {selectedBatch && (
        <div className="py-[20vh]">
          <h4 className="text-xl font-semibold">
            Users: {selectedBatch.batchName}
          </h4>
          <table className="min-w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Role</th>
                <th className="border border-gray-300 p-2">Profile Complete</th>
                <th className="border border-gray-300 p-2">
                  Purchased Courses
                </th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedBatch.users.length > 0 ? (
                selectedBatch.users.map((user) => (
                  <tr key={user._id}>
                    <td className="border border-gray-300 p-2">{user.name}</td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                    <td className="border border-gray-300 p-2">{user.role}</td>
                    <td className="border border-gray-300 p-2">
                      {user.isProfileComplete ? "Yes" : "No"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {user.purchased_courses.length} courses
                    </td>
                    <td className="border border-gray-300 p-2 flex gap-2">
                      <button
                        className="text-red-400 hover:text-red-600"
                        onClick={() => handleRemoveUser(user._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="border border-gray-300 p-2 text-center"
                  >
                    No users in this batch
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BatchDetailsPage;
