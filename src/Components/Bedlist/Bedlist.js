import React, { useState, useEffect } from "react";
import axios from "axios";

function Bedlist() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios
      .get("https://api.rootnet.in/covid19-in/hospitals/beds")
      .then(function (response) {
        setData([...data, response.data.data.regional]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="bedList">
      {data.map((item) => {
        return item.map((val) => {
          return (
            <div className="bedList__card">
              {console.log(val)}
              <h2>{val.state}</h2>

              <h2>{val.ruralHospitals}</h2>
              <h2>{val.urbanHospitals}</h2>
            </div>
          );
        });
      })}
    </div>
  );
}

export default Bedlist;
