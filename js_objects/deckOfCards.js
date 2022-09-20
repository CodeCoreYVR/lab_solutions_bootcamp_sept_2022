const deck = {
    cards: [],
    reset() {
        this.cards = [];
        const suitArr = ["clubs", "spades", "hearts", "diamonds"];
        for (let suit = 0; suit < suitArr.length; suit++) {
            for (let number = 1; number < 14; number++) {
                this.cards.push({
                    "suit": suitArr[suit],
                    "number": number
                });
            }
        }
    },
    shuffle() {
        if (this.cards.length > 0) {
            for (let index = 0; index < this.cards.length; index++) {
                const randomNum = parseInt(Math.random() * (this.cards.length - 1));
                const temp = this.cards[randomNum];
                // how to switch the value of two variables?
                // let a = 3;
                // let b = 4;  b =a; a =b; 
                // let c = a;//3
                // a = b ;// a=>4
                // b = c ; // b =3
                this.cards[randomNum] = this.cards[index];
                this.cards[index] = temp;
            }
        } else {
            return 'Please set the card first!';
        }
    },
    draw() {
        if (this.cards.length > 0) {
            const result = this.cards[0];
            this.cards = this.cards.slice(1, this.cards.length - 1);
            // this.cards = this.cards.splice(0, 1);
            return result;
        } else {
            return 'Please set the card first!';
        }

    }
}
deck.reset();
console.log(deck.cards);
console.log(deck.draw());
deck.shuffle();
console.log(deck.cards);
console.log(deck.draw());