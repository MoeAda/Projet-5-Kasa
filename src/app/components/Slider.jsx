import { useState } from "react";

const ImageSlider = ({ pictures, title }) => {
  const length = pictures.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePreviewClick() {
    const newIndex = (currentIndex - 1 + length) % length;
    setCurrentIndex(newIndex);
  }

  function handleForwardClick() {
    const newIndex = (currentIndex + 1) % length;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="slider">
      {length > 1 && (
        <>
          <div onClick={handlePreviewClick} className="slider__arrow arrowLeft">❰</div>
          <div className="slider__wrapper">
          {pictures.map((picture, index) => (
            <img
            key={index}
            src={picture}
            alt={`${title} ${index + 1}`}
            className={`slider__img ${index === currentIndex ? "active" : ""}`}
            />
          ))}
          </div>
          <div onClick={handleForwardClick} className="slider__arrow arrowRight">❱</div>
          <div className="slider__container">
          <span className="slider__counter">{currentIndex + 1} / {length}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;