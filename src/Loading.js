import React from "react";
import loadingGif from "./components/loading-arrow.gif";

function Loading() {
  return (
    <div className="loading">
      <h4>Loading...</h4>
      <img src={loadingGif} alt="Loading Gif" />
    </div>
  );
}

export default Loading;
