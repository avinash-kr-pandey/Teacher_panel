import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaFileUpload } from "react-icons/fa";
import ImageCoursesModal from "../modals/ImageCourseModal";
import Loader from "../../Loader/Loader";
import FeatureVideoCourseModal from "../modals/FeatureVideoModal";

const ReviewTestimonials = ({
  courseDetails,
  setCourseDetails,
  reviews,
  setReviews,
  testimonials,
  setTestimonials,
  loading,
  uploadedMedia,
  setUploadedMedia,
}) => {
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  const [selectedMediaFromModal, setSelectedMediaFromModal] = useState("");
  const [selectedMediaType, setSelectedMediaType] = useState("");
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(null);
  const [currentReviewsIndex,setCurrentReviewsIndex]=useState(null);

  const openModal = () => {
    setIsModalVideoOpen(true);
  };

  const closeModal = () => {
    setIsModalVideoOpen(false);
  };

  const openImageModal=()=>{
    setIsModalImageOpen(true);
  }

  const closeImageModal=()=>{
    setIsModalImageOpen(false);
  }

  const handleReviewVideosChange = (index, url) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index].reviewVideo = url;
    setTestimonials(newTestimonials);
  };

  const handleUserImageChange = (index,url) => {
    const newReviews= [...reviews];
    newReviews[index].userProfileImg=url;
    setReviews(newReviews);
    // Implement if user image change is needed
  };

  useEffect(() => {
    if (selectedMediaFromModal) {
      if (selectedMediaType === "reviewVideo") {
        handleReviewVideosChange(currentTestimonialIndex, selectedMediaFromModal);
      } else if (selectedMediaType === "userProfileImg") {
        handleUserImageChange(currentReviewsIndex,selectedMediaFromModal);
      }
      // Clear selected media and type after handling
      setSelectedMediaFromModal("");
      setSelectedMediaType("");
      closeImageModal();
      closeModal();
    }
  }, [selectedMediaFromModal]);

  const addReviews = () => {
    setReviews([
      ...reviews,
      {
        review: "",
        reating: 1,
        userName: "",
        reviewVideo: "",
      },
    ]);
  };

  const removeReviews = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  const handleReviewsChange = (index, field, e) => {
    const newReviews = [...reviews];
    newReviews[index][field] = e.target.value;
    setReviews(newReviews);
  };

  const addTestimonials = () => {
    setTestimonials([
      ...testimonials,
      {
        review: "",
        rating: 1,
        userName: "",
        reviewVideo: "",
      },
    ]);
  };

  const removeTestimonials = (index) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  const handleTestimonialsChange = (index, field, e) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index][field] = e.target.value;
    setTestimonials(newTestimonials);
  };

  return (
    <div>
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
      {isModalVideoOpen && (
        <FeatureVideoCourseModal
          isModalVideoOpen={isModalVideoOpen}
          setIsModalVideoOpen={setIsModalVideoOpen}
          courseDetails={courseDetails}
          setCourseDetails={setCourseDetails}
          type={selectedModal}
          uploadedMedia={uploadedMedia}
          setSelectedMediaFromModal={setSelectedMediaFromModal}
        />
      )}
      <div className="flex flex-col gap-4 py-6 pl-20 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem]">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Reviews & Testimonials
        </h1>
        <div className="grid grid-cols-2 bg-gradient-to-r from-greenColor to-green-300">
          <fieldset className="flex flex-col gap-2 px-6 py-6">
            <h1 className="text-[#fff] text-lg font-semibold font-Montserrat items-center flex flex-row gap-5">
              Reviews
              <FaPlusCircle
                className="cursor-pointer text-xl"
                onClick={addReviews}
              />
            </h1>
            <div className="flex flex-col gap-4 h-[14rem] overflow-y-auto scroll-smooth">
              {reviews?.map((review, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex flex-col gap-2 pr-5">
                    <span>
                      <input
                        type="text"
                        placeholder="User Name"
                        value={review.userName}
                        onChange={(e) => handleReviewsChange(index, "userName", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                    </span>
                    <span>
                      <textarea
                        type="text"
                        placeholder="Description"
                        value={review.review}
                        onChange={(e) => handleReviewsChange(index, "review", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                    </span>
                    <span>
                      <input
                        type="number"
                        placeholder="Reating"
                        value={review.reating}
                        min={1}
                        max={5}
                        onChange={(e) => handleReviewsChange(index, "reating", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                    </span>
                    <span className="flex items-center">
                      <input
                        type="url"
                        placeholder="User Profile"
                        value={review.userProfileImg}
                        onChange={(e) => handleReviewsChange(index, "userProfileImg", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                      <button
                        className="grid place-items-center ml-2"
                        onClick={() => {
                          openImageModal();
                          setCurrentReviewsIndex(index);
                          setSelectedMediaType("userProfileImg");
                        }}
                      >
                        <FaFileUpload />
                      </button>
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 pt-2 mt-5 w-[100%]">
                    <span
                      className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer pt-4"
                      onClick={() => removeReviews(index)}
                    >
                      ❌
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-2 px-6 py-6">
            <h1 className="text-[#fff] text-lg font-semibold font-Montserrat items-center flex flex-row gap-5">
              Testimonials
              <FaPlusCircle
                className="cursor-pointer text-xl"
                onClick={addTestimonials}
              />
            </h1>
            <div className="flex flex-col gap-4 h-[14rem] overflow-y-auto scroll-smooth">
              {testimonials?.map((testimonial, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex flex-col gap-2 pr-5">
                    <span>
                      <input
                        type="text"
                        placeholder="User Name"
                        value={testimonial.userName}
                        onChange={(e) => handleTestimonialsChange(index, "userName", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                    </span>
                    <span>
                      <textarea
                        type="text"
                        placeholder="Description"
                        value={testimonial.review}
                        onChange={(e) => handleTestimonialsChange(index, "review", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                    </span>
                    <span>
                      <input
                        type="number"
                        placeholder="Rating"
                        min={1}
                        max={5}
                        value={testimonial.rating}
                        onChange={(e) => handleTestimonialsChange(index, "rating", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                    </span>
                    <span className="flex items-center">
                      <input
                        type="url"
                        placeholder="Testimonial Video"
                        value={testimonial.reviewVideo}
                        onChange={(e) => handleTestimonialsChange(index, "reviewVideo", e)}
                        className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                      />
                      <button
                        className="grid place-items-center ml-2"
                        onClick={() => {
                          openModal();
                          setCurrentTestimonialIndex(index);
                          setSelectedMediaType("reviewVideo");
                        }}
                      >
                        <FaFileUpload />
                      </button>
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 pt-2 mt-5 w-[100%]">
                    <span
                      className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer pt-4"
                      onClick={() => removeTestimonials(index)}
                    >
                      ❌
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ReviewTestimonials;
