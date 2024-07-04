import React, { useState } from 'react';

const CourseDetailsForm = () => {
    const [course, setCourse] = useState({
        course: '',
        level: '',
        overview: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    return (
        <div className="flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full">
            <div className="grid grid-cols-2 gap-9">
                <div className="flex flex-col gap-2">
                    <label htmlFor="course" className="p-2">
                        Course
                    </label>
                    <input
                        id="course"
                        className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal"
                        type="text"
                        name="course"
                        value={course.course}
                        onChange={handleInputChange}
                        placeholder="Enter Course Name"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="level" className="p-2">
                        Level
                    </label>
                    <input
                        id="level"
                        className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal"
                        type="text"
                        name="level"
                        value={course.level}
                        onChange={handleInputChange}
                        placeholder="Enter Course Level"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="overview" className="p-2">
                    Overview
                </label>
                <textarea
                    id="overview"
                    className="w-full h-24 border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal"
                    name="overview"
                    value={course.overview}
                    onChange={handleInputChange}
                    placeholder="Enter Course Overview"
                />
            </div>
        </div>
    );
};

export default CourseDetailsForm;
