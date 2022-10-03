function runLengthEncoding(str) {
    let result = '';
    //check if it has numbers or not
    if (str.replace(/\d+/, '') === str) {
        const obj = {};
        for (const item of str.split('')) {
            obj[item] ? obj[item] += 1 : obj[item] = 1;
        }
        for (const key in obj) {
            if (obj[key] == 1) {
                result += key;
            } else {
                result += obj[key] + key;
            }
        }
    } else {
        let x = 0;
        str = str.split('');
        while (x < str.length) {
            //last one don't have the next to compare
            if (str[x + 1] !== undefined) {
                //debugger;
                if ((!parseInt(str[x])) && parseInt(str[x + 1])) {
                    result += str[x];
                } else if (parseInt(str[x])) {
                    result += str[x + 1].repeat(parseInt(str[x]));
                    x++; //skip the next loop
                }
                //both letters
                else {
                    result += str[x] + str[x + 1];
                    x++; //skip the next loop
                }
            } else {
                result += str[x];
            }
            x++;
        }
    }
    return result;
}
//console.log(runLengthEncoding("AABCCCDEEEE"));
//console.log(runLengthEncoding("2AB3CD4E"));
console.log(runLengthEncoding("A2BC3DFG"));
//console.log((!parseInt('5')));
