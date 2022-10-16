import React from "react";
import "./Chatbox.css";

function Chatbox({ message }) {
  return (
    <div className="chatbox">
      <h1 className="chatbox-text">{message}</h1>
    </div>
  );
}

export default Chatbox;
