import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav></Nav>

      <Banner></Banner>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {<Row title="Most Popular" fetchUrl={requests.fetchMostPopular} />}
      {/**<Row title="UpComing" fetchUrl={requests.fetchUpcoming} />}
      {<Row title="Action Movie" fetchUrl={requests.fetchActionMovie} />}
      {<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />*/}
    </div>
  );
}

export default App;
