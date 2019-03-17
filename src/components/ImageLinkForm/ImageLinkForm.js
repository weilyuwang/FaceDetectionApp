import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div>
      <p className="f5">
        {"This Magic App will detect faces in your pictures. Git it a try!"}
      </p>
      <p className="f6">
        {"(Paste your image link into the blank below and hit Detect)"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f5 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="f5 grow link ph3 dib bg-light-purple white pv2 w-20"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
