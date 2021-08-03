///////////////////////
// Global Data
///////////////////////
const books = [{
  author: "twain",
  haveread: false,
  language: "english",
  numPages: "1333",
  pubdate: "2021-07-12",
  title: "huckfinn"
},
{
  author: "twain",
  haveread: true,
  language: "english",
  numPages: "1333",
  pubdate: "2021-07-12",
  title: "huckfinn"
}]

function Book(title, author, numPages, language, pubdate, haveread) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.language = language;
  this.pubdate = pubdate;
  this.haveread = haveread;
}

// const books = [
//     { name: "Alex Merced", age: 35, haveread: true},
//     { name: "Bob Jones", age: 65, haveread: false},
//     { name: "Steve Smith", age: 22, haveread: true},
//     { name: "Macie Willis", age: 32, haveread: false},
//     { name: "John Jingle", age: 40, haveread: true},
//   ]
  
  //document.querySelector takes a css selector and returns the first element that matches that selector
  const mainDiv = document.querySelector("main") // returns the one main element in our html
  
  //below we will add our form inputs to some global variables
  const titleInput = document.querySelector('input[name="title"]') //selecting the input with name property "name"
  const authorInput = document.querySelector('input[name="author"]') //selecting the input with name property "name"
  const numPagesInput = document.querySelector('input[name="numPages"]')
  const langInput = document.querySelector('input[name="language"]')
  const dateInput = document.querySelector('input[name="pubdate"]')
  const isReadInput = document.querySelector('input[name="haveread"]')
  
  const createButton = document.querySelector("button#createitem") //select button with id "createitem"
  const clearButton = document.querySelector("button#clearform")
  
  //below we will add our update form inputs to some global variables
  const updateName = document.querySelector('input[name="updatename"]') //selecting the input with name property "name"
  const updateAge = document.querySelector('input[name="updateage"]') //selecting the input with name property "name"
  const updateFormButton = document.querySelector("button#updateitem") //select button with id "createitem"
  


  ///////////////////////
  // Functions
  ///////////////////////
  
  //define function for rendering current data to DOM, use this whenever data changes
  const renderData = () => {
    //empty of the main div of any existing content
    mainDiv.innerHTML = ""
  
    //let us loop over the books array
    books.forEach((person, index) => {
      const divOne = document.createElement("div")
      const divTwo = document.createElement("div")
      
      const divX = document.createElement("div")
      
      const divCont = document.createElement("div")
      const h1ContTitle = document.createElement("h1")
      const pContOne = document.createElement("p")
      const pContTwo = document.createElement("p")
      const pContThree = document.createElement("p")
      const pContFour = document.createElement("p")
      
      const divHasRead = document.createElement("div")
      
      mainDiv.id = "mainDiv"
      divOne.id = "divOne"
      divTwo.id = "divTwo"
      divX.id = "divX"
      divCont.id = "divCont"
      divHasRead.id = "divHasRead"
  
      //Delete Button
      const deleteButton = document.createElement(`button`) //create delete button
      deleteButton.id = index
      deleteButton.innerText = "Delete" //make the delete button say "Delete"
      deleteButton.addEventListener("click", event => {
        books.splice(index, 1) //remove the element at the current index
        renderData() //re-render the updated data to the DOM
      })
      divX.appendChild(deleteButton) //apend the delete button
      
      
      //card content area
      h1ContTitle.innerText = `Title: ${person.title}`
      pContOne.innerText = `Author: ${person.author}`
      pContTwo.innerText = `Number of Pages: ${person.numPages}`
      pContThree.innerText = `Language: ${person.language}`
      pContFour.innerText = `Published: ${person.pubdate}`
      divCont.append(h1ContTitle, pContOne, pContTwo, pContThree, pContFour)


      //Update Button
      const updateButton = document.createElement(`button`) //create update button
      updateButton.id = index
      updateButton.innerText = "Update" //make the delete button say "Delete"
      updateButton.addEventListener("click", () => {
        person.haveread === true ? person.haveread = false : person.haveread = true;
        person.haveread == true ? divOne.className = "read" : divOne.className = "notread" 
      })
      divHasRead.appendChild(updateButton) //apend the delete button
  
      //set background color of card based on haveread value
      person.haveread == true ? divOne.className = "read" : divOne.className = "notread"
      
      divTwo.append(divX, divCont, divHasRead) //append the h1 to the main element
      divOne.appendChild(divTwo) //append container of update and delete button
      mainDiv.appendChild(divOne)
    })
  }
  

  
  
  
  const createData = () => {
    const title = titleInput.value //store value from title input into name variable
    const author = authorInput.value 
    const numPages = numPagesInput.value 
    const language = langInput.value 
    const pubdate = dateInput.value
    const haveread = isReadInput.checked
  
    const createButton = document.querySelector("button#createitem") //select button with id "createitem"
    const clearButton = document.querySelector("button#clearform")



    
    const newBook = new Book(title, author, numPages, language, pubdate, haveread)
    books.push(newBook) //push the new person object into the array
    renderData() //render the data again so it reflects the new data
  }
   
  ////////////////////
  // Main App Logic
  ////////////////////
  renderData() //call the render data function for the initial rendering of the data
  createButton.addEventListener("click", createData) //trigger create data function whenever createButton is clicked
  
///////////////////////
///  Modal  ///////////
//////////////////////

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

createitem.onclick = function() {
  modal.style.display = "none";
}
