// constructor function
function Vector(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}

// Adding methods to the prototype
Vector.prototype.plus = function(vector) {
	return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
};

Vector.prototype.minus = function(vector) {
	return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
};

/*
  magnitude (or length) of the vector
  some mathematician/genius figured this out years ago and we are just using
  their formula here (remembering the formula is NOT important)
*/
Vector.prototype.magnitude = function() {
	return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
};

// Class Version
class VectorClass {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	plus(vector) {
		return new VectorClass(this.x + vector.x, this.y + vector.y, this.z + vector.z);
	}

	minus(vector) {
		return new VectorClass(this.x - vector.x, this.y - vector.y, this.z - vector.z);
	}

	magnitude() {
		return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
	}
}
