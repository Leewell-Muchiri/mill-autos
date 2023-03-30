function CarPost() {
  const postNewCar = (e) => {
    e.preventDefault();
    console.log("New car posted");
  };
  return (
    <div className="createCar">
      <h1>Welcome, let's post some awesome cars</h1>
      <form onSubmit={postNewCar}>
        {/* for model name */}
        <label>Model: </label>
        <input type="text" placeholder="Type the model of the car here..." />

        {/*  for Year Of Manufacture */}
        <label>Year Of Manufacture: </label>
        <input
          type="number"
          placeholder="Type the Year Of Manufacture of the car here..."
        />

        {/*  for Transmission */}
        <label>Transmission: </label>
        <input
          type="text"
          placeholder="Type the transimission of the car here..."
        />

        {/*  for Fuel Type */}
        <label>Fuel Type: </label>
        <input
          type="text"
          placeholder="Type the Type of Fuel of the car here..."
        />

        {/*  for Price */}

        <label>Price: </label>
        <input type="number" placeholder="Type the price of the car here..." />

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CarPost;
