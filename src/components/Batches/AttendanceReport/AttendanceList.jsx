import React from 'react'

const AttendanceList = () => {
    return (
        <div className='font-int text-[13px]'>
            {/* Heading */}
            <div className='grid grid-cols-[1fr,2fr,1fr] bg-[#F0F0F0] border border-[#D4D4D4] font-medium'>
                <div className='border-r border-[#D4D4D4] px-4 py-1'>
                    <p>Student ID</p>
                </div>
                <div className='border-r border-[#D4D4D4] px-4 py-1'>
                    <p>Student Name</p>
                </div>
                <div className='px-4 py-1'>
                    <p>Attendance</p>
                </div>
            </div>
            {/* Data */}
            <div className='max-h-[60vh] overflow-y-auto customScrollfortp'>
                <div className='grid grid-cols-[1fr,2fr,1fr] border border-t-0 text-[#474747]'>
                    <div  className='border-r border-[#D4D4D4] px-4 py-1'>
                        <p>TIPSGRM1012223</p>
                    </div>
                    <div  className='border-r border-[#D4D4D4] px-4 py-1'>
                        <p>Anubhav Dubey</p>
                    </div>
                    <div className='flex items-center px-4 py-[2px] bg-[#FFEFEF] text-[#F93333] mx-4 my-1 w-max rounded'>
                        <p>Absent</p>
                    </div>
                </div>
                <div className='grid grid-cols-[1fr,2fr,1fr] border border-t-0 text-[#474747]'>
                    <div  className='border-r border-[#D4D4D4] px-4 py-1'>
                        <p>TIPSGRM1012223</p>
                    </div>
                    <div  className='border-r border-[#D4D4D4] px-4 py-1'>
                        <p>Anubhav Dubey</p>
                    </div>
                    <div className='flex items-center px-4 py-[2px] bg-[#9aefc7] text-[#11A529] mx-4 my-1 w-max rounded'>
                        <p>Present</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceList