const StringExtras = {
  repeat(str, n) {
    let outputStr = '';
    for (let i = 0; i < n; i++) {
      outputStr += str;
    }
    return outputStr;
		/*
			// Alternate solution:
			return Array(n + 1).join(str);
    */
  },
  leftPad(str, n) {
    if (str.length >= n) {
      return str;
    }
    return `${this.repeat(' ', n - str.length)}${str}`;
  },
  rightPad(str, n) {
    if (str.length >= n) {
      return str;
    }
    return `${str}${this.repeat(' ', n - str.length)}`;
  },
  pad(str, n) {
    const leftPadding = Math.ceil((n - str.length) / 2) + str.length;
    return this.rightPad(this.leftPad(str, leftPadding), n);
  },
  capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  },
};

// STRETCH
const StringExtrasStretch = {
  repeat(n) {
    return Array(n + 1).join(this);
  },
  leftPad(n) {
    if (this.length >= n) {
      return this;
    }
    return `${' '.repeat(n - this.length)}${this}`;
  },
  rightPad(n) {
    if (this.length >= n) {
      return this;
    }
    return `${this}${' '.repeat(n - this.length)}`;
  },
  pad(n) {
    const leftPadding = Math.ceil((n - this.length) / 2) + this.length;
    /*
      The two lines of code below (within this comment) are equivalent to the
      one line of code below (outside of this comment)

        let leftPaddedString = this.leftPad(n);
        return leftPaddedString.rightPad(n);

    */
    return this.leftPad(leftPadding).rightPad(n);
  },
  capitalize() {
    return `${this.charAt(0).toUpperCase()}${this.slice(1)}`;
  },
};

Object.assign(String.prototype, StringExtrasStretch);
