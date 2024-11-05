import React, { useEffect, useState } from "react";
import ClassHistoryCard from "./ClassHistoryCard";
import { Completedclass } from "../../Api/api";
import Search from "../../Assets/Icons/tpsearch.svg";

const ClassHistory = () => {
  const [completedClasses, setCompletedClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    async function fetchData() {
      let data = await Completedclass();
      setCompletedClasses(data);
    }

    fetchData();
  }, []);

  // Filter completed classes based on search term for both title (chapter_name) and lesson_name
  const filteredClasses = completedClasses.filter((classInfo) =>
    classInfo.chapter_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classInfo.lesson_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-row justify-between px-4 py-2">
        <div className="text-gray-600 font-semibold text-lg">Class History</div>
        <div>
          <div className="flex w-full gap-3 bg-[#F1F1F1] px-4 py-1 rounded-lg mb-2">
            <img src={Search} alt="Search" />
            <input
              className="bg-[#F1F1F1] text-[13px] w-[300px] h-8 outline-none"
              type="text"
              placeholder="Search by title or lesson..."
              value={searchTerm} // Bind the searchTerm to the input field
              onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 gap-y-8">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((classInfo) => (
            <ClassHistoryCard key={classInfo.id} data={classInfo} />
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            No classes found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassHistory;
