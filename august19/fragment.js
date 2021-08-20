"use strict";

let one = document.getElementById("menu");
console.log(one);

let two = document.createElement("div");
document.body.appendChild(two);

for (let i = 0; i < 50; i++) {
  let p = document.createElement("p");
  p.textContent = `paragraph ${i}`;
  two.appendChild(p);
}

//document fragment

let fragment = document.createDocumentFragment();
for (let i = 0; i < 50; i++) {
  let p = document.createElement("p");
  p.textContent = `paragraph ${i}`;
  fragment.appendChild(p);
}

two.appendChild(fragment);

//using insertbefore

let list = document.getElementById("myList");
let li = document.createElement("li");
li.textContent = "INDIA";
list.insertBefore(li, list.firstElementChild);

//using insertafter

let menu = document.getElementById("main");
let li1 = document.createElement("li");
li1.textContent = "Watermelon";
menu.insertBefore(li1, menu.lastElementChild.nextSibling);
