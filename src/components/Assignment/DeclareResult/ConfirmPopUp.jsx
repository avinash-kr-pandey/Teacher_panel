import React from 'react'

const ConfirmPopUp = ({setConfirmPopUp, setResultSubmit, setDeclareResultDetails}) => {
    function handlePublish(){
        setConfirmPopUp(false)
        setResultSubmit(true);
        setDeclareResultDetails(false)
    }
    return (
        <div className='bg-white w-[60%] absolute top-[15%] left-[20%] px-10 py-8 rounded-lg flex flex-col gap-4'>
            <p className='text-[20px] text-black text-center font-semibold'><span className='font-medium'>Publish Result of</span> “ Articulate structure of C++ and Java in Semester 1” ?</p>
            <p className='text-center text-[#363636] text-[13px]'>Result once published cannot be altered/reversed</p>
            <div className='flex gap-4 justify-center items-center'>
                <button onClick={() => setConfirmPopUp(false)} className='py-2 w-[120px] border border-[#E9E9E9] text-black font-medium rounded text-[13px]'>
                    No 
                </button>
                <button onClick={handlePublish} className='py-2 w-[120px] bg-[#2C62EE] text-white rounded text-[13px]'>
                    Publish 
                </button>
            </div>
        </div>
    )
}

export default ConfirmPopUp