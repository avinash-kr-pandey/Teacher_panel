import React, { useState } from "react";
import AssessmentModal from "../modals/AssessmentModal";
import Loader from "../../Loader/Loader";
import ImageCoursesModal from "../modals/ImageCourseModal";
import UpdateAssessmentModal from "../modals/UpdateAssessmentModal";


const AssessmentAndBanner = ({
  courseDetails,
  setCourseDetails,
  loading,
  uploadedMedia,
}) => {
  const handleInputChange = (e) => {
    setCourseDetails({
      ...courseDetails,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };
  const [selectedMediaFromModal, setSelectedMediaFromModal] = useState("");
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [assessmentUpadteModalOpen, setAssessmentUpdateModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);

  const handleAssessmentModal = () => {
    setAssessmentModalOpen(!assessmentModalOpen);
  };


  const handleAssessmentUpdateModalOpen = ()=>{
    if(assessmentModalOpen) setAssessmentModalOpen(false);
      setAssessmentUpdateModalOpen(!assessmentUpadteModalOpen);
  }


  return (
    <>
      {isModalImageOpen && (
        <ImageCoursesModal
          isModalImageOpen={isModalImageOpen}
          setIsModalImageOpen={setIsModalImageOpen}
          courseDetails={courseDetails}
          setCourseDetails={setCourseDetails}
          type={selectedModal}
          uploadedMedia={uploadedMedia}
          setSelectedMediaFromModal={setSelectedMediaFromModal}
        />
      )}
      <div className="flex flex-col gap-4 py-6 pl-20 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem] ">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Assessment and Banner
        </h1>
        <div className="grid grid-cols-2 items-center gap-4 p-3 rounded-md bg-gradient-to-r from-greenColor to-green-300">
          {/* Upload Assessment */}

          {/* <fieldset className="flex flex-col gap-2 py-6">
            <div className="flex flex-col gap-2 items-center">
              {courseDetails.assessments && (
                <>
                  <p className="text-xl text-white font-semibold ">
                  All Assessments{" "}
                  </p>
                  {courseDetails.assessments.map((assessment, index) => (
                    <div key={"a" + index} className="flex gap-2 items-center">
                      {console.log(assessment)}
                      <p>{assessment.assessmentName}</p>
                      <p>{assessment.questions}</p>
                      <button
              className="text-green-600 font-semibold border-2 border-green-600 rounded-md  py-[0.5rem] px-4 hover:bg-green-500 hover:border-green-500 hover:text-white hover:font-semibold"
              onClick={()=>setAssessmentUpdateModalOpen(true)}
            >
              Update
            </button>
            {
              assessmentUpadteModalOpen && <UpdateAssessmentModal handleToggleOpen={handleAssessmentUpdateModalOpen} assessment={assessment} courseId={assessment._id}/>
            }
                    </div>
                  ))}
                </>
              )}
            </div>
            <h1 className="text-white text-lg font-semibold font-Montserrat">
              Upload Assessment
            </h1>
            <button
              className="text-green-600 font-semibold border-2 border-green-600 rounded-md  py-[0.5rem] px-4 hover:bg-green-500 hover:border-green-500 hover:text-white hover:font-semibold"
              onClick={handleAssessmentModal}
            >
              Upload Assessment
            </button>
            {assessmentModalOpen && (
              <AssessmentModal
                courseId={courseDetails.courseID}
                handleToggleOpen={handleAssessmentModal}
              />
            )}
          </fieldset> */}
          {/* Banner */}

          <fieldset className="flex flex-col items-center justify-between py-6">
            <h1 className="text-[#000000] text-[18px] font-semibold font-Montserrat">
              Banner
            </h1>
            <div className="flex flex-col gap-2 justify-between items-center p-2">
              {/* <p className="text-[#000000] text-[16px] font-semibold font-Montserrat">
          Banner
        </p> */}
              {courseDetails.bannerImg && (
                <img
                  src={courseDetails.bannerImg}
                  alt="Banner"
                  className=" rounded-lg 2xl:w-[25rem] 2xl:h-[15rem] xl:w-[10rem] xl:h-[6rem]"
                />
              )}
              <div className="flex items-center gap-2">
                <span>
                  <input
                    type="url"
                    name="bannerImg"
                    value={courseDetails.bannerImg}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="https://example.com/photp.jpg"
                    className="p-2 outline-none shadow-md rounded-md lg:w-[16rem] xl:w-[15rem] 2xl:w-[27rem]"
                  />
                </span>
                <span
                  className="text-green-600 font-semibold border-2 border-green-600 rounded-md  py-[0.5rem] px-4 hover:bg-green-500 hover:border-green-500 hover:text-white hover:font-semibold"
                  onClick={() => {
                    loading ? <Loader /> : setIsModalImageOpen(true);
                    setSelectedModal("bannerImg");
                  }}
                >
                  <button className="text-black rounded-md font-semibold hover:text-white">
                    Choose
                  </button>
                </span>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default AssessmentAndBanner;
