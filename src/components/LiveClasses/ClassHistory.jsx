import React, { useEffect, useState } from 'react';
import ClassHistoryCard from './ClassHistoryCard';
import { Completedclass } from '../../Api/api';

const ClassHistory = () => {
  const [completedClasses, setCompletedClasses] = useState([]);

  useEffect(() => {

    async function fetchData(){
      let data=await Completedclass()
      setCompletedClasses(data)
    }

    fetchData();
    console.log("jdhfjhadfjahjfhasjdf", fetchData);
  }, []); 


  return (
    <div>
      {/* <h2>Completed Classes</h2> */}
      <div className="grid grid-cols-3 gap-5 gap-y-8">
        {completedClasses?.map((classInfo,ind) => (
          <ClassHistoryCard
            key={classInfo.id}
           data={classInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassHistory;
