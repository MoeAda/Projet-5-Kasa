import { useState } from "react";
import logements from "../../data/logement.json";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider">
      <div>
        <div onClick={goToPrevious} className="slider__leftArrow">
          ❰
        </div>
        <div onClick={goToNext} className="slider__rightArrow">
          ❱
        </div>
      </div>
      <div className="slider__dotsContainer">
        {logements.map((pictures, picturesIndex) => (
          <div
            className="slider__dot"
            key={picturesIndex}
            onClick={() => goToSlide(pictureIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
