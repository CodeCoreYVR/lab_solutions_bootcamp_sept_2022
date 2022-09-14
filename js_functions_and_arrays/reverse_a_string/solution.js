// solution using a loop
function reverse(str) {
  let word = '';
  for (let i = 1; i <= str.length; i++) {
    word += str[str.length - i];
  }
  return word;
}

// solution using string and array methods
function reverse(string) {
  return string.split('').reverse().join('');
}
