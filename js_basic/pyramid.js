const rowsNumber = parseInt(process.argv[2]);
for (i = 0; i < rowsNumber; i++) {

    let spaces = rowsNumber - 2 - i;
    if (spaces >= 0) {
        console.log(" ".repeat(spaces) + " #".repeat(i + 1));
    }
    else {
        console.log("#" + " #".repeat(i));
    }
}