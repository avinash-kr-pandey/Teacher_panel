import React, { useState } from 'react';
import Upload from '../../Assets/Icons/upload.svg';  
import CrossIcon from '../../Assets/Icons/cross-svgrepo-com.svg'; 

const AddCourseDetails = () => {
    const [course, setCourse] = useState({
        curriculum: [
            {
                chapter_name: '',
                lessons: [
                    {
                        lesson_name: '',
                        video: '',
                        assignment: '',
                        project: ''
                    }
                ]
            }
        ]
    });

    const handleAddLesson = (chapterIndex) => {
        const updatedCurriculum = [...course.curriculum];
        updatedCurriculum[chapterIndex].lessons.push({
            lesson_name: '',
            video: '',
            assignment: '',
            project: ''
        });
        setCourse({ ...course, curriculum: updatedCurriculum });
    };

    const handleRemoveLesson = (chapterIndex, lessonIndex) => {
        const updatedCurriculum = [...course.curriculum];
        updatedCurriculum[chapterIndex].lessons.splice(lessonIndex, 1);
        setCourse({ ...course, curriculum: updatedCurriculum });
    };

    const handleLessonFileChange = (e, chapterIndex, lessonIndex, fileType) => {
        const updatedCurriculum = [...course.curriculum];
        updatedCurriculum[chapterIndex].lessons[lessonIndex][fileType] = e.target.files[0];
        setCourse({ ...course, curriculum: updatedCurriculum });
    };

    return (
        <div className='flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full'>
            <div className='flex flex-col gap-2'>
                <p>Add Course Details</p>
                {course.curriculum.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className='flex flex-col'>
                        <div className='flex items-center gap-2'>
                            <input
                                className='border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal w-[80%]'
                                type="text"
                                name={`chapter_name-${chapterIndex}`}
                                value={chapter.chapter_name}
                                onChange={(e) => {
                                    const updatedCurriculum = [...course.curriculum];
                                    updatedCurriculum[chapterIndex].chapter_name = e.target.value;
                                    setCourse({ ...course, curriculum: updatedCurriculum });
                                }}
                                placeholder='Chapter Name'
                            />
                        </div>
                        <div className='overflow-y-auto max-h-80'> {/* max-h-80 for limiting height and enabling scroll */}
                            {chapter.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className='flex flex-col gap-2 py-3'>
                                    <div className="flex items-center gap-2">
                                        <input
                                            className='border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal w-[80%]'
                                            type="text"
                                            name={`lesson_name-${chapterIndex}-${lessonIndex}`}
                                            value={lesson.lesson_name}
                                            onChange={(e) => {
                                                const updatedCurriculum = [...course.curriculum];
                                                updatedCurriculum[chapterIndex].lessons[lessonIndex].lesson_name = e.target.value;
                                                setCourse({ ...course, curriculum: updatedCurriculum });
                                            }}
                                            placeholder='Lesson Name'
                                        />
                                        <div className='flex justify-end p-3'>
                                            <img
                                                src={CrossIcon}
                                                alt="Remove Lesson"
                                                className="cursor-pointer w-4 h-4"
                                                onClick={() => handleRemoveLesson(chapterIndex, lessonIndex)}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            className='border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal w-[80%]'
                                            type="text"
                                            name={`video-${chapterIndex}-${lessonIndex}`}
                                            placeholder='Video'
                                        />
                                        <label htmlFor={`lessonVideo-${chapterIndex}-${lessonIndex}`} className='w-[30px] h-[30px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px] cursor-pointer'>
                                            <img className='w-4 h-4' src={Upload} alt="Upload" />
                                        </label>
                                        <input
                                            hidden
                                            type="file"
                                            id={`lessonVideo-${chapterIndex}-${lessonIndex}`}
                                            onChange={(e) => handleLessonFileChange(e, chapterIndex, lessonIndex, 'video')}
                                        />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            className='border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal w-[80%]'
                                            type="text"
                                            name={`assignment-${chapterIndex}-${lessonIndex}`}
                                            placeholder='Assignment'
                                        />
                                        <label htmlFor={`lessonAssignment-${chapterIndex}-${lessonIndex}`} className='w-[30px] h-[30px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px] cursor-pointer'>
                                            <img className='w-4 h-4' src={Upload} alt="Upload" />
                                        </label>
                                        <input
                                            hidden
                                            type="file"
                                            id={`lessonAssignment-${chapterIndex}-${lessonIndex}`}
                                            onChange={(e) => handleLessonFileChange(e, chapterIndex, lessonIndex, 'assignment')}
                                        />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            className='border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal w-[80%]'
                                            type="text"
                                            name={`project-${chapterIndex}-${lessonIndex}`}
                                            placeholder='Project'
                                        />
                                        <label htmlFor={`lessonProject-${chapterIndex}-${lessonIndex}`} className='w-[30px] h-[30px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px] cursor-pointer'>
                                            <img className='w-4 h-4' src={Upload} alt="Upload" />
                                        </label>
                                        <input
                                            hidden
                                            type="file"
                                            id={`lessonProject-${chapterIndex}-${lessonIndex}`}
                                            onChange={(e) => handleLessonFileChange(e, chapterIndex, lessonIndex, 'project')}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button type="button" onClick={() => handleAddLesson(chapterIndex)} className='bg-[#E9E9E9] w-full rounded-xl text-[13px] px-2 py-3 flex flex-col items-center mt-2'>
                            <p>+ Add New Lesson</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddCourseDetails;