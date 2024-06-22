import React from 'react'
import ClassesCard from './ClassesCard'

const Classes = ({setShowAttendance}) => {
  return (
    <div className='py-4 grid grid-cols-2 gap-8 gap-y-10 mr-6'>
        <ClassesCard setShowAttendance={setShowAttendance}/>
        <ClassesCard setShowAttendance={setShowAttendance}/>
        <ClassesCard setShowAttendance={setShowAttendance}/>
    </div>
  )
}

export default Classes