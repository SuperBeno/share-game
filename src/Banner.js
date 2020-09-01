import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import BannerDescription from "./BannerDescription";
import "./Banner.css";

function Banner() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchMostPopular);
      setGame(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${game?.background_image})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {game?.title || game?.name || game?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <BannerDescription gameID={game?.id}></BannerDescription>
      </div>
      <div className="banner__fadeout"></div>
    </header>
  );
}

export default Banner;
