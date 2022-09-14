// Only need to work with multidimensional arrays that have 2 levels
// e.g. [[2, 3, 4], ['Hello CodeCore', 1, true]]
function printMulti(array) {
	for (let arr of array) {
		for (let val of arr) {
			console.log(val);
		}
	}
}

const myArray = [[2, 3, 4], ['Hello CodeCore', 1, true]];

printMulti(myArray);
