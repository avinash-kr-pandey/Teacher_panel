import React, { useEffect, useState } from 'react';
import ClassHistoryCard from './ClassHistoryCard';

const ClassHistory = () => {
  const [completedClasses, setCompletedClasses] = useState([]);

  useEffect(() => {

    const fetchData = () => {
      const initialData = [
        {
          id: 1,
          title: "How to Make an Array and its Types in C++",
          batch: "3CO - JVY",
          time: "12:12 PM",
          date: "03 Jan 2023",
          status: "Ongoing",
        },
        {
          id: 2,
          title: "Introduction to React Hooks",
          batch: "4AB - FGH",
          time: "10:00 AM",
          date: "15 Feb 2023",
          status: "Upcoming",
        },
        {
          id: 3,
          title: "Python Programming Fundamentals",
          batch: "5XY - OPQ",
          time: "02:30 PM",
          date: "20 Mar 2023",
          status: "Scheduled",
        },
        {
          id: 4,
          title: "FSD",
          batch: "FALCON",
          time: "10:30 PM",
          date: "10 Mar 2023",
          status: "Completed",
        },
        {
          id: 5,
          title: "Testing",
          batch: "All is well",
          time: "17:30 PM",
          date: "19 Mar 2023",
          status: "Completed",
        },
      ];

      const completedClassesData = initialData.filter(
        (classInfo) => classInfo.status === "Completed"
      );

 
      setTimeout(() => {
    
        setCompletedClasses(completedClassesData);
      }, 1000);
    };


    fetchData();
  }, []); 

  return (
    <div>
      <h2>Completed Classes</h2>
      <div className="grid grid-cols-3 gap-5 gap-y-8">
        {completedClasses.map((classInfo) => (
          <ClassHistoryCard
            key={classInfo.id}
            title={classInfo.title}
            batch={classInfo.batch}
            time={classInfo.time}
            date={classInfo.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassHistory;
