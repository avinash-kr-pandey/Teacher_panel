import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileModal from './ModalCourses'; 
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../../Api/api';

const Theser = ({ onDataUpdate }) => {
    const [previewImage, setPreviewImage] = useState(null);
    const [previewVideo, setPreviewVideo] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); 
    const [mediaData, setMediaData] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [mediaType, setMediaType] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const token = localStorage.getItem('teachertoken'); 
                const response = await axios.get(`${BASE_URL}/getinsmedia`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setIsLoading(false);
                if (response.data.success) {
                    const mediaFiles = response.data.mediaFiles;
                    setMediaData(mediaFiles);
                    setImages(mediaFiles.filter(media => 
                        media.url.endsWith(".jpg") || 
                        media.url.endsWith(".jpeg") || 
                        media.url.endsWith(".png") || 
                        media.url.endsWith(".avif")
                    ));
                    setVideos(mediaFiles.filter(media => 
                        media.url.endsWith(".mp4")
                    ));
                } else {
                    toast.error("Error fetching media.");
                }
            } catch (error) {
                setIsLoading(false);
                toast.error("Error fetching data.");
            }
        };

        fetchData();
    }, []);

    const openModal = (type) => {
        setMediaType(type);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleFileSelect = (file) => {
        const previewFile = {
            url: URL.createObjectURL(file),
            name: file.name
        };

        if (file.type.startsWith('image')) {
            setPreviewImage(previewFile);
            onDataUpdate({ type: 'image', file: previewFile });
        } else if (file.type.startsWith('video')) {
            setPreviewVideo(previewFile);
            onDataUpdate({ type: 'video', file: previewFile });
        }
    };

    const handleMediaSelect = (type, media) => {
        if (type === 'image') {
            setPreviewImage(media);
            onDataUpdate({ type: 'image', file: media });
        } else if (type === 'video') {
            setPreviewVideo(media);
            onDataUpdate({ type: 'video', file: media });
        }
    };

    return (
        <div className="grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full text-[14px]">
            <div className="flex flex-col gap-2">
                <p>Preview Image</p>
                <div className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal">
                    <input 
                        type="text" 
                        value={previewImage ? previewImage.url : ''} 
                        readOnly
                        className="w-full border border-[#808080] px-2 py-1"
                    />
                </div>
                <button
                    className="px-6 py-[6px] border border-[#808080] rounded-full w-max flex items-center cursor-pointer"
                    onClick={() => openModal('image')}
                >
                    Choose
                </button>
            </div>
            <div className="flex flex-col gap-2">
                <p>Preview Video</p>
                <div className="w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal">
                    <input 
                        type="text" 
                        value={previewVideo ? previewVideo.url : ''} 
                        readOnly
                        className="w-full border border-[#808080] px-2 py-1"
                    />
                </div>
                <button
                    className="px-6 py-[6px] border border-[#808080] rounded-full w-max flex items-center cursor-pointer"
                    onClick={() => openModal('video')}
                >
                    Choose
                </button>
            </div>
            <FileModal 
                isOpen={modalOpen} 
                onClose={closeModal} 
                onFileSelect={handleFileSelect} 
                mediaData={mediaType === 'image' ? images : videos}
                handleMediaSelect={handleMediaSelect}
                mediaType={mediaType}
            />
        </div>
    );
};

export default Theser;
