import React from 'react'
import CoursesCard from './CoursesCard'

const Courses = ({setCourse}) => {
    return (
		<div className='grid grid-cols-4 gap-4 gap-y-6'>
			<CoursesCard setCourse={setCourse}/>
			<CoursesCard/>
			<CoursesCard/>
			<CoursesCard/>
			<CoursesCard/>
		</div>
    )
}

export default Courses