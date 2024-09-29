export default function Modal({ isOpen, onClose, imgSrc }) {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="relative bg-white p-4 rounded-md mx-5">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl font-bold"
        >
          &times;
        </button>
        <img
          src={imgSrc}
          alt="Modal"
          className="w-full h-auto max-w-[320px] sm:max-w-[640px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1280px] sm:max-h-[480px] lg:max-h-[600px] xl:max-h-[768px] object-cover"
        />
      </div>
    </div>
  );
}
