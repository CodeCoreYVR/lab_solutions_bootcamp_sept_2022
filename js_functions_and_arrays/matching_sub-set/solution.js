function matchingSet(arr1, arr2) {
	const obj = {};
	const matchArr = [];
	for (let val of arr1) {
		obj[val] = true;
	}
	for (let val of arr2) {
		if (obj[val]) matchArr.push(val);
	}
	return matchArr;
}
