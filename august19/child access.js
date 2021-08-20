"use strict";

let element = document.getElementById("menu");
//console.log(element);

//let firstChild = element.firstChild;
//console.log(firstChild);
//first child

let firstChild = element.firstElementChild;
console.log(firstChild);

//last child

let lastChild = element.lastElementChild;
console.log(lastChild);

let allChild = element.childNodes;
console.log(allChild);

let allChildren = element.children;
console.log(allChildren);
