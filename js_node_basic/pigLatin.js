const previousFile = process.argv[2];
const laterFile = process.argv[3];
const vowel = ['a', 'e', 'i', 'o', 'u'];

let result = '';
const fs = require('fs');
fs.readFile(previousFile, 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file');
    } else {
        console.log(data)
        const arr = data.split('.');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > 0) {
                const subArr = arr[i].trim().split(' ');
                const firsWord = changeToLatin(subArr[0].toLowerCase());
                result += firsWord.substring(0, 1).toUpperCase() + firsWord.substring(1, firsWord.length) + ' ';
                for (let j = 1; j < subArr.length - 1; j++) {
                    result += changeToLatin(subArr[j].toLowerCase()) + ' ';
                }
                result += changeToLatin(subArr[subArr.length - 1].toLowerCase()) + '. ';
            }
        }
        fs.writeFile(laterFile, result, err => {
            console.log('saved to the new file');
        })
    }
});

function changeToLatin(str) {
    if (str.length >= 2) {
        const first = str.substring(0, 1);
        if (vowel.includes(first)) {
            str += 'ay';
        } else {
            const second = str.substring(1, 2);
            str = str.substring(2, str.length);
            if (vowel.includes(second)) {
                str = second + str + first + 'ay';
            } else {
                str += second + first + 'ay';
            }
        }
    } else {
        str += 'way';
    }
    return str;
}