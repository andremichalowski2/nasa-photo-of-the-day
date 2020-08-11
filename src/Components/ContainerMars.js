import React, { useState, useEffect } from "react";
import axios from "axios";

import CardMars from "./CardMars";

function ContainerMars() {
  const [marsPhotoData, setMarsPhotoData] = useState([]);
  const [parseData, setParseData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=R9G8joY4NDDKWWfSES4qTbUEa010aQ7e7lx8gKbL"
      )
      .then((response) => {
        // console.log(response)
        const marsPhotos = response.data;
        console.log("response", marsPhotos);
        setMarsPhotoData(marsPhotos);
        console.log(marsPhotos.photos[0].img_src);
        setParseData(JSON.parse(marsPhotos));
        console.log(parseData);
        JSON.parse(marsPhotos);
      })
      .catch((err) => console.log("Error 404:", err));
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: "200px" }}>Photos of Mars</h1>
      <CardMars marsPhotos={marsPhotoData} />
    </div>
  );
}
export default ContainerMars;
