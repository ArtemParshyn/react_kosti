import React from "react";
import "./Dice.css";

export default function Dice({ images, randomNumber, handleClick}) {
  return (
    <div className="dice_div">
      <div className="Vivod_dice">
        <img
          className="dice_photo"
          id="dice_photo"
          src={images[randomNumber]}
          alt="Random Dice"
        />
      </div>
      <div>
        <button onClick={handleClick} className="re">
          One more time
        </button>
      </div>
    </div>
  );
}
