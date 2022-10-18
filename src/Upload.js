import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-div">
      {selectedImage && (
        <div>
          <img
            className="image"
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Upload;
