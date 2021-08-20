"use strict";
//first div
let one = document.createElement("div");
document.body.appendChild(one);
one.className = "sample";
one.id = "main";
let text = document.createTextNode("this is first div");
one.appendChild(text);

//second div

let second = document.createElement("div");
document.body.appendChild(second);
second.id = "second";
second.innerHTML = "<h1>Bhargav Reddy</h1>";
second.innerHTML = "<p>I'm from Andhra Pradesh</p>";
second.innerHTML = "<p>I'm from chennai</p>";

//third append to one
let third = document.createElement("h2");
third.textContent = "heloo hicoder";
one.appendChild(third);

//para with classname
let para = document.createElement("p");
para.textContent = "This ia Para1. this is about the practice";
console.log(para);
para.className = "para1--para1";

//para append to one
let p1 = document.createElement("p");
p1.textContent = "this is para2";
one.appendChild(p1);

//creating script
let script = document.createElement("script");
script.src = "child access.js";
document.body.appendChild(script);

//note

let note = document.getElementById("note");
console.log(note.textContent);
//menu

let menu = document.getElementById("menu");
console.log(menu.innerHTML);

//homework creating list
//creating ul
let list = document.createElement("ul");
list.id = "list1";
document.body.appendChild(list);

//creating li-1
let li1 = document.createElement("li");
li1.textContent = "Home";
list.appendChild(li1);

//creating li-2
let li2 = document.createElement("li");
li2.textContent = "products";
list.appendChild(li2);

//creating li-3
let li3 = document.createElement("li");
li3.textContent = "About Us";
list.appendChild(li3);
