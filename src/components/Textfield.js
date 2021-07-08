import React, { useState } from "react";
import Data from "../data.json";

const Textfield = () => {
  const [translate, setTranslate] = useState("");
  const [userInput, setUserInput] = useState("");

  // this function ensures that the user can see what he/she types
  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  // function for converting text to code
  function codeThatText(e) {
    e.preventDefault();
    let morseText = "";
    userInput.split("").forEach((chr) => {
      morseText += " " + Data[chr.toLowerCase()];
    });
    setTranslate(morseText);
  }

  return (
    <React.Fragment>
      {/* input text field */}
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

      {/* output morse-code */}
      <div className="wrapper-output">
        <div>
          <h3>Morse Code</h3>
        </div>
        <textarea
          value={translate}
          placeholder="Converted text to Morse Code..."
          readOnly
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default Textfield;
