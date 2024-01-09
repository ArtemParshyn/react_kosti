import React, { useState } from "react";
import Dice from "./components/Dice";

function App() {
  const images = [
    "/images/dice 1.jpg",
    "/images/dice 2.jpg",
    "/images/dice 3.jpg",
    "/images/dice 4.jpg",
    "/images/dice 5.jpg",
    "/images/dice 6.jpg"
  ];

  const [randomNumber, setRandomNumber] = useState(1);


  function handleClick() {
  setRandomNumber(prevRandomNumber => {
    const newRandomNumber = Math.floor(Math.random() * 6);
    console.log(images[newRandomNumber]);
    return newRandomNumber;
  });
}

  return <Dice images={images} randomNumber={randomNumber} handleClick={handleClick} />;
}

export default App;