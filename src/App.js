import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import Footer from "./components/Footer";
import Data from "./data.json";

function App() {
  // useState
  const [input, setInput] = useState([]);
  console.log(Data);

  return (
    <React.Fragment>
      <Header />
      <Input setInput={setInput} />
      <Output input={input} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
