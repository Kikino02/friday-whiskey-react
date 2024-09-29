// components/common/Modal.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Modal({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      id="modal-background"
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="relative bg-white p-4 rounded-md mx-10 flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute -top-1 right-1 text-black text-xl font-bold"
        >
          &times;
        </button>

        <button
          className="absolute -left-6 text-white text-3xl"
          onClick={handlePrevClick}
        >
          <FontAwesomeIcon icon="chevron-left" />
        </button>

        <img
          src={images[currentIndex]} // Use currentIndex to get the current image
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-auto max-w-[320px] sm:max-w-[640px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1280px] object-contain"
        />

        <button
          className="absolute -right-6 text-white text-3xl"
          onClick={handleNextClick}
        >
          <FontAwesomeIcon icon="chevron-right" />
        </button>
      </div>
    </div>
  );
}
