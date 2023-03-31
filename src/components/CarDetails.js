import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CarDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  let data = location?.state?.carData;

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };
  console.log(data);
  return (
    <div>
      <div className="car-details-container">
        <div className="car-details-info">
          <h1>Car Details</h1>
          <button onClick={handleBackClick}>Go Back</button>
          <h2 className="car-details-title">
            {data.brand} {data.model}
          </h2>
          <ul className="car-details-list">
            <li className="car-details-item">Year: {data.year}</li>
            <li className="car-details-item">Color: {data.color}</li>
            <li className="car-details-item">Price: ${data.price}</li>
          </ul>
        </div>
        <div>
          <h1>Contacts</h1>
          <h3
            style={{
              color: "red",
            }}
          >
            Call
          </h3>
          <p>074555556</p>

          <h3 style={{
            color: "red",
          }}>Email</h3>
          <p>Email: kian99564@gmail.com</p>
        </div>
      </div>
    </div>

    // <div>
    //   <h1>Car Details</h1>
    //   <button onClick={handleBackClick}>Go Back</button>
    //   <div className="car-details-container">
    //     <div className="car-details-info">
    //       <p>Works</p>
    //       <h2>
    //         {data.brand} {data.model}
    //       </h2>
    //       <h4>Year: {data.year}</h4>
    //       <h4>Color: {data.color}</h4>
    //       <h4>Price: ${data.price}</h4>
    //     </div>
    //   </div>
    // </div>
  );
}
