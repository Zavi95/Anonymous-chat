import React, { useState } from "react";
import Chatbox from "./Chatbox";
import "./Input.css";

function Input() {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);

  const BtnClick = (e) => {
    setText(text.concat(<Chatbox message={input} key={text.length} />));
    setInput("");
    e.prevent.default();
  };

  return (
    <div className="input_div">
      <form className="input-form">
        <input //este es el input usando JS/HTML/React
          className="input"
          type="text"
          placeholder="Post here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="button" className="input_button" onClick={BtnClick}>
          Post
        </button>
      </form>

      {text}
    </div>
  );
}

export default Input;
