import React from 'react'
import { useBatchDetails } from './BatchDetailsContext';

const CourseBatchesCard = () => {
    const { setBatchDetails } = useBatchDetails();
    return (
        <div className='border border-[#E6E6E6] rounded-xl px-4 py-2 text-[#9A9A9A] font-int flex flex-col gap-6'>
            <div>
                <p className='font-semibold text-[18px] text-[#3C3C3C]'>3CO - JVY</p>
            </div>
            <div>
                <p className='text-[13px] text-[#989898]'>Course : B.Tech Specialization in Health Informatics</p>
            </div>
            <button onClick={() => setBatchDetails(true)} className='bg-black text-white rounded py-2 text-[12px]'>
                View Details
            </button>
        </div>
    )
}

export default CourseBatchesCard