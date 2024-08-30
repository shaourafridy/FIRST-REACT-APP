import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpText = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };

  const handleLoText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };

  const clearText = () => {
    setText('');
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  // Determine text and background color based on the selected theme
  let themeBackgroundColor;
  let themeTextColor;

  // Check for different theme names and set styles accordingly
  switch (props.theme) {
    case 'navbar-dark bg-dark':
      themeBackgroundColor = 'black';
      themeTextColor = 'white';
      break;
    case 'navbar-dark bg-success':
      themeBackgroundColor = '#28a745'; // Bootstrap success color
      themeTextColor = 'white';
      break;
    case 'navbar-dark bg-warning':
      themeBackgroundColor = '#ffc107'; // Bootstrap warning color
      themeTextColor = 'black';
      break;
    case 'navbar-dark bg-primary':
      themeBackgroundColor = '#007bff'; // Bootstrap primary color
      themeTextColor = 'white';
      break;
    case 'navbar-dark bg-danger':
      themeBackgroundColor = '#dc3545'; // Bootstrap danger color
      themeTextColor = 'white';
      break;
    default:
      themeBackgroundColor = 'white';
      themeTextColor = 'black';
  }

  // Determine button style based on the selected theme
  let buttonStyle;
  switch (props.theme) {
    case 'navbar-dark bg-dark':
      buttonStyle = { backgroundColor: 'blue', color: 'white' };
      break;
    case 'navbar-dark bg-success':
      buttonStyle = { backgroundColor: 'purple', color: 'white' };
      break;
    case 'navbar-dark bg-warning':
      buttonStyle = { backgroundColor: 'white', color: 'black' };
      break;
    case 'navbar-dark bg-primary':
      buttonStyle = { backgroundColor: 'green', color: 'white' };
      break;
    case 'navbar-dark bg-danger':
      buttonStyle = { backgroundColor: 'orange', color: 'white' };
      break;
    default:
      buttonStyle = { backgroundColor: 'blue', color: 'white' }; // Default button style
  }

  return (
    <>
      <div className="container" style={{ color: themeTextColor }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="box"
            rows="10"
            style={{ backgroundColor: themeBackgroundColor, color: themeTextColor }} // Apply dynamic styles
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpText}
          style={buttonStyle}
          className="btn mx-2"
        >
          Convert To UpperCase
        </button>
        <button
          type="button"
          onClick={handleLoText}
          style={buttonStyle}
          className="btn mx-2"
        >
          Convert To LowerCase
        </button>
        <button
          type="button"
          onClick={clearText}
          style={buttonStyle}
          className="btn mx-2"
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: themeTextColor }}>
        <h1>YOUR TEXT SUMMARY</h1>
        <p>{text.split(' ').filter(word => word !== '').length} Words & {text.length} Characters In Your Text</p>
        <p>{0.008 * text.split(' ').filter(word => word !== '').length} Minutes to read this text</p>
        <h2>TEXT PREVIEW</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
