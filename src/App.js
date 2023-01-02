import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // const [color, setColor] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // const toggleColor = () => {
  //   if (color === "Green") {
  //     setColor("green");
  //     document.body.style.backgroundColor = "green";
  //     document.body.color = "white";
  //   }
  //   if (color === "Yellow") {
  //     setColor("green");
  //     document.body.style.backgroundColor = "yellow";
  //     document.body.color = "white";
  //   }
  //   if (color === "Cyan") {
  //     setColor("green");
  //     document.body.style.backgroundColor = "cyan";
  //     document.body.color = "white";
  //   }
  // };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3f474f";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode is On";
      // setInterval(() => {
      //   document.title = "TextUtils - is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install TextUtils";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled!", "success");
      document.title = "TextUtils - is Amazing";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        // toggleColor={toggleColor}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
