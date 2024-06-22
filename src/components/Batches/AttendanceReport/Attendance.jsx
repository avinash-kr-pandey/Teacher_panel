import React, { useState } from 'react'
import AttendanceReport from './AttendanceReport'
import ReviewAttendance from './ReviewAttendance'
import SubmitAttendance from './SubmitAttendance';

const Attendance = ({setBatchDetails, setShowAttendance}) => {
    const [activeAttendance,setActiveAttendance] = useState("report");
    return (
        <div className='w-full  bg-white '>
            {activeAttendance === "report" && <AttendanceReport setBatchDetails={setBatchDetails} setShowAttendance={setShowAttendance} setActiveAttendance={setActiveAttendance}/>}
            {activeAttendance === "review" && <ReviewAttendance setBatchDetails={setBatchDetails} setShowAttendance={setShowAttendance} setActiveAttendance={setActiveAttendance}/>}
            {activeAttendance === "final" && <SubmitAttendance setBatchDetails={setBatchDetails} setShowAttendance={setShowAttendance} setActiveAttendance={setActiveAttendance}/>}
        </div>
    )
}

export default Attendance