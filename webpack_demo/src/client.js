// src/client.js
import React from 'react';
import ReactDOM from 'react-dom';

import myImage from "./images/sun.jpg";
import mainCss from "./styles/main.css";
// make sure to add image directory inside src directory with an image to load it above

console.log(myImage);

// document.addEventListener("DOMContentLoaded", () => {
//   const img = document.createElement("img");
//   img.src = myImage;

//   document.querySelector("body").append(img);
// });

const App = () => {
  return (
    <main>
      <h1 style={{ fontFamily: "sans-serif" }}>Here's a picture!</h1>
      <img
        src={myImage}
        alt="Many Cats Many Arms"
        style={{
          borderRadius: "20px",
          filter: "blur(0px) sepia(1) hue-rotate(50deg)",
          height: "400px"
        }}
      />
    </main>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  document.body.append(root);

  ReactDOM.render(<App />, root);
});