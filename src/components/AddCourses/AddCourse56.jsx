import React, { useEffect, useState } from "react";
import CourseInfo from "./components/CourseInfo";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import InstructorDetail from "./components/InstructorDetails";
import QualityOverview from "./components/QualityOverview";
import PriceAndDiscount from "./components/PriceAndDiscount";
import ThumbnailAndTeaser from "./components/ThumbnailAndTeaser";
import CurriculumLiveClasses from "./components/CurriculumLiveClasses";
import AssessmentAndBanner from "./components/AssessmentAndBanner";
import FaqLearningOutcomes from "./components/FaqLearningOutcomes";
import PlacementAverageSalary from "./components/PlacementAverageSalary";
import ReviewTestimonials from "./components/ReviewTestimonials";
import { BASE_URL } from "../../Api/api";

const AddCourse = () => {
  const [uploadedMedia, setUploadedMedia] = useState([]);
  const [allInstructor, setAllInstructor] = useState([]);
  const [whatWillILearn, setWhatWillILearn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [placementOpportunities, setPlacementOpportunities] = useState([]);
  const [companies, setCompanies] = useState([]);
  // const navigate = useNavigate();

  const [chapters, setChapters] = useState([
    {
      chapter_name: "",
      lessons: [
        {
          lesson_name: "",
          video: "",
          notesName: "",
          notes: "",
          assignmentName: "",
          assignment: "",
          duration: 15,
          isLiveClass: false,
          liveClass: {
            startDate: "",
            endDate: "",
            meetingLink: "",
          },
        },
      ],
      project: [],
      liveClasses: [],
    },
  ]);

  const [liveClasses, setLiveClasses] = useState([]);

  const [reviews, setReviews] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const initialData = {
    instructor: "",
    courseID: "",
    bannerImg: "",
    name: "",
    title: "",
    category: "",
    subcategory: "",
    level: "",
    base_price: "",
    discount_percentage: "",
    overview: "",
    featured_image: "",
    featured_video: "",
    courseType: "",
    credits: 0,
    duration:45,
    faqs: [{ question: "", answer: "" }],
    curriculum: [{ chapter_name: "", lessons: [] }],
    whatWillILearn: [],
    liveClasses: [],
    testimonials: [],
    reviews: [],
    companies: [],
  };

  const [courseDetails, setCourseDetails] = useState(initialData);
  const storedToken = localStorage.getItem("teachertoken");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/getinsmedia`,{

          headers:{
            Authorization:`Bearer ${storedToken}`
          }
        }
      );
      if (response.data.success) {
        setUploadedMedia(response.data.mediaFiles);
        console.log(response.data);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error("Error fetching media");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error fetching media: " + error.message);
    }
  };

  const handleUploadCourse = async () => {
    const allCourseData = {
      ...courseDetails,
      curriculum: chapters,
      whatWillILearn: whatWillILearn,
      liveClasses: liveClasses,
      reviews: reviews,
      testimonials: testimonials,
      companies: companies,
      placementOpportunities: placementOpportunities,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}/addCourseByInstructor`,
        allCourseData,
        {
          headers: {
            Authorization: "Bearer " + storedToken,
          },
        }
      );
      if (res.data.success) {
        toast.success("Course Uploaded Successfully");
        setCourseDetails(initialData);

        // navigate("/Uploaded");
      } else {
        toast.error("Failed to upload Course");
      }
    } catch (error) {
      toast.error("Failed to upload Course: " + error.message);
    }
  };

  return (
    <div className="flex flex-col border bg-gray-200 gap-4 my-5 lg:overflow-x-hidden xl:overflow-auto shadow-md mx-auto">
      <Toaster />
      <h1 className="text-5xl text-greenColor text-center underline font-semibold">
        Upload New Course
      </h1>
      <InstructorDetail
        InstructorDetails={allInstructor}
        courseDetails={courseDetails}
        setCourseDetails={setCourseDetails}
      />
      {/* <InputBox /> */}
      <CourseInfo
        courseDetails={courseDetails}
        setCourseDetails={setCourseDetails}
      />
      <QualityOverview
        courseDetails={courseDetails}
        setCourseDetails={setCourseDetails}
      />
      <PriceAndDiscount
        courseDetails={courseDetails}
        setCourseDetails={setCourseDetails}
      />
      <ThumbnailAndTeaser
        courseDetails={courseDetails}
        loading={loading}
        setCourseDetails={setCourseDetails}
        uploadedMedia={uploadedMedia}
        handleUploadCourse={handleUploadCourse}
      />
      <CurriculumLiveClasses
        courseDetails={courseDetails}
        setCourseDetails={setCourseDetails}
        chapters={chapters}
        setChapters={setChapters}
        liveClasses={liveClasses}
        setLiveClasses={setLiveClasses}
        uploadedMedia={uploadedMedia}
        setUploadedMedia={setUploadedMedia}
      />
      <AssessmentAndBanner
        courseDetails={courseDetails}
        loading={loading}
        setCourseDetails={setCourseDetails}
        uploadedMedia={uploadedMedia}
        handleUploadCourse={handleUploadCourse}
      />
      <FaqLearningOutcomes
        courseDetails={courseDetails}
        setCourseDetails={setCourseDetails}
        whatWillILearn={whatWillILearn}
        setWhatWillILearn={setWhatWillILearn}
      />

      <ReviewTestimonials
        courseDetails={courseDetails}
        setCourseDetails={setCourseDetails}
        reviews={reviews}
        setReviews={setReviews}
        testimonials={testimonials}
        setTestimonials={setTestimonials}
        uploadedMedia={uploadedMedia}
      />

      <PlacementAverageSalary
        setCompanies={setCompanies}
        companies={companies}
        placementOpportunities={placementOpportunities}
        setPlacementOpportunities={setPlacementOpportunities}
      />

      <div className="flex gap-8 justify-center place-items-center mb-5">
        <button
          className="py-2 px-5  border-2 rounded-lg border-green-600 mb-20 hover:text-white hover:bg-green-600 hover:font-semibold "
          onClick={handleUploadCourse}
        >
          Save This Course
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
