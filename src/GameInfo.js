import { useState, useEffect } from "react";
import axios from "./axios";

function GameInfo(props) {
  const [game, setGame] = useState([]);
  useEffect(() => {
    async function fetchData(gameId) {
      console.log(gameId);
      const request = await axios.get(`games/${gameId}`);
      setGame(request.data);
      return request;
    }
    fetchData(props.gameID);
  }, [props]);
  return game;
}
export default GameInfo;
