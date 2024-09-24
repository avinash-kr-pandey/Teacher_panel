import React from "react";

const AllInstructorModel = ({
  isModalOpen,
  setIsModalOpen,
  InstructorDetails,
  setselectedinstructorFromModal,
}) => {
  console.log(InstructorDetails);

  return (
    <>
        <div className="flex justify-center fixed z-10 left-0 top-0 w-full h-full bg-opacity-50 bg-black">
          <div className="h-[87%] w-[80%] my-auto bg-[#fefefe] px-4 overflow-y-auto shadow-md rounded-md">
          {/* Modal content goes here */}
          <span
            style={{
              color: "#aaa",
              float: "right",
              fontSize: "28px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            &times;
          </span>
          <p className="text-center mt-2 font-semibold">
            Select instructorID from Instructors
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 mt-1 mb-6">
            {InstructorDetails?.map((instructor, index) => (
              <div
                key={index}
                className="max-w-xs mt-[1rem] mb-[1rem] mr-2 h-[10rem] w-[19rem] font-semibold cursor-pointer"
              >
                <div
                  className="card mb-3 flex flex-col"
                  onClick={() => {
                    setselectedinstructorFromModal(instructor._id);
                    setIsModalOpen(false); // This will close the modal
                  }}
                >
                  <img
                    src={instructor.profile}
                    alt={`Uploaded ${index}`}
                    className="rounded-md w-[19rem] h-[10rem] object-contain "
                  />
                  <span className="text-sm text-center">{instructor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllInstructorModel;
