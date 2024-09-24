import { useEffect, useState } from "react";
import { Pagination, Stack } from '@mui/material';

const PdfCoursesModal = ({
  isModalPdfOpen,
  setIsModalPdfOpen,
  uploadedMedia,
  setSelectedMediaFromModal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedia, setFilteredMedia] = useState([]);
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
    // Filter uploaded media to only include PDFs based on search query
    const pdfFiles = uploadedMedia.filter(
      (media) =>
        media.url.toLowerCase().endsWith(".pdf") &&
        media.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredMedia(pdfFiles);
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
    setSelectedMediaFromModal(url);
    setIsModalPdfOpen(false);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMedia = filteredMedia.slice(startIndex, endIndex);

  return (
    <>
      {isModalPdfOpen && (
        <div className="flex justify-center fixed z-10 left-0 top-0 w-full h-full bg-opacity-50 bg-black">
          <div className="h-[87%] w-[80%] my-auto bg-[#fefefe] px-4 overflow-y-auto shadow-md rounded-md">
            <div className="flex p-4 mt-2 lg:flex-row sm:flex-col md:flex-row items-center justify-between gap-3 px-5 bg-white xl:w-[100%] rounded-md shadow-md sticky top-0">
              <p className="text-center font-semibold">Select a PDF</p>
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-3 focus:outline-none rounded-2xl shadow-md text-gray-600 border-2 w-[30rem] justify-end flex"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span
                style={{
                  color: "#aaa",
                  fontSize: "28px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => setIsModalPdfOpen(false)}
              >
                &times;
              </span>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 mt-1 mb-6">
              {paginatedMedia.map((media, index) => (
                <div
                key={index}
                className="mt-[1rem] mb-[1rem] mx-auto h-[10rem] w-[19rem] font-semibold px-4 cursor-pointer"
                onClick={() => handleChangeMedia(media.url)}
              >
                <div className="card mb-3 relative cursor-pointer">
                  <iframe
                    src={media.url}
                    title="PDF Preview"
                    className="w-full h-full"
                  ></iframe>
                  <span className="text-sm">{media.title}</span>
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => handleChangeMedia(media.url)}
                  ></div>
                </div>
              </div>              
              ))}
            </div>
            <div className="flex justify-center mt-10">
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
          </div>
        </div>
      )}
    </>
  );
};

export default PdfCoursesModal;
