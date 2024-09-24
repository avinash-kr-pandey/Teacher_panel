import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const VideoCourseModal = ({
  isModalVideoOpen,
  setIsModalVideoOpen,
  courseDetails,
  setCourseDetails,
  type,
  uploadedMedia,
  setSelectedMediaFromModal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedia, setFilteredMedia] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Filter uploaded media to only include videos based on search query
    const videoFiles = uploadedMedia.filter(
      (media) =>
        (media.url.endsWith(".mp4") || media.url.endsWith(".mov") || media.url.endsWith(".mp3")) &&
        media.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredMedia(videoFiles);
    setLoading(false);
  }, [uploadedMedia, searchQuery]);

  const handleChangeMedia = (url) => {
    setSelectedMediaFromModal(url);
    setIsModalVideoOpen(false);
  };


  return (
    <>
      {isModalVideoOpen && (
        <div className="flex justify-center fixed z-10 left-0 top-0 w-full h-full bg-opacity-50 bg-black">
          <div className="h-[87%] w-[80%] my-auto bg-[#fefefe] overflow-y-auto shadow-md rounded-md">
            <div className="flex h-[10%] lg:flex-row sm:flex-col md:flex-row items-center justify-between gap-3 z-10 px-5 bg-white xl:w-[100%] rounded-md shadow-md sticky top-0">
              <p className="text-center font-semibold">Select a Video</p>
              <div className="flex justify-between gap-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 focus:outline-none shadow-md text-gray-600 border-2 w-[30rem] rounded-2xl py-2 px-3"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    // setCurrentPage(1); // Reset to first page when search query changes
                  }}
                />
                <span
                  style={{
                    color: "#aaa",
                    fontSize: "28px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsModalVideoOpen(false)}
                >
                  &times;
                </span>
              </div>
            </div>
            {loading ? (
              <div className="flex justify-center mt-10">
                <p>Loading...</p>
              </div>
            ) : (
              <>
                <div className=" px-8 grid  xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-1">
                  {filteredMedia.map((media, index) => (
                    <div
                      key={index}
                      className="max-w-xs mt-[1rem] mb-[1rem] mr-2 h-[15rem] w-[19rem] font-semibold cursor-pointer"
                    >
                      <div
                        className="card mb-3 items-center justify-center flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        onClick={() => handleChangeMedia(media.url)}
                      >
                        <img
                          className="custom-height shadow-xl hover:shadow-2xl rounded-3xl"
                          src="https://png.pngtree.com/element_our/png/20181229/play-video-graphic-icon-design-template-png_300932.jpg" // Use default thumbnail if none is provided
                          alt={media.title}
                        />
                        <div className="flex items-center justify-center w-full py-3">
                          <span className="text-center">{media.title}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCourseModal;
