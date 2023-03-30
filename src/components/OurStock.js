// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import FetchedData from "./FetchedData";

function OurStock() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Navbar />

      <div className="fetchedData">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <FetchedData data={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OurStock;
