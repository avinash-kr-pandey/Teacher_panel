// src/components/FileModal.js
import React from 'react';
import CrossIcon from '../../Assets/Icons/cross-svgrepo-com.svg';

const DetailsContaintModal = ({ modalVisible, modalFile, modalFileType, onClose }) => {
  if (!modalVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2"
        >
          <img
            src={CrossIcon}
            alt="Close Modal"
            className="w-4 h-4 cursor-pointer"
          />
        </button>
        <h2 className="text-lg mb-2">File Details</h2>
        {modalFileType && <p>File Type: {modalFileType}</p>}
        {modalFile && <p>File Name: {modalFile.name}</p>}
        {modalFile && (
          <p>File Size: {Math.round(modalFile.size / 1024)} KB</p>
        )}
      </div>
    </div>
  );
};

export default DetailsContaintModal;
