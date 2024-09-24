import React, { useEffect, useState } from "react";
import { FaFileUpload, FaPlusCircle } from "react-icons/fa";
import ImageCoursesModal from "../modals/ImageCourseModal";
import VideoCourseModal from "../modals/VideoCourseModal";
import PdfCoursesModal from "../modals/PdfCourseModal";

const CurriculumLiveClasses = ({
  courseDetails,
  setCourseDetails,
  uploadedMedia,
  chapters,
  setChapters,
  liveClasses,
  setLiveClasses,
}) => {
  // console.log(liveClasses[0]?.date?.split("T")[0]);

  const [selectedMediaFromModal, setSelectedMediaFromModal] = useState("");
  const [currentChapterIndex, setCurrentChapterIndex] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(null);
  // const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [selectedMediaType, setSelectedMediaType] = useState("");
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
  const [isModalPdfOpen, setIsModalPdfOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  // const [index, setIndex] = useState("");
  // Add event listener for beforeunload event
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     const message = "Are you sure you want to leave? Your changes may not be saved.";
  //     event.returnValue = message;
  //     return message;
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  const openModal = () => {
    setIsModalVideoOpen(true);
  };

  const closeModal = () => {
    setIsModalVideoOpen(false);
  };

  const openPdfModal = () => {
    setIsModalPdfOpen(true);
  };

  const closePdfModal = () => {
    setIsModalPdfOpen(false);
  };

  // handle curriculum change value
  const handleChapterNameChange = (index, event) => {
    const newChapters = [...chapters];
    newChapters[index].chapter_name = event.target.value;
    setChapters(newChapters);
  };

  const handleLessonNameChange = (chapterIndex, lessonIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].lesson_name =
      event.target.value;
    setChapters(newChapters);
  };

  const handleNotesNameChange = (chapterIndex, lessonIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].notesName =
      event.target.value;
    setChapters(newChapters);
  };

  const handleAssignmentNameChange = (chapterIndex, lessonIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].assignmentName =
      event.target.value;
    setChapters(newChapters);
  };

  const handleVideoChange = (chapterIndex, lessonIndex, url) => {
    if (url) {
      console.log(chapterIndex, lessonIndex, url);
      const newChapters = [...chapters];
      newChapters[chapterIndex].lessons[lessonIndex].video = url;
      setChapters(newChapters);
    }
  };
  const handleNotesChange = (chapterIndex, lessonIndex, url) => {
    console.log(chapterIndex, lessonIndex, url);
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].notes = url;
    setChapters(newChapters);
  };
  const handleAssignmentChange = (chapterIndex, lessonIndex, url) => {
    console.log(url);
    console.log(chapterIndex, lessonIndex, url);
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].assignment = url;
    setChapters(newChapters);
  };

  const handleProjectNameChange = (chapterIndex, projectIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].project[projectIndex].title = event.target.value;
    setChapters(newChapters);
  };

  const handleDurationChange = (chapterIndex, projectIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].project[projectIndex].duration =
      event.target.value;
    setChapters(newChapters);
  };

  const handleStartDateChange = (chapterIndex, projectIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].project[projectIndex].startDate =
      event.target.value;
    setChapters(newChapters);
  };

  const handleEndDateChange = (chapterIndex, projectIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].project[projectIndex].endDate =
      event.target.value;
    setChapters(newChapters);
  };

  const handleProjectInfoPdfChange = (chapterIndex, projectIndex, event) => {
    console.log(event);
    console.log(chapterIndex, projectIndex, event);
    const newChapters = [...chapters];
    newChapters[chapterIndex].project[projectIndex].projectInfoPdf =
      event.target.value;
    setChapters(newChapters);
  };

  // const handleCourseLessonLiveClassesChange = (
  //   chapterIndex,
  //   liveClassesIndex,
  //   field,
  //   e
  // ) => {
  //   const newChapters = [...chapters];
  //   const value =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;

  //   if (field.startsWith("liveClass.")) {
  //     const liveClassField = field.split(".")[1];
  //     newChapters[chapterIndex].liveClasses[liveClassesIndex].liveClass[
  //       liveClassField
  //     ] = value;
  //   } else if (field === "isLiveClass") {
  //     newChapters[chapterIndex].liveClasses[liveClassesIndex][field] =
  //       value === "true";
  //   } else {
  //     newChapters[chapterIndex].liveClasses[liveClassesIndex][field] = value;
  //   }

  //   setChapters(newChapters);
  // };

  const handleCourseLiveClassesChange = (
    chapterIndex,
    liveClassesIndex,
    field,
    e
  ) => {
    console.log(e);
    console.log(chapterIndex, liveClassesIndex, e.target.value);
    const newChapters = [...chapters];
    newChapters[chapterIndex].liveClasses[liveClassesIndex][field] =
      e.target.value;
    setChapters(newChapters);
  };

  useEffect(() => {
    console.log(selectedMediaFromModal, selectedMediaType);
    if (selectedMediaType === "video") {
      handleVideoChange(
        currentChapterIndex,
        currentLessonIndex,
        selectedMediaFromModal
      );
    } else if (selectedMediaType === "notes") {
      handleNotesChange(
        currentChapterIndex,
        currentLessonIndex,
        selectedMediaFromModal
      );
    } else if (selectedMediaType === "assignment") {
      handleAssignmentChange(
        currentChapterIndex,
        currentLessonIndex,
        selectedMediaFromModal
      );
      // } else if (selectedMediaType === "projectInfoPdf") {
      //   handleProjectInfoPdfChange(
      //     currentChapterIndex,
      //     currentProjectIndex,
      //     selectedMediaFromModal
      //   );
    }
    // Clear selected media and type after handling
    closeModal();
    closePdfModal();
  }, [selectedMediaFromModal]);

  // add remove chapter

  const addChapter = () => {
    setChapters([
      ...chapters,
      {
        chapter_name: "",
        lessons: [{lesson_name: "",
      video: "",
      notesName: "",
      notes: "",
      assignmentName: "",
      assignment: "",
      duration: 15,
      isLiveClass: false
     }],
        project: [],
        liveClasses: [],
      },
    ]);
  };

  const removeChapter = (index) => {
    setChapters(chapters.filter((_, i) => i !== index));
  };

  // add remove lesson
  // const addLesson = (index) => {
  //   console.log(chapters);
  //   setChapters(
  //     chapters.map((chapter, i) =>
  //       i === index
  //         ? {
  //             ...chapter,
  //             lessons: [
  //               ...chapter.lessons,
  //               {
  //                 lesson_name: "",
  //                 video: "",
  //                 notesName: "",
  //                 notes: "",
  //                 assignmentName: "",
  //                 assignment: "",
  //                 isLiveClass: false,
  //                 liveClass: {
  //                   startDate: "",
  //                   endDate: "",
  //                   meetingLink: "",
  //                 },
  //               },
  //             ],
  //           }
  //         : chapter
  //     )
  //   );
  // };
  const addLesson = (chapterIndex, lessonIndex = null) => {
    console.log(chapters);

    const newLesson = {
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
    };

    setChapters(
      chapters.map((chapter, i) => {
        if (i === chapterIndex) {
          let updatedLessons;
          if (lessonIndex !== null && lessonIndex !== undefined) {
            // Insert at specific index
            updatedLessons = [
              ...chapter.lessons.slice(0, lessonIndex),
              newLesson,
              ...chapter.lessons.slice(lessonIndex),
            ];
          } else {
            // Append to the end
            updatedLessons = [...chapter.lessons, newLesson];
          }

          return {
            ...chapter,
            lessons: updatedLessons,
          };
        }
        return chapter;
      })
    );
  };

  const removeLesson = (chapterIndex, lessonIndex) => {
    const updatedLessons = [...chapters[chapterIndex].lessons];
    updatedLessons.splice(lessonIndex, 1);
    setChapters(
      chapters.map((chapter, i) =>
        i === chapterIndex ? { ...chapter, lessons: updatedLessons } : chapter
      )
    );
  };

  // add remove project
  const addProject = (index) => {
    // console.log(chapters);
    setChapters(
      chapters?.map((chapter, i) =>
        // console.log(chapter)
        i === index
          ? {
              ...chapter,
              project: [
                ...chapter.project,
                {
                  title: "",
                  duration: 0,
                  startDate: "",
                  endDate: "",
                  projectInfoPdf: "",
                },
              ],
            }
          : chapter
      )
    );
  };

  const removeProject = (chapterIndex, projectIndex) => {
    const updatedProject = [...chapters[chapterIndex].project];
    updatedProject.splice(projectIndex, 1);
    setChapters(
      chapters.map((chapter, i) =>
        i === chapterIndex ? { ...chapter, project: updatedProject } : chapter
      )
    );
  };

  const addCourseLiveClasses = (index) => {
    console.log(chapters);
    setChapters(
      chapters?.map((chapter, i) =>
        // console.log(chapter)
        i === index
          ? {
              ...chapter,
              liveClasses: [
                ...chapter.liveClasses,
                {
                  topic: "",
                  startDate: "",
                  endDate: "",
                  duration: 15,
                  meetingLink: "",
                },
              ],
            }
          : chapter
      )
    );
  };

  const removeCourseLiveClasses = (chapterIndex, liveClassesIndex) => {
    const updatedLiveClasses = [...chapters[chapterIndex].liveClasses];
    updatedLiveClasses.splice(liveClassesIndex, 1);
    setChapters(
      chapters.map((chapter, i) =>
        i === chapterIndex
          ? { ...chapter, liveClasses: updatedLiveClasses }
          : chapter
      )
    );
  };

  const handleIsLiveClass = (chapterIndex, lessonIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].isLiveClass =
      event.target.value === "true"; // Convert string value to boolean
    setChapters(newChapters);
  };

  const handleLessonLiveClassChange = (
    chapterIndex,
    lessonIndex,
    field,
    event
  ) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].liveClass[field] =
      event.target.value;
    setChapters(newChapters);
  };

  // format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // console.log(liveClasses);
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
      {isModalVideoOpen && (
        <VideoCourseModal
          isModalVideoOpen={isModalVideoOpen}
          setIsModalVideoOpen={setIsModalVideoOpen}
          courseDetails={courseDetails}
          setCourseDetails={setCourseDetails}
          type={selectedModal}
          uploadedMedia={uploadedMedia}
          setSelectedMediaFromModal={setSelectedMediaFromModal}
        />
      )}
      {isModalPdfOpen && (
        <PdfCoursesModal
          isModalPdfOpen={isModalPdfOpen}
          setIsModalPdfOpen={setIsModalPdfOpen}
          courseDetails={courseDetails}
          setCourseDetails={setCourseDetails}
          type={selectedModal}
          uploadedMedia={uploadedMedia}
          setSelectedMediaFromModal={setSelectedMediaFromModal}
        />
      )}

      {/* Curriculum & Live Classes */}
      <div className="flex flex-col gap-4 py-6 pl-20 pr-16 lg:mx-[4rem] ">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Curriculum & Live Classes
        </h1>
        <div className="p-3 rounded-md bg-gradient-to-r from-greenColor to-green-300 ">
          {/* Curriculum  */}

          <fieldset className="flex flex-col gap-2 px-6">
            <h1 className="text-[#fff] text-lg font-semibold font-Montserrat items-center flex flex-row gap-5 ">
              Curriculum
              <FaPlusCircle
                onClick={addChapter}
                className="text-xl cursor-pointer"
              />
            </h1>
            <div className="flex gap-2 flex-col h-[40rem] overflow-y-auto scroll-smooth">
              {chapters.map((chapter, chapterIndex) => (
                <div key={chapterIndex} >
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Chapter Name"
                        value={chapter.chapter_name}
                        onChange={(e) =>
                          handleChapterNameChange(chapterIndex, e)
                        }
                        className="p-2 outline-none shadow-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] rounded-md "
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => removeChapter(chapterIndex)}
                      >
                        ❌
                      </span>
                    </div>
                    <div className="flex gap-2 2xl:mx-4 xl:mx-1">
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span
                          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                          onClick={() => addLesson(chapterIndex)}
                        >
                          ➕ Lesson
                        </span>
                      </button>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span
                          className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                          onClick={() => addCourseLiveClasses(chapterIndex)}
                        >
                          ➕ Live Classes
                        </span>
                      </button>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span
                          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                          onClick={() => addProject(chapterIndex)}
                        >
                          ➕ Project
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                  {chapter?.lessons?.map((lesson, lessonIndex) => (
                    <div
                      className="flex flex-col gap-2"
                      key={lessonIndex + "l"}
                    >
                      <div className="flex gap-2 items-center mt-2">
                        <p className="text-lg font-semibold text-white ">
                          Is Live Class
                        </p>
                        <label className="flex items-center space-x-1 cursor-pointer">
                          <input
                            type="radio"
                            value={"true"}
                            checked={lesson.isLiveClass === true}
                            onChange={(e) =>
                              handleIsLiveClass(chapterIndex, lessonIndex, e)
                            }
                            className="form-radio h-5 w-5"
                          />
                          <span className="text-md font-medium text-white">
                            Yes
                          </span>
                        </label>
                        <label className="flex items-center space-x-1 cursor-pointer">
                          <input
                            type="radio"
                            value={"false"}
                            checked={lesson.isLiveClass === false}
                            onChange={(e) =>
                              handleIsLiveClass(chapterIndex, lessonIndex, e)
                            }
                            className="form-radio h-5 w-5"
                          />
                          <span className="text-md font-medium text-white">
                            No
                          </span>
                        </label>
                      </div>

                      <div className="flex flex-row gap-2 pt-2 w-[100%]">
                        <span className="w-[100%]">
                          <div className="flex items-center gap-1">
                            <input
                              type="text"
                              placeholder="Lesson Name"
                              value={lesson.lesson_name}
                              onChange={(e) =>
                                handleLessonNameChange(
                                  chapterIndex,
                                  lessonIndex,
                                  e
                                )
                              }
                              className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[30rem] "
                            />
                            <span
                              className="cursor-pointer border text-white font-semibold hover:text-greenColor hover:bg-white rounded-md border-white px-4 py-1"
                              onClick={() => addLesson(chapterIndex, lessonIndex+1)}
                            >
                              A
                            </span>
                            <span
                              className="cursor-pointer border text-white font-semibold hover:text-greenColor hover:bg-white rounded-md border-white px-4 py-1"
                              onClick={() => addLesson(chapterIndex, lessonIndex-1)}
                            >
                              B
                            </span>
                            {/* <input type="number" value={index} onChange={(e)=>setIndex(e.target.value)} /> */}
                          </div>
                          <input
                                  type="number"
                                  placeholder="Duration"
                                  value={lesson?.duration}
                                  className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                                  onChange={(e) => {
                                    const newChapters = [...chapters];
                                    newChapters[chapterIndex].lessons[
                                      lessonIndex
                                    ].duration = e.target.value;
                                    setChapters(newChapters);
                                  }}
                                />
                          <div>
                            {!lesson?.isLiveClass ? (
                              <>
                                <span className="flex justify-between">
                                  <input
                                    type="text"
                                    placeholder="Video URL"
                                    value={
                                      chapters[chapterIndex]?.lessons[
                                        lessonIndex
                                      ].video
                                    }
                                    className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                                  />
                                  <button
                                    className="grid place-items-center"
                                    onClick={() => {
                                      openModal();
                                      setCurrentChapterIndex(chapterIndex);
                                      setCurrentLessonIndex(lessonIndex);
                                      setSelectedMediaType("video");
                                    }}
                                  >
                                    <FaFileUpload />
                                  </button>
                                </span>
                              </>
                            ) : (
                              <>
                                <input
                                  type="datetime-local"
                                  placeholder="Start Date"
                                  value={formatDate(
                                    lesson.liveClass?.startDate
                                  )}
                                  className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                                  onChange={(e) => {
                                    handleLessonLiveClassChange(
                                      chapterIndex,
                                      lessonIndex,
                                      "startDate",
                                      e
                                    );
                                  }}
                                />
                                <input
                                  type="datetime-local"
                                  placeholder="End Date"
                                  value={formatDate(lesson.liveClass?.endDate)}
                                  className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                                  onChange={(e) => {
                                    handleLessonLiveClassChange(
                                      chapterIndex,
                                      lessonIndex,
                                      "endDate",
                                      e
                                    );
                                  }}
                                />

                                <input
                                  type="text"
                                  placeholder="Meeting Link"
                                  value={lesson?.liveClass?.meetingLink}
                                  className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                                  onChange={(e) => {
                                    handleLessonLiveClassChange(
                                      chapterIndex,
                                      lessonIndex,
                                      "meetingLink",
                                      e
                                    );
                                  }}
                                />
                              </>
                            )}
                          </div>
                          <div>
                            <span className="flex flex-col  justify-between">
                              <input
                                type="text"
                                placeholder="Notes Name"
                                value={lesson.notesName}
                                onChange={(e) =>
                                  handleNotesNameChange(
                                    chapterIndex,
                                    lessonIndex,
                                    e
                                  )
                                }
                                className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                              />
                              <div className="flex justify-between">
                                <input
                                  type="text"
                                  placeholder="Notes Url"
                                  value={
                                    chapters[chapterIndex]?.lessons[lessonIndex]
                                      .notes
                                  }
                                  className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                                />
                                <button
                                  className="grid place-items-center"
                                  onClick={() => {
                                    openPdfModal();
                                    setCurrentChapterIndex(chapterIndex);
                                    setCurrentLessonIndex(lessonIndex);
                                    setSelectedMediaType("notes");
                                  }}
                                >
                                  <FaFileUpload />
                                </button>
                              </div>
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder="Assignment Name"
                              value={lesson.assignmentName}
                              onChange={(e) =>
                                handleAssignmentNameChange(
                                  chapterIndex,
                                  lessonIndex,
                                  e
                                )
                              }
                              className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                            />
                            <span className="flex justify-between">
                              <input
                                type="text"
                                placeholder="Assignment Url"
                                value={
                                  chapters[chapterIndex]?.lessons[lessonIndex]
                                    .assignment
                                }
                                className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                              />
                              <button
                                className="grid place-items-center ml-2 outline-none"
                                onClick={() => {
                                  openPdfModal();
                                  setCurrentChapterIndex(chapterIndex);
                                  setCurrentLessonIndex(lessonIndex);
                                  setSelectedMediaType("assignment");
                                }}
                              >
                                <FaFileUpload />
                              </button>
                            </span>
                          </div>
                        </span>

                        <span
                          className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer"
                          onClick={() =>
                            removeLesson(chapterIndex, lessonIndex)
                          }
                        >
                          ❌
                        </span>
                      </div>
                      {/* ) } */}
                    </div>
                  ))}
                  {chapter?.liveClasses?.map((liveClass, liveClassesIndex) => (
                    <div
                      key={liveClassesIndex}
                      className="flex gap-2 mt-2 justify-between"
                    >
                      <div className="flex flex-col">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Topic"
                            value={liveClass.topic}
                            onChange={(e) =>
                              handleCourseLiveClassesChange(
                                chapterIndex,
                                liveClassesIndex,
                                "topic",
                                e
                              )
                            }
                            className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                          />
                          <span
                            className="cursor-pointer pt-1"
                            onClick={() => addCourseLiveClasses(chapterIndex)}
                          >
                            ➕
                          </span>
                        </div>
                        <span>
                          <input
                            type="date"
                            placeholder="Start Date"
                            value={liveClass.startDate?.split("T")[0]} // Ensure liveClass.date is correctly formatted (YYYY-MM-DD)
                            onChange={(e) =>
                              handleCourseLiveClassesChange(
                                chapterIndex,
                                liveClassesIndex,
                                "startDate",
                                e
                              )
                            }
                            className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                          />
                        </span>
                        <span>
                          <input
                            type="date"
                            placeholder="End Date"
                            value={liveClass.endDate?.split("T")[0]} // Ensure liveClass.date is correctly formatted (YYYY-MM-DD)
                            onChange={(e) =>
                              handleCourseLiveClassesChange(
                                chapterIndex,
                                liveClassesIndex,
                                "endDate",
                                e
                              )
                            }
                            className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                          />
                        </span>
                        <span>
                          <input
                            type="number"
                            placeholder="Duration"
                            value={liveClass.duration} // Ensure liveClass.duration this is defined
                            onChange={(e) =>
                              handleCourseLiveClassesChange(
                                chapterIndex,
                                liveClassesIndex,
                                "duration",
                                e
                              )
                            }
                            className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                          />
                        </span>
                        <span>
                          <input
                            type="url"
                            placeholder="Live Class Link"
                            value={liveClass.meetingLink}
                            onChange={(e) =>
                              handleCourseLiveClassesChange(
                                chapterIndex,
                                liveClassesIndex,
                                "meetingLink",
                                e
                              )
                            }
                            className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                          />
                        </span>
                      </div>
                      <span
                        className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer pt-4"
                        onClick={() =>
                          removeCourseLiveClasses(
                            chapterIndex,
                            liveClassesIndex
                          )
                        }
                      >
                        ❌
                      </span>
                    </div>
                  ))}
                  {chapter?.project?.map((project, projectIndex) => (
                    <div
                      className="flex flex-col gap-2"
                      key={projectIndex + "p"}
                    >
                      <div className="flex flex-row gap-2 pt-2 w-[100%]">
                        <span className="w-[100%]">
                          <div className="flex gap-2">
                            <textarea
                              type="text"
                              placeholder="Project Name"
                              value={project.title}
                              onChange={(e) =>
                                handleProjectNameChange(
                                  chapterIndex,
                                  projectIndex,
                                  e
                                )
                              }
                              className="p-2 outline-none border-b border-greenColor rounded-md border-dashed lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem] "
                            />
                            <span
                              className="cursor-pointer pt-1"
                              onClick={() => addProject(chapterIndex)}
                            >
                              ➕
                            </span>
                          </div>
                          <div>
                            <span className="flex justify-between">
                              <input
                                type="number"
                                placeholder="Duration"
                                value={
                                  chapters[chapterIndex]?.project[projectIndex]
                                    .duration
                                }
                                onChange={(e) =>
                                  handleDurationChange(
                                    chapterIndex,
                                    projectIndex,
                                    e
                                  )
                                }
                                className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                              />
                            </span>
                          </div>
                          <div>
                            <span className="flex justify-between">
                              <input
                                type="datetime-local"
                                placeholder="Start Date"
                                value={formatDate(project.startDate)}
                                onChange={(e) =>
                                  handleStartDateChange(
                                    chapterIndex,
                                    projectIndex,
                                    e
                                  )
                                }
                                className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                              />
                            </span>
                          </div>
                          <div>
                            <span className="flex justify-between">
                              <input
                                type="datetime-local"
                                placeholder="End Date"
                                value={formatDate(project.endDate)}
                                onChange={(e) =>
                                  handleEndDateChange(
                                    chapterIndex,
                                    projectIndex,
                                    e
                                  )
                                }
                                className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                              />
                            </span>
                          </div>
                          <div>
                            <span className="flex justify-between">
                              <input
                                type="text"
                                onChange={(e) =>
                                  handleProjectInfoPdfChange(
                                    chapterIndex,
                                    projectIndex,
                                    e
                                  )
                                }
                                placeholder="project info Pdf"
                                value={
                                  chapters[chapterIndex]?.project[projectIndex]
                                    .projectInfoPdf
                                }
                                className="p-2 outline-none border-b border-dashed border-greenColor rounded-md lg:w-[18rem] xl:w-[18rem] 2xl:w-[34rem]"
                              />
                            </span>
                          </div>
                        </span>

                        <span
                          className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer"
                          onClick={() =>
                            removeProject(chapterIndex, projectIndex)
                          }
                        >
                          ❌
                        </span>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default CurriculumLiveClasses;