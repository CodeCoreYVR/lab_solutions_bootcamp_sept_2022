class Card {
	constructor(value, suit) {
		this.value = value;
		this.suit = suit;
	}

	toString() {
		let rank;
		switch (this.value) {
			case 1:
				rank = 'Ace';
				break;
			case 11:
				rank = 'Jack';
				break;
			case 12:
				rank = 'Queen';
				break;
			case 13:
				rank = 'King';
				break;
			default:
				rank = i;
				break;
		}
		const suit = this.suit[0].toUpperCase() + this.suit.slice(1);
		return `Card { ${rank} of ${suit} }`;
	}
}

class Deck {
	constructor() {
		this.reset();
	}

	shuffle() {
		this.deck = this.deck.sort(function() {
			return 0.5 - Math.random();
		});
	}

	draw() {
		// to draw we can use pop or slice function
		const card = this.deck[0];
		this.deck = this.deck.slice(1);
		return card;
	}

	reset() {
		const values = [];
		for (let i = 1; i <= 13; i++) {
			values.push(i);
		}
		const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
		const cards = [];
		for (let value of values) {
			for (let suit of suits) {
				cards.push(new Card(value, suit));
			}
		}
		this.deck = cards;
	}
}
