import { useState } from "react";
import { useNavigate } from "react-router-dom";
function FetchedData({ data }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1603577057026-d2a3e1206a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5pc3NhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "BWM",
    },
    {
      url: "https://images.unsplash.com/photo-1578847945645-05da1befc0c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVuenxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Gwagon",
    },
    {
      url: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG95b3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Toyota Geep",
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/5aac1f6a5cfd796d520a4a7a/1573027028104-4NF7EULN922NKDMEF7KP/Banner+4.jpg?format=1500w",
      title: "Lexus",
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/5aac1f6a5cfd796d520a4a7a/1573034609278-5LFRPM2KH97CZ6340FGA/Mascardi+%2840+of+66%29.jpg?format=1500w",
      title: "Nissan",
    },
  ];

  const clickedCar = (item) => {
    console.log(item);
    navigate("/car-details", { state: {carData: item} });
  };
  return (
    <div className="fetchedData-data" onClick={() => clickedCar(data)}>
      <div>
        <img
          className="fetchedData-image"
          src={slides[currentIndex].url}
          style={{
            width: "100%",
            height: "150px",
          }}
        />
      </div>
      <h5>Brand: {data.brand}</h5>
      <h5>Model: {data.model}</h5>
      <h5>Year: {data.year}</h5>
      <h5>Color: {data.color}</h5>
      <h5>Price: {data.price}</h5>
    </div>
  );
}

export default FetchedData;
