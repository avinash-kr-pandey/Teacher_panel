// FileModal.jsx
import React from 'react';

const FileModal = ({ isOpen, onClose, onFileSelect }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        onFileSelect(file);
        onClose()
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>Select a file:</p>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FileModal;
