import { useState } from "react";
import Button from "../components/common/Button";
import Carousel from "../components/photos/Carousel";
import AllPhotos from "../components/photos/AllPhotos";
import Modal from "../components/common/Modal";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";
import image9 from "../assets/images/image9.jpg";
import image10 from "../assets/images/image10.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

export default function Photos() {
  const [visibleCount, setVisibleCount] = useState(4);
  const totalImages = images.length;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <main className="flex flex-col flex-grow items-center mt-8 mb-12 font-julee relative mx-4">
        <h1 className="text-center text-7xl md:text-8xl xl:text-9xl font-right bg-gradient-to-t from-gray-500 to-gray-100 bg-clip-text text-transparent mt-8 mb-12">
          Photos
        </h1>
        <Carousel images={images} openModal={openModal} />
        <AllPhotos
          images={images}
          visibleCount={visibleCount}
          openModal={openModal}
        />
        {visibleCount < totalImages && (
          <Button buttonName="Load more" onClick={loadMore} />
        )}
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
