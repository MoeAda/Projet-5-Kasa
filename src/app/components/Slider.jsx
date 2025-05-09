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
          <div>
            <img src={pictures[currentIndex]} alt={title} className="slider__img"/>
          </div>
          <div onClick={handleForwardClick} className="slider__arrow arrowRight">❱</div>
          <div className="slider__dotcontainer">
            {pictures.map((_, index) => (
              <button
                key={index}
                className={currentIndex === index ? "slider__dot dot-active" : "slider__dot dot-inactive"}
                onClick={() => setCurrentIndex(index)}
              >
                ●
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;