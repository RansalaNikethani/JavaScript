let books=[
    {
        title:"Speaking JavaScript",
        author:"Axel Rauschmayer",
        numberOfPages:460
    },
    {
        title:"Programming JavaScript Applications",
        author:"Eric Elliott",
        numberOfPages:254
    },
    {
        title:"Understanding ECMAScript 6",
        author:"Nicholas C. Zakas",
        numberOfPages:352
    }
];

/*let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newBook);
*/

books.push({
    title:"Learning JavaScript Design Patterns",
    author:"Addy Osmani",
    numberOfPages:254
});

console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

let selectedBooks = books.slice(-2);
