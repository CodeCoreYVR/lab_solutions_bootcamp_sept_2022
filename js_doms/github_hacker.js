// @ https://github.com/rwaldron/johnny-five

// 1. Change the text color of all file name and directory name links to red.
document.querySelectorAll(".Link--primary").forEach((node) => {
  node.setAttribute("style", "color: red !important");
});

document.querySelectorAll(".Link--secondary").forEach((node) => {
  node.setAttribute("style", "color: red !important");
});

// 2. Delete all file and directory icons from the file explorer (the big box below the Clone or download button).

document
  .querySelectorAll(".js-navigation-item svg")
  .forEach((node) => node.remove());

// 3. Clone the johnny five logo (the big yellow square with a robot inside)
// and use it to replace the Github logo at the very top left of the page.
// Also, resize the cloned johnny five logo to be about the same size as the replaced Github logo.

let logoSpot = document.querySelector(".Header-link");
let gitHubCatLogo = logoSpot.querySelector(".Header-link svg");
let johnnyFiveLogo = document.querySelector("#readme img").cloneNode();
johnnyFiveLogo.setAttribute("height", gitHubCatLogo.getAttribute("height"));
johnnyFiveLogo.setAttribute("width", gitHubCatLogo.getAttribute("width"));
logoSpot.replaceChild(johnnyFiveLogo, gitHubCatLogo);

// 4. Replace all topic tags (e.g. javascript, arduino, chip. etc) with the first tag, javascript

let javascriptTag = document.querySelector(".topic-tag");
let parent = javascriptTag.parentNode;

document.querySelectorAll(".topic-tag").forEach((oldNode) => {
  let replacement = javascriptTag.cloneNode(true);
  parent.replaceChild(replacement, oldNode);
});
