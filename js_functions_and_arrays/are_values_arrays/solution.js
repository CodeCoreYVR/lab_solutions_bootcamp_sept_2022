function areValuesArrays(array) {
	// ["a","b","c","d"]
	// array[i]
	for (let element of array) {
		if (!Array.isArray(element)) {
			// if we find an element which isn't an array,
			// we can return false immediately and stop the function
			// There is no need to continue looping
			return false;
		}
	}
	// if we get to the end of the array, then we must not have found a non-Array
	// element, so we will return true by default
	return true;
}

areValuesArrays([[1], [2], [4, 5]]); // returns true
areValuesArrays([1, [2], [6, 7, 8]]); // returns false
areValuesArrays(['true', 'false']); // returns false
console.log(areValuesArrays([[1], 'false'])); // returns false
