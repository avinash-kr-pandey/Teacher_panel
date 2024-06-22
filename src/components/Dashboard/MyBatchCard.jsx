import React from 'react'

const MyBatchCard = () => {
  return (
    <div className='border border-[#808080] rounded-xl px-4 py-2 mr-2 text-[#808080] font-int flex flex-col gap-3'>
        <div>
            <p className='font-semibold text-[18px]'>3CO - JVY</p>
        </div>
        <div>
            <p className='font-medium text-[12px]'>25 Lesson</p>
            <p className='font-medium text-[12px]'>2560 Students</p>
            <p className='font-medium text-[12px]'>85 Assignments</p>
        </div>
        <div>
            <p className='font-medium text-[14px] text-[#989898]'>AWS Certified solutions Architect</p>
        </div>
        <button className='bg-black text-white rounded py-2 text-[14px]'>
            Batch Ends at 02 Jan 2027
        </button>
    </div>
  )
}

export default MyBatchCard