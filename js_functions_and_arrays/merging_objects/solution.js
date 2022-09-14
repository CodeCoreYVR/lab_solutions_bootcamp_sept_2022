function merge(objA, objB) {
	let objC = {};
	for (let i in objA) {
		objC[i] = objA[i];
	}
	// the attributes of objB overwrite objA as they should
	for (let x in objB) {
		objC[x] = objB[x];
	}
	return objC;
}

merge({ c: 1, b: 2, c: 4 }, { c: 3, d: 4 }); // returns { c: 3, b: 2, d: 4 }
