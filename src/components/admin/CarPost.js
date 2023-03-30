import { useState } from "react";
function CarPost({ setItems }) {
  const [model, setModel] = useState("");
  const [manufacturingYear, setManufacturingYear] = useState();
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [price, setPrice] = useState();

  const postNewCar = (e) => {
    e.preventDefault();

    const body = {
      model: model,
      manufacturingYear: manufacturingYear,
      transmission: transmission,
      fuelType: fuelType,
      price: price,
    };

    console.log(body);
    setItems((oldItem) => [...oldItem, body]);
  };

  return (
    <div className="createCar">
      <h1>Welcome, let's post some awesome cars</h1>
      <form onSubmit={postNewCar}>
        {/* for model name */}
        <label>Model: </label>
        <input
          value={model}
          type="text"
          onChange={(e) => setModel(e.target.value)}
          placeholder="Type the model of the car here..."
        />

        {/*  for Year Of Manufacture */}
        <label>Year Of Manufacture: </label>
        <input
          value={manufacturingYear}
          type="number"
          onChange={(e) => setManufacturingYear(e.target.value)}
          placeholder="Type the Year Of Manufacture of the car here..."
        />

        {/*  for Transmission */}
        <label>Transmission: </label>
        <input
          type="text"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          placeholder="Type the transimission of the car here..."
        />

        {/*  for Fuel Type */}
        <label>Fuel Type: </label>
        <input
          type="text"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          placeholder="Type the Type of Fuel of the car here..."
        />

        {/*  for Price */}

        <label>Price: </label>
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Type the price of the car here..."
        />

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CarPost;
