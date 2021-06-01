import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Input />
      <Output />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
