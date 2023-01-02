import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Text changed to " + newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  };

  const handleEmailClick = () => {
    const newText = " akansh@gmail.com";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log(text + " Text Changed");
    setText(event.target.value);
  };

  /// COPY TEXT TO CLIPBOARD
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select(); //select all text
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#3f474f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleEmailClick}
        >
          Extract Email
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summery</h1>
        <p>
          {text.split(" ").length} words and {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>

        <p style={{ display: "flex" }}>
          <span>
            <h5>{`->`}</h5>
          </span>
          {text.length > 0 ? text : "Enter the text in above box to preview !!"}
        </p>
      </div>
    </>
  );
}
