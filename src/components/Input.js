import React, { useState } from "react";
import Data from "../data.json";

const Input = (props) => {
  const [translate, setTranslate] = useState("");
  const [userInput, setUserInput] = useState("");

  // this function ensures that the user can see what he/she types
  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  function codeThatText(e) {
    e.preventDefault();
    let morseText = "";
    userInput.split("").forEach((chr) => {
      morseText += " " + Data[chr.toLowerCase()];
    });
    setTranslate(morseText);
  }

  console.log(translate);

  return (
    <div className="wrapper-input">
      <div>
        <h3>Text</h3>
      </div>
      <textarea
        type="text"
        placeholder="Type your text here..."
        onKeyUp={codeThatText}
        onChange={changeHandle}
      ></textarea>
    </div>
  );
};

export default Input;
