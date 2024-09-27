export default function AllPhotos({ visibleCount, images }) {
  const visibleImages = images.slice(0, visibleCount);
  return (
    <>
      <h2 className="my-8 text-3xl sm:text-4xl font-bold text-white">
        All photos
      </h2>
      <div className="w-full 2xl:w-3/4 flex flex-wrap justify-center mb-10">
        {visibleImages.map((img, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="w-full h-80 overflow-hidden bg-gray-200">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
