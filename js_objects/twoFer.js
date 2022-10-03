function twoFer(name) {
    if (name === undefined || name.length <= 0) {
        name = 'you';
    }
    return `One for ${name}, one for me`;
}

console.log(twoFer("Alice"));
console.log(twoFer(""));
console.log(twoFer("Bob"));
