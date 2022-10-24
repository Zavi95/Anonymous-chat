import React, { useState } from "react";
import "./Upload.css";

const Upload = (image) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-div">
      {selectedImage && (
        <div>
          <img
            className="image"
            alt="not fount"
            src={URL.createObjectURL(selectedImage)}
          />

          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <input
        type="file"
        className="button-image"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Upload;
