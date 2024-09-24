import React, { useState, useEffect } from 'react';

const WhatWillILearn = ({ initialCourse, handleInputChange }) => {
    const [course, setCourse] = useState({
        whatWillILearn: initialCourse ? initialCourse.whatWillILearn || '' : ''
    });

    useEffect(() => {
        if (initialCourse) {
            setCourse({
                whatWillILearn: initialCourse.whatWillILearn || ''
            });
        }
    }, [initialCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
        handleInputChange(name, value); // Passes the updated value to the parent component
    };

    return (
        <div className="flex flex-col gap-2 border border-[#808080] px-8 py-4 w-full">
            <p>What will I learn?</p>
            <textarea
                className="w-full h-24 border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal"
                name="whatWillILearn"
                value={course.whatWillILearn}
                onChange={handleChange}
                placeholder="What will I learn?"
            />
        </div>
    );
};

export default WhatWillILearn;
