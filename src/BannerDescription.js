import React from "react";
import gameInfo from "./GameInfo";

function BannerDescription(props) {
  const gameInfos = gameInfo(props);
  const reactStringReplace = require("react-string-replace");

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  //replace all html tags from description
  function replace(str1) {
    var body = str1;
    var temp = document.createElement("div");
    temp.innerHTML = body;
    var sanitized = temp.textContent || temp.innerText;
    return sanitized;
  }

  return (
    <div className="banner__description">
      <h1>{truncate(replace(gameInfos.description), 200)}</h1>
    </div>
  );
}

export default BannerDescription;
