import React, { useState, useEffect } from "react";

import axios from "./axios";
import requests from "./requests";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header>
      {" "}
      {/* Background img */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
}
