import React from 'react';

const FileModal = ({ isOpen, onClose, onFileSelect, mediaData, handleMediaSelect, mediaType }) => {
    const handleFileClick = (media) => {
        handleMediaSelect(mediaType, media);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className='flex justify-between pb-4'>
                        <p>Select a {mediaType}:</p>
                        <button onClick={onClose} className="bg-gray-200 rounded z-100">
                            X
                        </button>
                        </div>
                        <div className="flex flex-cols-4 gap-2">
                            {mediaData.map((media, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer"
                                    onClick={() => handleFileClick(media)}
                                >
                                    {mediaType === 'image' ? (
                                        <img src={media.url} alt={media.name} className="w-32 h-32 object-cover" />
                                    ) : (
                                        <video src={media.url} controls className="w-32 h-32 object-cover" />
                                    )}
                                    <p>{media.name}</p>
                                </div>
                            ))}
                        </div>
                       
                    </div>
                </div>
            )}
        </>
    );
};

export default FileModal;
