// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import FetchedData from "./FetchedData";

/*
  useEffect(() => {
    if (searchedData !== "") {
      let filteredData = data.filter((item) => {
        return item.brand.toLowerCase().includes(searchedData);
      });
      setSearchedData(filteredData);
      console.log("works");
    } else {
      setSearchedData(data);
      console.log("not working");
    }
  }, []);
*/
function OurStock() {
  // const [searchedData, setSearchedData] = useState("");
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/cars")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // return (
  //   <div>
  //     <Navbar />

  //     <div className="fetchedData">
  //       <div>
  //         <label>
  //           Search:{" "}
  //           <input
  //             type="text"
  //             value={searchedData}
  //             onChange={(e) => {
  //               setSearchedData(e.target.value);
  //             }}
  //             style={{
  //               border: "ipx solid black",
  //               background: "blue",
  //             }}
  //           />
  //         </label>
  //       </div>
  //       {data
  //         ? data.map((item, index) => {
  //             return (
  //               <div key={index}>
  //                 <FetchedData data={item} />
  //               </div>
  //             );
  //           })
  //         : ""}
  //     </div>
  //   </div>
  // );
  const [searchedData, setSearchedData] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredData = data.filter((item) => {
    return (
      item.brand.toLowerCase().includes(searchedData.toLowerCase()) ||
      item.model.toLowerCase().includes(searchedData.toLowerCase())
    );
  });

  return (
    <div>
      <Navbar />

      <div className="fetchedData">
        <div>
          <label>
            Search:{" "}
            <input
              type="text"
              value={searchedData}
              onChange={(e) => {
                setSearchedData(e.target.value);
              }}
              style={{
                border: "ipx solid black",
                background: "blue",
              }}
            />
          </label>
        </div>
        {filteredData.map((item, index) => {
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
