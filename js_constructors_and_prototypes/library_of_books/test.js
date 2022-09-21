class Library{
    constructor(){
        this.lib=[]
    }
    shelve(book){
        this.lib.push(book)
        this.lib.sort();
        return this;
    }
    findByTitle(name){
        for (const books of this.lib) {
            console.log(books.title)
            if(books.title.includes(name) ){
                console.log(books)
            return books;}
        }
    }
    list(){
        return this.lib
    }
}

class Book{
    constructor(title, author, edition){
        this.author = author
        this.title = title
        this.edition = edition
    }
    
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book( "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"], 2);

const lib = new Library();

//this => lib
lib.shelve(eloquentJS).shelve(speakingJS);
console.log(lib);
lib.shelve(theRustProgLang);

// console.log(lib.findByTitle("eloquent")); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
// console.log(lib.findByTitle("Rust")); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}

//console.log(lib.list())
