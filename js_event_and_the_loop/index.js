//#region selecting doggos
function removeSelected() {
    const selected = document.querySelector(".doggo.fighter.selected");
    if (selected) {
        selected.className = "doggo fighter";
    }
}

document.querySelectorAll(".team h1").forEach(e => {
    e.addEventListener('click', function (event) {
        const selected = document.querySelector(".doggo.fighter.selected");
        if (selected) {
            this.nextElementSibling.appendChild(selected);
        }
    });
});
document.body.addEventListener('click', event => {
    if (!event.target.closest('.team')) {
        removeSelected();
    }
});
//#endregion

//#region recruting new fighters

document.querySelector('#name').addEventListener('input', event => {
    document.querySelector('.doggo.blank > h1').innerHTML = event.currentTarget.value;
});
document.querySelector('#picture-url').addEventListener('input', event => {
    let url = event.currentTarget.value;
    const doggoBlank = document.querySelector('.doggo.blank');
    if (url.includes(".jpg") || url.includes(".gif") || url.includes(".png")) {
        doggoBlank.style.backgroundImage = `url(${url})`;
    } else {
        doggoBlank.style.backgroundImage = "";
    }
});
document.querySelector('#team-name').addEventListener('input', event => {
    const teamName = event.currentTarget.value.toLowerCase();
    const previewDiv = document.querySelector('#applicant-preview');
    if (teamName == "team salmon") {
        previewDiv.style.border = "solid 5px salmon";
    } else if (teamName == "team teal") {
        previewDiv.style.border = "solid 5px teal";
    } else {
        previewDiv.style.border = "solid 5px gainsboro";
    }
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newDoggo = document.createElement('div');
    newH1 = document.createElement('h1');
    newH1.innerHTML = document.querySelector("#name").value;
    newDoggo.appendChild(newH1);
    newDoggo.id = document.querySelector("#name").value.split(' ').join('-');
    newDoggo.className = "doggo fighter";
    newDoggo.style.backgroundImage = `url(${document.querySelector('#picture-url').value})`;
    if (document.querySelector('#team-name').value.toLowerCase() == "team salmon") {
        document.querySelector('.team.salmon .roster').appendChild(newDoggo);
    } else {
        document.querySelector('.team.teal .roster').appendChild(newDoggo);
    }
});
//#endregion

//#region user friendly shortcuts
document.addEventListener('keydown', (event) => {
    const {
        ctrlKey,
        altKey
    } = event;
    if (event.key == "Backspace") {
        const selected = document.querySelector(".doggo.fighter.selected");
        if (selected) {
            selected.remove();
        }
    }
    if (ctrlKey && event.key >= 0 && event.key <= 9) {
        const salmonLength = document.querySelectorAll(".team.salmon .roster .doggo").length;
        if (salmonLength > event.key) {
            const salmonDoggo = document.querySelector(".team.salmon .roster");
            if (salmonDoggo.children[event.key]) {
                // salmonDoggo.removeChild(salmonDoggo.children[event.key]);
                salmonDoggo.children[event.key].className = "doggo fighter selected"
            }
        } else {
            const tealDoggo = document.querySelector(".team.teal .roster");
            if (tealDoggo.children[event.key - salmonLength]) {
                // tealDoggo.removeChild(tealDoggo.children[event.key - salmonLength]);
                tealDoggo.children[event.key - salmonLength].className = "doggo fighter selected"
            }
        }
    }
    if (altKey && event.key == "ArrowUp") {
        const selected = document.querySelector(".doggo.fighter.selected");
        if (selected && selected.parentNode.parentNode.className.includes("teal")) {
            document.querySelector(".team.salmon .roster").appendChild(selected);
            selected.className = "doggo fighter";
        }
    }
    if (altKey && event.key == "ArrowDown") {
        const selected = document.querySelector(".doggo.fighter.selected");
        if (selected && selected.parentNode.parentNode.className.includes("salmon")) {
            document.querySelector(".team.teal .roster").appendChild(selected);
            selected.className = "doggo fighter";
        }
    }
});
//#endregion

//#region battling doggos (also slecting doggos)
document.querySelectorAll(".doggo.fighter").forEach(e => {
    e.addEventListener('click', function (event) {
        const selected = document.querySelector(".doggo.fighter.selected");
        if (selected) {
            if (this != selected) {
                let sign = prompt(`${selected.id} is picking a fight with ${this.id}. Are you sure?`);
                if (sign.toLowerCase() == "sure") {
                    const winSound = () => new Audio(`sounds/vintage-keyboard-${Math.ceil(Math.random() * 5)}.wav`);
                    selected.className = "doggo fighter";
                    winSound().play();
                    alert(Math.random() * 10 > 5 ? `${selected.id} wins!` : `${this.id} wins!`);
                }
            } else {
                this.className = "doggo fighter";
            }
        } else {
            this.className = "doggo fighter selected";
        }
    });
});
//#endregion
