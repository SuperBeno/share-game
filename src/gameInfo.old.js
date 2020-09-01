import axios from "./axios";

async function gameInfo(gameId) {
  console.log(gameId);
  const request = await axios.get(`games/445430`);
  return request.data;
}
gameInfo();

export default gameInfo;
