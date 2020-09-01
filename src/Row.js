import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import "./Row.css";
//import YouTube from "react-youtube";
//import movieTrailer from "movie-trailer";

//const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [games, setGames] = useState([]);
  //const [trailerUrl, setTrailerUrl] = useState("");

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

  /*const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

    const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
*/
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {games.map((movie) => (
          <img
            key={movie.id}
            //onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${
              isLargeRow ? movie.background_image : movie.background_image
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div> //{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  );
}

export default Row;
