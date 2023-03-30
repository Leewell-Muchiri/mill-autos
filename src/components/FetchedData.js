function FetchedData({ data }) {
  return (
    <div className="fetchedData-data">
      <div className="fetchedData-image">
        <h1>Fetched Data</h1>
      </div>
      <h5>Brand: {data.brand}</h5>
      <h5>Model: {data.model}</h5>
      <h5>Year: {data.year}</h5>
      <h5>Color: {data.color}</h5>
      <h5>Price: {data.price}</h5>

      <button
        className="buy-button"
        style={{
          backgroundColor: data.color,
          color: "white",
          border: "none",
          padding: "10px",
          margin: "10px",
          transition: "transform 0.5s",
        }}
      >
        Buy
      </button>
    </div>
  );
}

export default FetchedData;
