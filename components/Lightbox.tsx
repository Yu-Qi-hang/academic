// components/Lightbox.tsx
import React from 'react';
import Modal from 'react-modal';

interface LightboxProps {
  isOpen: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, src, alt = '', onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/90 z-[1000]"
      overlayClassName="fixed inset-0 bg-transparent"
      contentLabel="Image Lightbox"
    >
      <div className="relative max-w-[95vw] max-h-[95vh]">
        <img 
          src={src} 
          alt={alt}
          className="max-w-full max-h-full object-contain cursor-pointer"
          onClick={onClose}
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </Modal>
  );
};

export default Lightbox;