function listToArr(obj, arr) {
    if (arr === null || arr === undefined) {
        arr = [];
    }
    if (obj.next !== null) {
        arr.push(obj.value);
        return listToArr(obj.next, arr);
    } else {
        arr.push(obj.value);
        return arr;
    }
}

function arrToList(arr) {
    let obj = {
        'value': arr[arr.length - 1],
        'next': null
    };
    if (arr.length - 1 > 0) {
        for (let index = arr.length - 2; index >= 0; index--) {
            let temp = {};
            temp.value = arr[index];
            temp.next = obj;
            obj = temp;
        }
        return obj;
    } else {
        return obj;
    }
}
console.log(listToArr({
    value: 1,
    next: null
}));
console.log(listToArr({
    value: 'a',
    next: {
        value: 'b',
        next: {
            value: 'c',
            next: null
        }
    }
}));
console.log(arrToList([4]));
console.log(arrToList([4, 3, 2, 1]));
