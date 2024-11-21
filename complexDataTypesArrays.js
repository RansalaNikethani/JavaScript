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

//books.shift();

let lostbook = books.shift(0);

console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

let sumOfPages = books[0].numberOfPages + books[1].numberOfPages + books[2].numberOfPages;
console.log(`pages : ${sumOfPages}`);

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    let newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030 ",
    email: "risus.Quisque@urna.ca."
    };
    
    contacts.push(newContact);
    
    let firstContact = contacts.shift();
    let lastContact = contacts.pop();

    console.log(firstContact);
    console.log(lastContact);
    console.log(contacts.length);
    
