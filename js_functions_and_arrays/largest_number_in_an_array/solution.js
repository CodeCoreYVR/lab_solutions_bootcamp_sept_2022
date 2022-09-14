function largestNumber(array) {
	// If `array` parameter does not exist/is undefined or falsey
	// i.e. the function was called like this:
	//      largestNumber()
	// Or if the `array` parameter isn't an array
	// e.g. the function was called like this:
	//      largestNumber("hello")
	//      largestNumber(1,2,3,4)
	// Or if the array is empty:
	//      largestNumber([])
	if (!array || !Array.isArray(array) || array.length === 0) {
		// Then return NaN
		return NaN;
	}

	// If the array only has one element in it,
	if (array.length === 1) {
		// then that element is the largest number in that array
		return array[0];
	}

	// Since return statements terminate the running of the program, if code
	// below here runs, we know that the first two if-statements must have been
	// false
	let largest = array[0];
	// Let's loop over the array and compare each element in the array
	// against our current largest number
	// If our new number is larger, then update our current largest to be the
	// this new number
	// This is the for-of loop
	for (let number of array) {
		if (number > largest) {
			largest = number;
		}
	}
	/*
  // This loop is also valid
	for (let i = 1; i < array.length; i++) {
		if (largest < array[i]) {
			largest = array[i];
		}
  }
  */
	return largest;
}

// While we were expecting a solution using a loop, there are other, sneakier
// ways of solving the same problem using `Math.max`!
function largestNumber2(array) {
	return Math.max.apply(Math, array);
}

// Notes on the `...` are below
function largestNumber3(array) {
	return Math.max(...array);
}

// Call all three, and then log the output.
// All of them should return, and then log to the console, the same value
console.log(largestNumber([2, 5, 9, 34, 65, 12, 34, 42, 13]));
console.log(largestNumber2([2, 5, 9, 34, 65, 12, 34, 42, 13]));
console.log(largestNumber3([2, 5, 9, 34, 65, 12, 34, 42, 13]));

/*
  The ... is known as the `Spread Operator` in JS.
  It can be used with both arrays and objects (since arrays are just a special
  case of object).
  The way it works is that it effectively "removes" the outer most brackets
  (or braces for an object), leaving you with a comma separated list of values.

  e.g. 
    ...[1, 2, 3, 4, 5]
  would be become
    1, 2, 3, 4, 5
  
  Now, on its own, a comma separated list of numbers in not valid javascript
  and will break your code.
  However, if you are passing it into a function, for example, the those values
  become the parameters or inputs to that function.

  i.e.
    myFunction(...['a', 'b', 'c'])
  is equivalent to and becomes
    myFunction('a', 'b', 'c')

  As another example, the array method `concat` will join two arrays together
    [1, 2].concat([3, 4])
  would return
    [1, 2, 3, 4]
  
  The same result can be achieved using the following examples:
    [1, 2, ...[3, 4]]
    
    const arr = [3, 4]
    [1, 2, ...arr]

    const arr1 = [1,2]
    const arr2 = [3,4]
    [...arr1, ...arr2]

  Here, we are "spreading" an array into another array in order to copy and
  merge two arrays
*/
