import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Carousel({ images }) {
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  const displayedImages = [
    images[currentIndex % totalImages],
    images[(currentIndex + 1) % totalImages],
    images[(currentIndex + 2) % totalImages],
  ];

  return (
    <article className="flex justify-center items-center w-full mb-6">
      <FontAwesomeIcon
        icon="chevron-left"
        className="cursor-pointer text-4xl sm:text-5xl mr-5 text-white"
        onClick={handlePrevClick}
      />
      <div className="flex w-[75%] justify-center gap-10 lg:gap-20 xl:gap-0 xl:justify-between 2xl:justify-around">
        {displayedImages.map((img, index) => (
          <div
            key={index}
            className={`${index === 2 ? "hidden xl:block" : ""} ${
              index === 1 ? "hidden md:block" : ""
            } w-full md:w-[50%] xl:w-[30%] 2xl:w-[25%] h-80 overflow-hidden flex items-center justify-center bg-gray-200 select-none`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        ))}
      </div>
      <FontAwesomeIcon
        icon="chevron-right"
        className="cursor-pointer text-4xl sm:text-5xl ml-5 text-white"
        onClick={handleNextClick}
      />
    </article>
  );
}
