import React from "react";
import "./kosti.css";

export default function Kosti({ images, randomNumber, re }) {
  randomNumber = Math.floor(Math.random() * 6);
  return (
    <div className="Kosti_div">
      <div className="Vivod_kosti">
        <img
          className="Kosti_photo"
          id="Kosti_photo"
          src={images[randomNumber]}
          alt="Random Dice"
        />
      </div>
      <div>
        <button onClick={re} className="re">
          One more time
        </button>
      </div>
    </div>
  );
}
