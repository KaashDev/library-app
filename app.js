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

Book.prototype.toggleRead = function(){
    if(this.read === "Not Read Yet"){
        this.read = "Read";
    } else{
        this.read = "Not Read Yet";
    }
}
function addBookToLibrary(book){
    myLibrary.push(book);
}

function display(){
    container.innerHTML="";

    for(const book of myLibrary){
        const card = document.createElement("div");
        card.classList.add("card");

        const removeCardDiv = document.createElement("div");
        removeCardDiv.classList.add("cardTopBtns");
        const removeCardBtn = document.createElement("button");
        removeCardBtn.textContent = "×";
        removeCardBtn.setAttribute("data-id", book.id);
        removeCardBtn.addEventListener("click", (event)=>{
            removeCard(event.target.dataset.id);
        });
        removeCardDiv.appendChild(removeCardBtn);
        card.appendChild(removeCardDiv);

        for(const property in book){
            if(property != "id" && book.hasOwnProperty(property)){
                const cardInfo = document.createElement("p");
                if (property === "title"){
                    cardInfo.textContent = book[property];
                } else{
                    cardInfo.textContent = property + ": " + book[property];
                }
                
                card.appendChild(cardInfo);
            }
        }
        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.classList.add("toggleReadBtn");
        toggleReadBtn.textContent = "Toggle Read";
        toggleReadBtn.addEventListener("click", ()=>{
            book.toggleRead();
            display();
        });
        card.appendChild(toggleReadBtn);
        container.appendChild(card);
        }
    }

const book1 = new Book("Tadaaa", "Toktok", 123, "Read");
const book2 = new Book("Boom", "Tiktik", 367, "Not Read Yet");
addBookToLibrary(book1);
addBookToLibrary(book2);
display();

const addBtn = document.querySelector(".addBtn");
const addModal = document.querySelector(".addModal");
const closeBtn = document.querySelector(".closeBtn");
const addBookBtn = document.querySelector(".addBookBtn");

addBtn.addEventListener("click", ()=>{
    addModal.showModal();
});

closeBtn.addEventListener("click", ()=>{
    addModal.close();
});

addBookBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const formTitle = document.querySelector("#form-title");
    const formAuthor = document.querySelector("#form-author");
    const formPages = document.querySelector("#form-pages");
    const formRead = document.querySelector("#form-read");

    const newBook = new Book(formTitle.value, formAuthor.value, parseInt(formPages.value), formRead.value);
    addBookToLibrary(newBook);
    addModal.close();
    display();
});

function removeCard(id){
    const index = myLibrary.findIndex(book => book.id === id);
    myLibrary.splice(index, 1);
    display();
}