const sentence = process.argv[2];
const num = parseInt(process.argv[3]);
let arr = sentence.split(' ');
let i = 0;
if (!num) {
    arr.forEach(element => {
        if (!(element.indexOf('.') > -1)) {
            console.log(" ".repeat(i * 2) + element);
            i++;
        }
        else {
            console.log(" ".repeat(i * 2) + element.replace('.', ''));
            i = 0;
        }
    });
}
else {
    arr.forEach(element => {
        if (!(element.indexOf('.') > -1)) {
            if (i == 0 || i == 1) {
                console.log(" ".repeat(i * 5) + element);
            }
            else {
                console.log("     " + "|    ".repeat(i - 1) + element);
            }
            i++;
        }
        else {
            console.log("     " + "|    ".repeat(i - 1) + element.replace('.', ''));
            i = 0;
        }
    });
}