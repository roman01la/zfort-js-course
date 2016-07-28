// https://learn.javascript.ru/traversing-dom

// <html>
document.documentElement

// <head>
document.head

// <body>
document.body

// Number of child elements
element.childElementCount

// Children
element.childNodes // includes text nodes
element.children

// First child
element.firstChild // includes text nodes
element.firstElementChild

// Last child
element.lastChild // includes text nodes
element.lastElementChild

// Next element
element.nextSibling // includes text nodes
element.nextElementSibling

// Previous element
element.previousSibling // includes text nodes
element.previousElementSibling

// Parent element
element.parentNode // includes `document`
element.parentElement

// Get closest parent
element.closest('div')
