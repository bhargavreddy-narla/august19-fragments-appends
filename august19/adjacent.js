"use strict";
//before brgin
let div2 = document.getElementById("beforeBegin");

beforeBegin.insertAdjacentHTML(
  "beforebegin",
  "<strong>unordered list starts</strong"
);

//after begin
let div3 = document.getElementById("beforeBegin");

beforeBegin.insertAdjacentHTML("afterbegin", "<strong> list</strong");

//before end
let div4 = document.getElementById("beforeBegin");

beforeBegin.insertAdjacentHTML("beforeend", "<strong> list end</strong");

//afterend
let div5 = document.getElementById("beforeBegin");

beforeBegin.insertAdjacentHTML(
  "afterend",
  "<strong> unordered list ends</strong"
);

//replace of child

let div6 = document.getElementById("replace");

let bootstrap = replace.children[2];

let java = replace.children[3];

//bootstrap replaced with material ui

let listItem1 = document.createElement("li");
listItem1.textContent = "MATERIAL UI";
replace.replaceChild(listItem1, bootstrap);

//java replaced with javascript
let listItem2 = document.createElement("li");
listItem2.textContent = "JAVASCRIPT";
replace.replaceChild(listItem2, java);

//remove child //HTML removing

let div7 = document.getElementById("replace");
let list1 = replace.children[0];
replace.removeChild(list1);

//remove Jquery
let list2 = replace.children[4];
replace.removeChild(list2);

//clone node

let div8 = document.getElementById("node");
let list = node.children;
//repaeting of vikings
let king1 = list[0];
let king1copy = king1.cloneNode(true);
node.appendChild(king1copy);

//repeating of ragnar

let king2 = list[1];
let king2copy = king2.cloneNode(true);
node.appendChild(king2copy);

//if we place node(id) then all the children repeated
