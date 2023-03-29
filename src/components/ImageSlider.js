import { useState } from "react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50px)",
    left: "32px",
    fontSize: "45px",
    zIndex: 1,
    color: "white",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50px)",
    right: "32px",
    fontSize: "45px",
    zIndex: 1,
    color: "white",
  };

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const index = isFirst ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(index);
  };

  const goToNext = () => {
    const isFirst = currentIndex === slides.length - 1;
    const index = isFirst ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div style={sliderStyle}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <span
          style={{
            color: "red",
            fontSize: "3rem",
            cursor: "pointer",
          }}
        >
          &#8672;
        </span>
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        <span
          style={{
            color: "red",
            fontSize: "3rem",
            cursor: "pointer",
          }}
        >
          &#8674;
        </span>
      </div>
      <div style={slideStyles}></div>
    </div>
  );
}

export default ImageSlider;
