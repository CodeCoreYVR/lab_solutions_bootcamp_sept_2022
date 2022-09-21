function SubstitutionCipher(startAlpha, endAlpha) {
	this.startAlpha = startAlpha.split('');
	this.endAlpha = endAlpha.split('');
}

SubstitutionCipher.prototype.encode = function(str) {
	// `encodedStr` is going to keep track of our encoded string as we encode it
	let encodedStr = '';
	// loop over every character within the string we are trying to encode
	for (let char of str) {
		// by default, the encoded chat will be the current character of the string
		// if we can find it in our starting alphabet, then we will actually use the
		// other alphabet to encode it, otherwise we will keep it the same
		// This will be the case for "!" "," "2" and any other special characters that don't
		// appear in the starting alphabet
		let encodedChar = char;
		// try to find the index of the this char to encode in the starting alphabet
		const index = this.startAlpha.indexOf(char);
		// if the character exists in the starting alphabet, then `index` will be some number
		// between 0 and startingAlphabet.length - 1.
		// If the character is not within the alphabet, then `index` will be -1, signifying
		// that it could not be found
		if (index !== -1) {
			// We found the character, so we should encode it!
			encodedChar = this.endAlpha[index];
		}
		// let's add this encoded character to our encoded string
		encodedStr += encodedChar;
	}
	// At the end of the loop, encodedStr will be our entire encoded string
	return encodedStr;
};


// Encode => startAlpha to endAlpha
// Decode => endAlpha to startAlpha

SubstitutionCipher.prototype.decode = function(str) {
	let decodedStr = '';
	for (let char of str) {
		let decodedChar = char;
		const index = this.endAlpha.indexOf(char);
		if (index !== -1) {
			decodedChar = this.startAlpha[index];
		}
		decodedStr += decodedChar;
	}
	return decodedStr;
};

let abc1 = 'abcdefghijklmnopqrstuvwxyz';
let abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

const sub = new SubstitutionCipher(abc1, abc2);

// Stretch
class SubstitutionCipherClass {
	constructor(startAlpha, endAlpha) {
		this.startAlpha = startAlpha.split('');
		this.endAlpha = endAlpha.split('');
	}

	encode(str) {
		let encodedStr = '';
		for (let char of str) {
			let encodedChar = char;
			const index = this.startAlpha.indexOf(char);
			if (index !== -1) {
				encodedChar = this.endAlpha[index];
			}
			encodedStr += encodedChar;
		}
		return encodedStr;
	}

	decode(str) {
		let decodedStr = '';
		for (let char of str) {
			let decodedChar = char;
			const index = this.endAlpha.indexOf(char);
			if (index !== -1) {
				decodedChar = this.startAlpha[index];
			}
			decodedStr += decodedChar;
		}
		return decodedStr;
	}
}

const sub2 = new SubstitutionCipherClass(abc1, abc2);

const encodedStr = sub.encode("hello world");
console.log(encodedStr);
const decodedStr = sub.decode(encodedStr);
console.log(decodedStr)
/*
	solution that cuts down on code repetition by usinga  helper function.
	it is quite a bit more advanced, but take a look and see if you can 
	understand parts of this code

	function SubstitutionCipher(startAlpha, endAlpha) {
		this.startAlpha = startAlpha.split('');
		this.endAlpha = endAlpha.split('');
	}

	function helper(code, startAlpha, endAlpha) {
		return code
			.split('')
			.map(char => {
				return startAlpha.indexOf(char) === -1 // did not find letter?
					? char
					: endAlpha[startAlpha.indexOf(char)];
			})
			.join('');
	}

	SubstitutionCipher.prototype.encode = function(str) {
		return helper(str, this.startAlpha, this.endAlpha);
	};

	SubstitutionCipher.prototype.decode = function(str) {
		return helper(str, this.endAlpha, this.startAlpha);
	};

*/
