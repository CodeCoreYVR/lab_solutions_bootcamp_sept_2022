const StringExtras = {
    // - repeat method that duplicates a string n of times.
    repeat(word, n) {
        let result = '';
        // 1. loop => word => result => n times => result
        for (let i = 0; i < n; i++) {
            result += word;
        }
        return result;
    },
    // - leftPad method that adds space to the left of a string until the string is of length n.
    leftPad(word, n) {
        //StringExtras.leftPad(a, 5); // returns '  you' 5 - 3 = 2
        //StringExtras.leftPad(a, 1); // returns 'you'
        // 1. check the length of the word    
        // 2. get the length difference 
        let difference = n - word.length;
        // 3. n >?  <? add or just return
        if (difference > 0) { // 2
            // add space on the left

            /* 1 repeat(' ', 2) => '     ' => += word => '  '+ 'you' => '  you'
            let leftArea = this.repeat(' ', difference);
            return leftArea + word; */

            // 2 for while loop difference times => ' ' + word => return result
            let leftArea = '';
            while (difference > 0) {// 2 => 1 
                leftArea += ' '; // ' ' => '  '
                difference--; // 1 => 0
            }
            return leftArea + word;//  => '  you'

        } else {
            // return
            return word;
        }
    },
    // - rightPad method like leftPad, but adds spaces to the right of the string.
    rightPad(word, n) {
        let difference = n - word.length;
        if (difference > 0) {
            let rightArea = '';
            while (difference > 0) {
                rightArea += '*';
                difference--;
            }
            // rightArea = this.repeat('*', difference);
            return word + rightArea;
        } else {
            return word;
        }
    },
    // - pad method like leftPad, but adds spaces to the left & right of the string.
    pad(word, n) {
        let difference = n - word.length;
        if (difference > 0) {
            // add space on both sides
            // StringExtras.pad('you', 5); // returns ' you ' 
            // StringExtras.pad('you, 6); // returns '  you '
            // add the space to the left 
            // difference % 2 == 0 => put same amount space on both sides
            // if not, we need to put one more space on the left side
            if (difference % 2 == 0) {
                // put same amount space on both sides
                //5-3=2 => 2/2 =1 
                let spaces = difference / 2;
                let area = '';
                while (spaces > 0) {
                    area += '*';
                    spaces--;
                }
                return area + word + area; // ' ' + you + ' ' 
                // return this.repeat('*', spaces) + word + this.repeat('*', spaces)
            } else {
                // if not, we need to put one more space on the left side
                // 6-3=3 => 3/2 = 1.5 => 2 space on the left 1 one the right
                let spaces = difference / 2;
                let area = '';
                while (spaces > 0.5) {
                    area += '*';
                    spaces--;
                }
                // 2 space on the left 1 one the right => 1 on both sides but 1 more on the left
                return area + '*' + word + area; // ' ' +' ' + you + ' '
                // return this.repeat('*', parseInt(spaces)) + '*' + word + this.repeat('*', parseInt(spaces))
            }
            // return result
        } else {
            return word;
        }
    },
    // - capitalize method which upper cases the first letter of a string.
    capitalize(word) {
        // get the first letter of word
        // capitalize it
        // put it back to word
        const firstLetter = word[0].toUpperCase();
        //firstLetter + word?? 
        //get rid of the original first letter
        return firstLetter + word.slice(1);
    }
};

const word = "hello"
console.log(StringExtras.pad(word, 10))