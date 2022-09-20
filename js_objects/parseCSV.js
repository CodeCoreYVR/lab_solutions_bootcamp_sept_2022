function parseCSV(csvData) {
    const arr = csvData.split('\n');
    let columnNameArray = [];
    let x = 0;
    let resultArray = [];
    if (arr[0] !== '') {
        columnNameArray = arr[0].split(',');
    } else {
        columnNameArray = arr[1].split(',');
        x = 1;
    }
    for (let i = x + 1; i < arr.length; i++) {
        const dataArr = arr[i].split(',');
        const obj = {};
        for (let j = 0; j < dataArr.length; j++) {
            obj[columnNameArray[j]] = dataArr[j];
        }
        resultArray.push(obj);
    }
    return resultArray;
}

function search(users, name) {
    for (const item of users) {
        if (name === item.firstName || name === item.lastName) {
            return item;
        }
    }
    return users[0];
}

let csvData = `
id,firstName,lastName,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com`
//console.log(csvData.split('\n') );
console.log(parseCSV(csvData));
console.log(search(parseCSV(csvData), 'romanov'));
console.log(search(parseCSV(csvData), 'peter'));
