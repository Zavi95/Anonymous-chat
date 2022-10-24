import React, { useState } from "react";
import Chatbox from "./Chatbox";
import Upload from "./Upload";
import "./Input.css";

//How to upload local images onClick on ReactJS?

function Input() {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);
  const [image, setImage] = useState([]);

  const BtnClick = (e) => {
    setText(text.concat(<Chatbox message={input} key={text.length} />));
    setInput("");
    e.prevent.default();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const AddImage = () => {
    setImage(image.concat(<Upload image={image} />));
  };

  return (
    <div className="input_div">
      <form className="input-form">
        <input //este es el input usando JS/HTML/React
          className="input"
          type="text"
          placeholder="Post here"
          value={input}
          onChange={handleChange}
        />
        <button type="button" className="input_button" onClick={BtnClick}>
          Post
        </button>
        <button type="button" className="input_button" onClick={AddImage}>
          Image
        </button>
      </form>

      {text}
      {image}

      <br />
    </div>
  );
}

export default Input;
