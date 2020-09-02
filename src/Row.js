import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import "./Row.css";
import ReactPlayer from "react-player";
import gameInfo from "./GameInfo";

function Row({ title, fetchUrl }) {
  const [games, setGames] = useState([]);
  const gameInfos = gameInfo(games?.id);

  // A snippet of code which runs on a specific condition
  useEffect(() => {
    //if [] run once when the row loads, and don't un again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setGames(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(games);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {games.map((game) => (
          <div className="row__poster">
            <ReactPlayer
              controls={false}
              width={300}
              height={200}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            ></ReactPlayer>
            <h3>Game Name</h3>
            <p>Realease Date :</p>
            <p>Genres :</p>
            <p>Classement :</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
