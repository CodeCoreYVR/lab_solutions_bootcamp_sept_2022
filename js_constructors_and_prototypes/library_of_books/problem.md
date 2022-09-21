Using class syntax, model a library that holds books. Both the library and books
should be constructed objects.

Create a `Library` class and a `Book` class.

Let's go over the `Book`.

The book should keep track of the `authors`, `title` and `edition` of the book.

```javascript
// Here are a few examples of books being constructed
const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
  "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);
```

Let's go over the `Library`. Like the `Book`, it is constructed. Unlike the
`Book` it has several prototype methods. It is constructed without arguments.

Give it the prototype method `shelve` that takes a book object and stores it.
When shelving books, store them in alphabetical by their title.

```javascript
const lib = new Library();
lib.shelve(eloquentJS);

// See if you can make it possible to chain shelve calls
lib.shelve(speakingJS).shelve(theRustProgLang);
```

Give it the prototype method `findByTitle`. It'll search for the first book
whose title contains the passed in string argument.

```javascript
// The casing of the string should be ignored
lib.findByTitle("eloquent"); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
lib.findByTitle("Rust"); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}
```

Give it the prototype method `list` which returns all books in the library in an
Array.

```javascript
lib.list();
// [
//   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},
//   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},
//   Book {title: "Speaking JavaScript", authors: Array(1), edition: 1},
// ]
```
