import React from 'react';
import SimpleHeader from '../layouts/SimpleHeader';
import Image from 'next/image';

interface ModalProps {
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    const photos = new Array(9).fill('https://via.placeholder.com/150');
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full h-full overflow-auto">
                <SimpleHeader title="포토 전체(3333)" onClick={closeModal} />
                <div className="flex flex-wrap pt-[15px] px-5">
                    {photos.map((photo, index) => (
                        <Image key={index} src={photo} alt={`사진 ${index + 1}`} className="w-1/3 pt-2 px-1" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;