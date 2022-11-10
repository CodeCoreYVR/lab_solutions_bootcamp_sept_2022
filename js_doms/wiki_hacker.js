// Change the title of the article to your name.

// example 1
let title = document.querySelector(".mw-page-title-main")
title.innerText = "Insert Your Name"

// example 2
document.getElementById("firstHeading").innerHTML = "Insert Your Name";

// example 3
document.querySelector("#firstHeading").innerHTML = "Insert Your Name";

/////////

// Hide the body of the article

// example 1 (doesn't hide, but removes)
const body = document.querySelector("#bodyContent")
const text = body.querySelectorAll("p")
for (let node of text) {
  node.remove()
}

// example 2
document.getElementById("mw-content-text").style.display = "none"; // changes display property

// example 3
const bodyContent = document.querySelector("#bodyContent")
bodyContent.style.display = "none"

// example 4
let body = document.getElementById('bodyContent');
body.innerHTML = "";

// example 5
document.getElementById("mw-content-text").style.visibility = "hidden";

///////////

//Replace the Wikipedia logo with another picture

// example 1
const logo = document.getElementsByClassName("mw-wiki-logo")[0]; // returns an array of elements with the class `mw-wiki-logo`.
const logo = document.querySelector('.mw-wiki-logo'); // also works
logo.style.backgroundImage = "url('https://media2.giphy.com/media/gKIyqq4JESg4p3RW8V/giphy.gif?cid=bb5a1c3arywz0mv36ywmdhvszcsgsrx9c4us0ksl9mex9job&rid=giphy.gif&ct=g')";

// Replace the Wikipedia logo with another picture (for logo in navbar if there's no picture logo)
const logo = document.getElementsByClassName("branding-box")[0]; // returns an array of elements with the class `branding-box`.
logo.getElementsByTagName("img")[0].src = "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" // replace's url's string with different url

//Replace the word "pug" in every p tag with "spud".

let paragraphs = document.getElementsByTagName("p");
// or
let paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
  const pText = p.innerText;
  const newText = pText
    .split(" ")
    .map((word) => {
      if (word === "pug") {
        return "spud";
      } else {
        return word;
      }
    })
    .join(" ");
  p.innerText = newText;
}

// or this other way
for (let p of paragraphs) {
  const pText = p.innerText;
  const newText = pText.split("pug").join("spud");
  p.innerText = newText;
}

// Code for when capital letters and plural of "pug" is taken into account

let paragraphs = document.getElementsByTagName("p");
// or
// let paragraphs = document.querySelectorAll('p');

for (let p of paragraphs) {
  const pText = p.innerText;
  const newText = pText
    .split(" ") // split word at space and puts each word into a seperate item in array
    .map((word) => {
      if (word === "pug") {
        return "spud";
      } else if (word === "Pug") {
        return "Spud";
      } else if (word === "pugs") {
        return "spuds";
      } else if (word === "Pugs") {
        return "Spuds"
      } else if (word === "pugs'") {
        return "spuds'"
      } else if (word === "Pugs'") {
        return "Spuds'"
      } else {
        return word
      }
    })
    .join(" "); // rejoins the array into a paragraph, putting the spaces back in
  p.innerText = newText;
}

