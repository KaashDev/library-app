const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, read){
    if(!new.target){
        throw Error("Use the 'new operator");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function display(){
    for(const book of myLibrary){
        const card = document.createElement("div");
        card.classList.add("card");

        for(const property in book){
            if(property != "id"){
                const cardInfo = document.createElement("p");
                cardInfo.textContent = book[property];
                card.appendChild(cardInfo);
            }
        }
        container.appendChild(card);
        }
    }

const book1 = new Book("Tadaaa", "Toktok", 123, "Read");
const book2 = new Book("Boom", "Tiktik", 367, "Not Read Yet");
addBookToLibrary(book1);
addBookToLibrary(book2);
display();

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener = function(){
    
}