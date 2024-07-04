// Theser.jsx
import React, { useState } from 'react';
import FileModal from './ModalCourses'; 

const Theser = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [previewVideo, setPreviewVideo] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleFileSelect = (file) => {
        const previewFile = {
            url: URL.createObjectURL(file),
            name: file.name
        };
        // Determine whether to set previewImage or previewVideo based on file type
        if (file.type.startsWith('image')) {
            setPreviewImage(previewFile);
        } else if (file.type.startsWith('video')) {
            setPreviewVideo(previewFile);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full text-[14px]">
            <div className="flex flex-col gap-2">
                <p>Preview Image</p>
                <div className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal">
                    {previewImage ? (
                        <a
                            href={previewImage.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {previewImage.name}
                        </a>
                    ) : (
                        <p>Preview Image</p>
                    )}
                </div>
                <button
                    className="px-6 py-[6px] border border-[#808080] rounded-full w-max flex items-center cursor-pointer"
                    onClick={openModal}
                >
                    Choose
                </button>
            </div>
            <div className="flex flex-col gap-2">
                <p>Preview Video</p>
                <div className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal">
                    {previewVideo ? (
                        <a
                            href={previewVideo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {previewVideo.name}
                        </a>
                    ) : (
                        <p>Preview Video</p>
                    )}
                </div>
                <button
                    className="px-6 py-[6px] border border-[#808080] rounded-full w-max flex items-center cursor-pointer"
                    onClick={openModal}
                >
                    Choose
                </button>
            </div>

            {/* Render FileModal */}
            <FileModal isOpen={modalOpen} onClose={closeModal} onFileSelect={handleFileSelect} />
        </div>
    );
};

export default Theser;
