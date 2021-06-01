import { useState } from "react";

const Input = (props) => {
  // useState
  const [userInput, setUserInput] = useState("");

  // this function ensures that the user can see what he/she types
  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className="wrapper-input">
      <div>
        <h3>Text</h3>
      </div>
      <textarea
        type="text"
        placeholder="Type your text here..."
        value={userInput}
        onChange={changeHandle}
      ></textarea>
    </div>
  );
};

export default Input;
