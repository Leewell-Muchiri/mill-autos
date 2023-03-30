import CarPost from "./CarPost";
import ViewAllPost from "./ViewAllPost";
import { useState } from "react";
import { Link } from "react-router-dom";

function AdminIndex() {
  const name = "Admin";
  const [changedComponent, setChangedComponent] = useState(null);
  const [items, setItems] = useState([]);


  const createCarPost = () => {
    console.log("createCarPost");
    setChangedComponent(<CarPost setItems={setItems} />);
  };
  return (
    <div className="dashboard">
      <div className="first-dashboard">
        <div className="first-dashboard-child">
          <h1>Hi, {name}</h1>
          <Link to="..">Home</Link>
          <div className="first-dashboard-second">
            <button className="dashboard-button" onClick={createCarPost}>
              Post
            </button>
            <button
              className="dashboard-button"
              style={{
                paddingtop: "500px",
              }}
              onClick={() => {
                setChangedComponent(<ViewAllPost items={items} />);
              }}
            >
              View Posts
            </button>
            {/* <button className="dashboard-button" onClick={createCarPost}>
              View
            </button> */}
          </div>
        </div>
      </div>
      <div className="second-dashboard">
        <h2>Seconds Dashboard</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "12rem",
            height: "100vh",
          }}
        >
          {changedComponent}
        </div>
      </div>
    </div>
  );
}

export default AdminIndex;
