import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../Api/api';
import toast from 'react-hot-toast';

const CreateLiveClassForm = ({ courses }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [courseId, setCourseId] = useState('');
    const [lessonId, setLessonId] = useState('');
    const [streamKey, setStreamKey] = useState('');

    useEffect(() => {
        if (selectedCourse) {
            const courseLessons = selectedCourse.curriculum.flatMap(chapter => chapter.lessons);
            setLessons(courseLessons);
        } else {
            setLessons([]);
        }
    }, [selectedCourse]);

    const handleCourseChange = (e) => {
        const selectedCourseId = e.target.value;
        const course = courses.find(course => course._id === selectedCourseId);
        setSelectedCourse(course || null);
        setCourseId(course._id);
        setSelectedLesson(null); // Reset lesson when course changes
    };

    const handleLessonChange = (e) => {
        const selectedLessonId = e.target.value;
        const lesson = lessons.find(lesson => lesson._id === selectedLessonId);
        setSelectedLesson(lesson || null);
        setLessonId(lesson._id);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleCreateLiveClass = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const token = localStorage.getItem("teachertoken");
            const response = await axios.post(`${BASE_URL}/createlivestream`, {
                courseId,
                lessonId,
                startDate,
                }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            toast.success("Live Class Created")
            localStorage.setItem('sk', response.data.streamKey);
            setStreamKey(response.data.streamKey)
        } catch (error) {
            toast.error("Error creating live stream:", error);
        }
    }
    

    return (
        <div>
            <div className='mx-auto max-w-md mt-2 font-semibold font-int'>
                <p>Create a live class</p>
            </div>
            <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <select
                        id="courses"
                        className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={selectedCourse?._id || ''}
                        onChange={handleCourseChange}
                    >
                        <option value="">
                            Select Course
                        </option>
                        {courses?.map((course) => (
                            <option
                                key={course._id}
                                value={course._id}
                            >
                                {course?.title}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedCourse && (
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            id="lessons"
                            className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={selectedLesson?._id || ''}
                            onChange={handleLessonChange}
                        >
                            <option value="">
                                Select Lesson
                            </option>
                            {lessons.map((lesson, index) => (
                                <option
                                    key={index}
                                    value={lesson._id}
                                >
                                    {lesson.lesson_name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedLesson && (
                    <>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="datetime-local"
                                id="startDate"
                                name="startDate"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={startDate}
                                onChange={handleStartDateChange}
                                required
                            />
                            <label
                                htmlFor="startDate"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Start Date & Time
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="datetime-local"
                                id="endDate"
                                name="endDate"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={endDate}
                                onChange={handleEndDateChange}
                            />
                            <label
                                htmlFor="endDate"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                End Date & Time
                            </label>
                        </div>
                    </>
                )}
                <button
                    type="submit"
                    onClick={handleCreateLiveClass}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
            {streamKey && 
                <div className='mx-auto max-w-md mt-2 font-semibold font-int'>
                    <p>Use this stream key with obs with hopingminds custom server link</p>
                    <p>Your Stream key is :{streamKey}</p>
                </div>
            }
        </div>
    );
};

export default CreateLiveClassForm;
