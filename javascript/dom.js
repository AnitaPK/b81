// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically
// change the content, structure, and style of a web page.

document.title = "My Page"
// console.dir(document)


// document.body.style.backgroundColor = "lime" 


// Methods 

// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements
// from the DOM (Document Object Model)

// 1. document.getElementById() // ELEMENT OR NULL

// document.getElementById("msg").textContent = "Welcome "

document.getElementById("msg").textContent += 'TIGER'

// 2. document.getElementsClassName() // HTML COLLECTION

const birdsElements = document.getElementsByClassName('bird')

console.log(birdsElements)
birdsElements[2].style.color = 'Red'

// birdsElements.forEach((b1)=>b1.style.backgroundColor = "Blue")


Array.from(birdsElements).forEach((b)=>b.style.color = 'red')


// 3. document.getElementsByTagName() // HTML COLLECTION

h1Elmt  =document.getElementsByTagName("h1")
console.log(h1Elmt[0])

h1Elmt[0].style.textAlign = 'center'

h4Elmts = document.getElementsByTagName('h3')
console.log(h4Elmts)
Array.from(h4Elmts).forEach((elmt)=>{
    elmt.style.backgroundColor = 'Blue'
    elmt.style.color = '#0f0'
})

// 4. document.querySelector() // ELEMENT OR NULL

h1ElmtByQuery =document.querySelector("h1")
console.log(h1ElmtByQuery)



// 5. document.querySelectorAll() // NODELIST

birdElmtByQuery = document.querySelectorAll('.bird')

console.log(birdElmtByQuery)

birdElmtByQuery.forEach((e)=>e.style.textAlign = "center")