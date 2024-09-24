import React, { useEffect, useState } from "react";
import { FetchBatchesForCourse } from "../../../Api/api";
import { useParams } from "react-router-dom";

const BatchCards = () => {
  const [batches, setBatches] = useState([]); // Initialize batches as an empty array
  const [courseName, setCourseName] = useState("");
  const [error, setError] = useState(null);
  const { courseId } = useParams();


  console.log(" ahdfhahdsfgjadfk", courseId);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const data = await FetchBatchesForCourse(courseId);

        if (data && data.batches) {
          setBatches(data.batches);  // Safely set batches
        } else {
          setBatches([]);  // Set as empty array if no batches are returned
        }

        setCourseName(data.courseName || "");  // Handle courseName safely
      } catch (err) {
        setError("Error fetching batch data");
        console.error(err);
      }
    };

    fetchBatches();
  }, [courseId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {courseName ? `Batches for ${courseName}` : "Batches"}
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {batches.length > 0 ? (
          batches.map((batch) => (
            <div key={batch.batchId} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">{batch.batchName}</h3>
              <p className="text-gray-600">
                Start Date: {new Date(batch.startDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                End Date: {new Date(batch.endDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Total Seats: {batch.batchlimit}</p>
            </div>
          ))
        ) : (
          <p>No batches available for this course.</p>
        )}
      </div>
    </div>
  );
};

export default BatchCards;
