function romanNumerals(num) {
    let result = "";
    let k = Math.floor(num / 1000);
    let h = Math.floor((num % 1000) / 100);
    let t = Math.floor((num % 100) / 10);
    let o = num % 10;
    let one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let thousands = 'M';
    for (let index = 0; index < k; index++) {
        result += thousands;
    }
    if (h) result += hundred[h - 1];
    if (t) result += ten[t - 1];
    if (o) result += one[o - 1];
    return result;
}
console.log(romanNumerals(1));
console.log(romanNumerals(2));
console.log(romanNumerals(3));
console.log(romanNumerals(11));
console.log(romanNumerals(15));
console.log(romanNumerals(19));
console.log(romanNumerals(22));
console.log(romanNumerals(99));
console.log(romanNumerals(150));
console.log(romanNumerals(999));
console.log(romanNumerals(1798));
console.log(romanNumerals(3000));
