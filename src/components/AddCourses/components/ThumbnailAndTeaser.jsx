import React,{useState} from 'react'
import Loader from '../../Loader/Loader';
import ImageCoursesModal from '../modals/ImageCourseModal';
import FeatureVideoCourseModal from '../modals/FeatureVideoModal';
const ThumbnailAndTeaser = ({
  courseDetails,
  setCourseDetails,
  loading,
  uploadedMedia,
  handleUploadCourse,
}) => {
  const handleInputChange = (e) => {
    setCourseDetails({
      ...courseDetails,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  const [selectedMediaFromModal, setSelectedMediaFromModal] = useState("");
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);

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
            <fieldset className="flex flex-col gap-4 pl-20 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem]">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Course Media (Teaser & Thumbnail)
        </h1>
        <div className="flex flex-row gap-4 px-4 py-6  rounded-md bg-gradient-to-r from-greenColor to-green-300 w-full items-center">
          <div className="flex flex-col gap-2 justify-between p-2">
            <p className="text-[#fff] text-lg font-semibold font-Montserrat">
              Thumbnail
            </p>
            {courseDetails.featured_image && (
              <img
                src={courseDetails.featured_image}
                alt="Featured"
                className="overflow-hidden rounded-lg 2xl:w-[25rem] 2xl:h-[15rem] xl:w-[20rem] xl:h-[12rem]"
              />
            )}
            <div className="flex items-center gap-2">
              <span>
                <input
                  type="url"
                  name="featured_image"
                  value={courseDetails.featured_image}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="https://example.com/photp.jpg"
                  className="p-2 outline-none shadow-md rounded-md lg:w-[14rem] xl:w-[18rem] 2xl:w-[32rem] md:w-[20rem]"
                />
              </span>

              <button
                className="text-green-600 font-semibold border-2 border-green-600 rounded-md  py-[0.5rem] px-4 hover:bg-green-500 hover:border-green-500 hover:text-white hover:font-semibold"
                onClick={() => {
                  loading ? <Loader /> : setIsModalImageOpen(true);
                  setSelectedModal("featured_image");
                }}
              >
                Choose
              </button>
              {/* </span> */}
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2  justify-between">
            <p className="text-[#fff] text-lg font-semibold font-Montserrat">
              Teaser
            </p>
            {courseDetails.featured_video && (
              <video
                controls
                className=" rounded-lg border border-gray-200 xl:w-[18rem] 2xl:w-[25rem] 2xl:h-[15rem] xl:h-[12rem] custom-height object-cover"
              >
                <source src={courseDetails.featured_video} type="video/mp4" />
              </video>
            )}
            <div className="flex items-center gap-2">
              <span>
                <input
                  type="url"
                  name="featured_video"
                  value={courseDetails.featured_video}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="https://example.com/video.mp4"
                  className="p-2 outline-none shadow-md rounded-md lg:w-[16rem] xl:w-[20rem] 2xl:w-[32rem] md:w-[20rem]"
                />
              </span>

              <button
                className="text-green-600 font-semibold border-2 border-green-500 rounded-md  py-[0.5rem] px-4 hover:bg-green-500 hover:text-white hover:font-semibold"
                onClick={() => {
                  loading ? <Loader /> : setIsModalVideoOpen(true);
                  setSelectedModal("featured_video");
                }}
              >
                Choose
              </button>
              {/* </span> */}
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default ThumbnailAndTeaser