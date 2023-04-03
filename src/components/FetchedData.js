import { useState } from "react";
import { useNavigate } from "react-router-dom";
function FetchedData({ data }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const slides = [
    {
      url: `${data.back_left_url}`,
    },
    {
      url: `${data.front_right_url}`,
    },
    {
      url: `${data.interior_url}`,
    },
  ];

  console.log(data.front_right_url);
  const clickedCar = (item) => {
    console.log(item);
    navigate("/car-details", { state: { carData: item } });
  };
  return (
    <>
      <div className="fetchedData-data">
        <div>
          <img
            className="fetchedData-image"
            src={slides[currentIndex].url}
            style={{
              width: "100%",
              height: "150px",
            }}
          />

          <div /*style={leftArrowStyles}*/ onClick={goToPrevious}>
            <span
              style={{
                float: "left",
                color: "red",
                fontSize: "3rem",
                cursor: "pointer",
              }}
            >
              &#8672;
            </span>
          </div>

          <div onClick={goToNext}>
            <span
              style={{
                float: "right",
                color: "red",
                fontSize: "3rem",
                cursor: "pointer",
              }}
            >
              &#8674;
            </span>
          </div>
        </div>
        <div onClick={() => clickedCar(data)}>
          <h5>Model: {data.model}</h5>
          <h5>Fuel Type: {data.fuel_type}</h5>
          <h5>Transmition: {data.transmission}</h5>
          <h5>Price: {data.price}</h5>
        </div>
        {/* <h5>Brand: {data.brand}</h5> */}
      </div>
    </>
  );
}

export default FetchedData;
