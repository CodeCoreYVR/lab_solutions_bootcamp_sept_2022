// Get the href attribute of the first link on the page.
document.querySelector('a').href
document.querySelector('#logo a').getAttribute('href')
document.querySelector("a").getAttribute("href");

// Get the number of links on this page.
document.querySelectorAll('a').length

// Change the text for all links to be your name.
document.querySelectorAll('a').forEach(link => {
  link.innerText = "Your Mom"
})

// also

const changeLinksToName = document.querySelectorAll('a');
changeLinksToName.forEach((link) => {
  link.innerText = 'Kermit the frog 🐸'
})


// also again
document.querySelectorAll("a").forEach((node) => {
  node.innerHTML = "Insert Your Name";
});

// Make Craigslist's logo link to http://www.google.com
document
  .querySelector("#logo a")
  .setAttribute("href", "https://www.google.com");

// Make of all the text use the Papyrus font.

document.querySelectorAll('body').forEach(element => {
  element.style.fontFamily = 'papyrus'
})
// or
document.body.style.fontFamily = "Papyrus";

// Make the event calendar alternate the background colour of each day square like a chess board.
count = 0;
document.querySelectorAll("td").forEach((node) => {
  if (count % 2 == 0) {
    node.style.backgroundColor = "palegreen";
    count += 1;
  } else {
    node.style.backgroundColor = "salmon";
    count += 1;
  }
});

// Remove all p and a nodes that contain the substring "es"

const itContains = document.querySelectorAll('p, a');

itContains.forEach((el) => {
  if (el.innerText.includes('es')) {
    el.innerText = ''
  }
})

// also
document.querySelectorAll("p, a").forEach((node) => {
  if (node.innerText.includes("es")) {
    let parent = node.parentElement;
    parent.remove(node);
  }
});

// also (with no parameter)
const pAndA = document.querySelectorAll("p, a")
pAndA.forEach(element => {
  if (element.innerText.includes("es")) {
    element.remove()
  }
});
