import React, { useState } from 'react'
import Cross from '../../Assets/Icons/tpfaqcross.svg'
import Upload from '../../Assets/Icons/tpfileupload.svg'

const AddCourses = () => {
    
    const [course, setCourse] = useState({
        courseID:'',
        title:'',
        category:'',
        subcategory:'',
        // subcategory:'', ????Course
        level:'',
        overview:'',
        featured_image:'',
        featured_video:'',
        faqs:[
            {
                answer:'',
                question:'',
            }
        ],
        curriculum:[
            {
                chapter_name:'',
                lessons:[{
                    lesson_name:'',
                    assignment:'',
                    notes:'',
                    video:'',
                }],
            }
        ],
        whatWillILearn:[],
    });

    const [previewImage, setPreviewImage] = useState(null);
    const [previewVideo, setPreviewVideo] = useState(null);

    const handleFileChange = (event, setPreviewFunction) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setPreviewFunction({ name: file.name, url: fileUrl });
        }
    };

    return (
        <div className='flex flex-col gap-6 w-full px-14 py-14 font-int font-medium text-[#808080] text-[13px]'>
            <div className='grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full'>
                <div className='flex flex-col gap-2'>
                    <p>CourseID</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='CourseID' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Title</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Title'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Category</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Category' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Subcategory</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Subcategory'/>
                </div>
            </div>
            <div className='flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full'>
                <div className='grid grid-cols-2 gap-9'>
                    <div className='flex flex-col gap-2'>
                        <p>Course</p>
                        <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Select Overview' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Level</p>
                        <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Level'/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Overview</p>
                    <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Course Overview' />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full text-[14px]'>
            <div className='flex flex-col gap-2'>
                    <p>Preview Image</p>
                    <div className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'>
                        {previewImage ? (
                            <a href={previewImage.url} target="_blank" rel="noopener noreferrer">
                                {previewImage.name}
                            </a>
                        ) : (
                            <p>Preview Image</p>
                        )}
                    </div>
                    <input hidden type="file" id="PreviewImage" onChange={(e) => handleFileChange(e, setPreviewImage)} />
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Preview Video</p>
                    <div className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'>
                        {previewVideo ? (
                            <a href={previewVideo.url} target="_blank" rel="noopener noreferrer">
                                {previewVideo.name}
                            </a>
                        ) : (
                            <p>Preview Video</p>
                        )}
                    </div>
                    <input hidden type="file" id="PreviewVideo" onChange={(e) => handleFileChange(e, setPreviewVideo)} />
                </div>
                <label htmlFor='PreviewImage' className='px-6 py-[6px] border border-[#808080] rounded-full w-max flex items-center cursor-pointer'>
                    <p>Choose</p>
                </label>
                <label htmlFor='PreviewVideo' className='px-6 py-[6px] border border-[#808080] rounded-full w-max flex items-center cursor-pointer'>
                    <p>Choose</p>
                </label>
            </div>
            <div className='grid grid-cols-2 gap-9'>
                <div className='flex flex-col border border-[#808080] px-8 py-4 w-full h-max'>
                    <div className='flex flex-col gap-2'>
                        <p>Frequently Asked Questions</p>
                        <div className='flex flex-col gap-[1px]'>
                            <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Questions' />
                            <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Answer' />
                        </div>
                        <button className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'>
                            + Add FAQS 
                        </button>
                        <div className='flex flex-col max-h-[50vh] overflow-y-auto gap-2'>
                            <div className='bg-[#E9E9E9] px-2 py-2 flex items-start justify-between'>
                                <div>
                                    <p className='text-[13px] text-[#5C5C5C]'>What is HTML?</p>
                                    <p className='text-[10px] text-[#696984]'>Lorem ipsum dolor sit amet, consectetur adipising elit,</p>
                                </div>
                                <div>
                                    <img className='w-3 h-3' src={Cross} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full'>
                    <div className='flex flex-col gap-2'>
                        <p>Add Course Details</p>
                        <div className='flex items-center gap-2'>
                            <input className='border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal w-[80%]' type="text" name="" id="" placeholder='Chapter Name' />
                            <div className='flex items-center gap-2'>
                                <p className='w-[30px] h-[30px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[20px]'>+</p>
                                <p className='w-[30px] h-[30px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px]'>X</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-2'>
                            <div className='border border-[#808080] border-b-0 flex justify-between w-[80%] px-2 py-1 text-[13px] text-[#808080]'>
                                <p>Lesson Name</p>
                                <img className='w-4 h-4' src={Upload} alt="" />
                            </div>
                            <div className='w-[20px] h-[20px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px]'>
                                <p>X</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='border border-[#808080]  border-b-0 flex justify-between w-[80%] px-2 py-1 text-[13px] text-[#808080]'>
                                <p>Video URL</p>
                                <img className='w-4 h-4' src={Upload} alt="" />
                            </div>
                            <div className='w-[20px] h-[20px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px]'>
                                <p>X</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='border border-[#808080] border-b-0 flex justify-between w-[80%] px-2 py-1 text-[13px] text-[#808080]'>
                                <p>Notes URL</p>
                                <img className='w-4 h-4' src={Upload} alt="" />
                            </div>
                            <div className='w-[20px] h-[20px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px]'>
                                <p>X</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='border border-[#808080] flex justify-between w-[80%] px-2 py-1 text-[13px] text-[#808080]'>
                                <p>Assignment URL</p>
                                <img className='w-4 h-4' src={Upload} alt="" />
                            </div>
                            <div className='w-[20px] h-[20px] bg-[#D9D9D9] border border-[#808080] rounded-full flex justify-center items-center text-[13px]'>
                                <p>X</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#E9E9E9] w-[80%] rounded-xl text-[12px] font-light px-2 py-3 flex flex-col gap-1'>
                        <p className='text-[#808080] text-[13px] font-semibold'>UX/UI Design </p>
                        <div className='flex justify-between items-center'>
                            <p>https/hffnjkj.innvideo</p>
                            <img className='w-3 h-3' src={Cross} alt="" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>https/hffnjkj.innnotes</p>
                            <img className='w-3 h-3' src={Cross} alt="" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>https/hffnjkj.innassignment</p>
                            <img className='w-3 h-3' src={Cross} alt="" />
                        </div>
                    </div>
                    <button className='bg-[#E9E9E9] w-[80%] rounded-xl text-[13px] px-2 py-3 flex flex-col items-center'> 
                        <p>+ Add New Lesson </p>
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-2 border border-[#808080] px-8 py-4 w-full'>
                <p>What will I learn?</p>
                <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='What will I learn?' />
            </div>
            <div className='flex justify-center font-normal text-[13px]'>
                <button className='flex text-white gap-2 bg-black px-12 py-3 rounded-lg justify-center items-center'>
                    <p>Upload Course</p>
                </button>
            </div>
        </div>
    )
}

export default AddCourses