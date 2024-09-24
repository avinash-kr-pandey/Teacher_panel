import { useEffect, useState } from "react";

const AllCoursesModal = ({
  isModalOpen,
  setIsModalOpen,
  courseDetails,
  setCourseDetails,
  type,
  uploadedMedia,
  setSelectedMediaFromModal,
}) => {
  console.log(courseDetails, type);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedia, setFilteredMedia] = useState([]);

  useEffect(() => {
    // Filter uploaded media based on search query
    const imageFiles = uploadedMedia.filter(
      (media) =>
        media.url.endsWith(".jpg") ||
        media.url.endsWith(".jpeg") ||
        media.url.endsWith(".png")
    );
    const videoFiles = uploadedMedia.filter((media) =>
      media.url.endsWith(".mp4")
    );
    const pdfFiles = uploadedMedia.filter((media) =>
      media.url.endsWith(".pdf")
    );

    const filtered = [...imageFiles, ...videoFiles, ...pdfFiles].filter(
      (media) => media.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredMedia(filtered);
  }, [uploadedMedia, searchQuery]);

  const handleChangeMedia = (url) => {
    if (type === "featured_image") {
      setCourseDetails({ ...courseDetails, featured_image: url });
    } else if (type === "featured_video") {
      setCourseDetails({ ...courseDetails, featured_video: url });
    } else {
      console.log(url);
      setSelectedMediaFromModal(url);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: 1,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: "#fefefe",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: "70%",
              overflowY: "auto",
            }}
          >
            <div className="flex sm:flex-col items-center justify-between gap-3 z-10 px-5 bg-white  lg:w-[81.51rem] top-[6rem] left-[17.44rem] rounded-md h-[4rem] ">
              <p className="text-center font-semibold ">
                Select any Video, Image, or PDF
              </p>
              <input
                type="text"
                placeholder="Search..."
                className="p-2 focus:outline-none shadow-md text-gray-600 border-2 w-[20rem]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span
                style={{
                  color: "#aaa",
                  // float: "right",
                  fontSize: "28px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </span>
            </div>
            <div className="grid lg:grid-cols-4 gap-8 mt-10">
              {filteredMedia?.map((media, index) => (
                <div
                  key={index}
                  className="max-w-xs mt-[1rem] mb-[1rem] mr-2 h-[10rem] w-[19rem] font-semibold cursor-pointer"
                >
                  <div
                    className="card mb-3"
                    onClick={() => handleChangeMedia(media.url)}
                  >
                    {media.url.endsWith(".mp4") ? (
                      <video
                        className="custom-height"
                        controls
                        src={media.url}
                        type="video/mp4"
                      />
                    ) : media.url.endsWith(".pdf") ? (
                      <span
                        style={{
                          position: "relative",
                        }}
                      >
                        <iframe src={media.url} title="PDF Preview"></iframe>{" "}
                        <span
                          onClick={() => handleChangeMedia(media.url)}
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            height: "100%",
                            width: "15vw",
                            backgroundColor: "rgba(0,0,0,0.2)",
                            zIndex: "9999999 !important",
                          }}
                        ></span>
                      </span>
                    ) : (
                      <img
                        src={media.url}
                        alt={`Uploaded ${index}`}
                        className="rounded-md w-[19rem] h-[10rem]"
                      />
                    )}
                    <span className="">{media.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllCoursesModal;
