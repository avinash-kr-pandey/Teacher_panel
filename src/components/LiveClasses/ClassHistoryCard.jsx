import React from 'react';

const ClassHistoryCard = ({ title, batch, time, date }) => {
  return (
    <div className='border border-[#808080] bg-[#F6F6F6] rounded-xl px-4 py-2 mr-2 text-[#808080] font-int flex flex-col gap-3'>
      <div>
        <p className='font-semibold text-[18px] text-[#000000]'>{title}</p>
      </div>
      <p className='border border-[#80808080] w-max px-2 rounded text-[13px]'>{batch}</p>
      <div className='flex gap-8 items-center text-[14px]'>
        <div className='flex gap-1 items-center'>
          <p>{time}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <p>{date}</p>
        </div>
      </div>
      <p className='w-max px-6 py-1 rounded text-[12px] bg-[#F1F1F1CC]'>Status: Completed</p>
    </div>
  );
};

export default ClassHistoryCard;
