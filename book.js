let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        //returns as array
        //return [this.title, this.author, this.pages, this.read]; 
        //returns as string
        return `${this.title} ${this.author} ${this.pages} ${this.read}`;
    }
}

function addBookToLibrary(bookv) {
    myLibrary.push(bookv.info());
}

function display() {
    if(myLibrary != '') {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundColor = 'lightblue';
        card.style.height = "50px";
        card.style.textAlign = "center";
        card.style.padding = "50px 20px";
        card.style.margin = "10px";
        content.appendChild(card);
        card.textContent = myLibrary;
        myLibrary.shift();
    }
}

function inputbook() {
    //add it all to a form
    const form = document.createElement('FORM');
    content.appendChild(form);

    addbook.style.display = 'none';
    const title = document.createElement('H1');
    title.textContent = "Title";
    form.appendChild(title);
    const input1 = document.createElement('input');
    input1.setAttribute("type", "text");
    input1.classList.add('input1');
    form.appendChild(input1);

    const author = document.createElement('H1');
    author.textContent = "Author";
    form.appendChild(author);
    const input2 = document.createElement('input');
    input2.setAttribute("type", "text");
    input2.classList.add('input1');
    form.appendChild(input2);

    const pages = document.createElement('H1');
    pages.textContent = "Pages";
    form.appendChild(pages);
    const input3 = document.createElement('input');
    input3.setAttribute("type", "text");
    input3.classList.add('input1');
    form.appendChild(input3);

    const read = document.createElement('H1');
    read.textContent = "read or not read?";
    form.appendChild(read);
    const input4 = document.createElement('input');
    input4.setAttribute("type", "checkbox");
    input4.classList.add('input1');
    form.appendChild(input4);
    function checked() {
        if(input4.checked) {
            return input4.value = 'Read!'
        }
        else {
            return input4.value = 'Not read'
        }
    }


    const submitbtn = document.createElement('button');
    submitbtn.setAttribute("type", "button")
    form.appendChild(submitbtn);
    const btntext = document.createElement('p');
    btntext.textContent = 'submit';
    submitbtn.appendChild(btntext);
    //this might have to go outside function
    submitbtn.addEventListener('click', function(e) {
        checked();
        const book1 = new Book(input1.value, input2.value,input3.value,input4.value);
        addBookToLibrary(book1);
        display(book1);
        //remove form
        form.remove();
        //do this last
        addbook.style.display = 'block';
    })

}

const content = document.querySelector('.content');
const addbook = document.querySelector('.addbook');
//get rid of this for user inputted stuff
//const theHobbit = new Book('The Hobbit','J.R.R. Tolkien', '295 pages','not read ');
//addBookToLibrary(theHobbit);

//i think i need to change the function here since addbutton should
//open up a form for user input, how though?
addbook.addEventListener('click', inputbook);



