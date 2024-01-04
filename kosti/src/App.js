import React, { useState } from "react";
import Kosti from "./components/Kosti";

function App() {
  const images = [
    "/images/dice 1.jpg",
    "/images/dice 2.jpg",
    "/images/dice 3.jpg",
    "/images/dice 4.jpg",
    "/images/dice 5.jpg",
    "/images/dice 6.jpg"
  ];

  const [randomNumber, setRandomNumber] = useState(null);

  function re() {
    const newRandomNumber = Math.floor(Math.random() * 6);
    console.log(images[newRandomNumber]);
    setRandomNumber(newRandomNumber);
  }

  return <Kosti images={images} randomNumber={randomNumber} re={re} />;
}

export default App;