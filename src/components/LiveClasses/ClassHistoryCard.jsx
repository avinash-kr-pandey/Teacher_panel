import React from 'react';
import { formatDate, formatTime, getClassStatus } from '../../Api/api';

const ClassHistoryCard = ({ data}) => {
  return (
    <div className='border border-[#808080] bg-[#F6F6F6] rounded-xl px-4 py-2 mr-2 text-[#808080] font-int flex flex-col gap-3'>
      <div>
      <p className='font-semibold text-[18px] text-[#000000]'>{data?.chapter_name}</p>
      </div>
      <div>
        <p className='font-semibold text-[14px] text-[#000000]'>{data?.lesson_name}</p>
      </div>
      <p className='border border-[#80808080] w-max px-2 rounded text-[13px]'>{'batch'}</p>
      <div className='flex gap-8 items-center text-[14px]'>
        <div className='flex gap-1 items-center'>
          <p>{formatTime(data?.liveClass?.startDate)}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <p>{formatDate(data?.liveClass?.startDate)}</p>
        </div>
      </div>
      <p className='w-max px-6 py-1 rounded text-[12px] bg-[#F1F1F1CC]'>Status: {getClassStatus(data?.liveClass?.startDate,data?.liveClass?.endDate)}</p>
    </div>
  );
};

export default ClassHistoryCard;
