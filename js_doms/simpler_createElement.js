// Create a function, H, that takes a tagName as argument
// and returns a new node of tagName type.
function H(tagName) {
  return document.createElement(tagName);
}

// Add support for another argument to pass it html attributes as a plain old object

function H(tagName, attributes) {
  let node = document.createElement(tagName);
  for (let key in attributes) {
    node.setAttribute(key, attributes[key]);
  }
  return node;
}

H("a", { id: "someId", class: "file input", href: "https://www.google.com" });

// Add support for a third argument to add text content to the created node.

function H(tagName, attributes, text) {
  let node = document.createElement(tagName);
  for (let key in attributes) {
    node.setAttribute(key, attributes[key]);
  }
  node.innerText = text;
  return node;
}

H(
  "a",
  { id: "someId", class: "file input", href: "https://www.google.com" },
  "click me"
);
