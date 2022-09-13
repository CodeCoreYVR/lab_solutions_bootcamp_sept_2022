const evenletters = process.argv[2]
let word = " "

for (let i = 0; i < evenletters.length; i++) {
    if (i % 2 !== 0){
       word+= evenletters[i].toUpperCase();
    } else {
        word+= evenletters[i].toLowerCase();
    }
    
} 
console.log(word)