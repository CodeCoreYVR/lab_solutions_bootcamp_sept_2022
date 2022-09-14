const log = console.log;
// storing the console.long function in another variable called `log`
// So that later I can console.log by calling my log function
// This is done sole·ly to save me time so that I don't have to type `console.`
// each time I want to log something to the console

function clone(obj) {
	let clonedObj = {};

	for (let property in obj) {
		clonedObj[property] = obj[property];
	}
	return clonedObj;
}

log('Output:');

let objA = { a: 1, b: 2 };
let objB = objA;

log('objA === objB ->', objA === objB);
log('clone(objA) ->', clone(objA));
log('objA === clone(objA) ->', objA === clone(objA));
