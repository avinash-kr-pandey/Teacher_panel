import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { Pagination, Stack } from "@mui/material";

const ImageCoursesModal = ({
  isModalImageOpen,
  setIsModalImageOpen,
  courseDetails,
  setCourseDetails,
  type,
  uploadedMedia,
  setSelectedMediaFromModal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedia, setFilteredMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12); // Default items per page

  // Function to update items per page based on screen size
  const updateItemsPerPage = () => {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      setItemsPerPage(12);
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
      setItemsPerPage(9);
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(4);
    }
  };

  useEffect(() => {
    setLoading(true);
    // Filter uploaded media to only include images based on search query
    const imageFiles = uploadedMedia.filter(
      (media) =>
        (media.url.toLowerCase().endsWith(".jpg") ||
          media.url.toLowerCase().endsWith(".jpeg") ||
          media.url.toLowerCase().endsWith(".png") ||
          media.url.endsWith(".avif") ||
          media.url.toLowerCase().endsWith(".webp")) &&
        media.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredMedia(imageFiles);
    setLoading(false);
  }, [uploadedMedia, searchQuery]);

  useEffect(() => {
    updateItemsPerPage(); // Initial call to set items per page

    // Add event listener to update items per page on screen resize
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const handleChangeMedia = (url) => {
    if (type === "featured_image") {
      setCourseDetails({ ...courseDetails, featured_image: url });
    } else if (type === "bannerImg") {
      setCourseDetails({ ...courseDetails, bannerImg: url });
    } else {
      setSelectedMediaFromModal(url);
    }
    setIsModalImageOpen(false);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMedia = filteredMedia.slice(startIndex, endIndex);

  return (
    <>
      {isModalImageOpen && (
        <div className="flex justify-center fixed z-10 left-0 top-0 w-full h-full bg-opacity-50 bg-black">
          <div className="h-[87%] w-[80%] my-auto bg-[#fefefe] px-4 overflow-y-auto shadow-md rounded-md">
            <div className="flex mt-2 h-[10%]  lg:flex-row sm:flex-col md:flex-row items-center justify-between gap-3 px-5 bg-white xl:w-[100%] rounded-md shadow-md sticky top-0">
              <p className="text-center font-semibold">Select an Image</p>
              <div className="flex justify-between gap-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 focus:outline-none shadow-md text-gray-600 border-2 w-[30rem] rounded-2xl py-2 px-3"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to first page on search
                  }}
                />
                <span
                  style={{
                    color: "#aaa",
                    fontSize: "28px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsModalImageOpen(false)}
                >
                  &times;
                </span>
              </div>
            </div>
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 mt-1 mb-6">
                  {paginatedMedia.map((media, index) => {
                    // Extract the filename without the extension
                    const fileNameWithPrefix = media.title.substring(
                      media.title.lastIndexOf("/") + 1,
                      media.title.lastIndexOf(".")
                    );

                    // Split by dash and get the part after the numeric prefix
                    const fileName =
                      fileNameWithPrefix.split("-")[1] || fileNameWithPrefix;

                    return (
                      <div
                        key={index}
                        className="max-w-xs mt-[1rem] mb-[1rem] mx-auto h-[10rem] w-[18rem] font-semibold cursor-pointer"
                      >
                        <div
                          className="card my-3"
                          onClick={() => handleChangeMedia(media.url)}
                        >
                          <img
                            src={media.url}
                            alt={`Uploaded ${index}`}
                            className="rounded-md w-[19rem] h-[10rem] object-contain"
                          />
                          <span className="text-sm">{fileName}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center mt-14">
                  <Stack spacing={2}>
                    <Pagination
                      count={Math.ceil(filteredMedia.length / itemsPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                      variant="outlined"
                      color="primary"
                    />
                  </Stack>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCoursesModal;
