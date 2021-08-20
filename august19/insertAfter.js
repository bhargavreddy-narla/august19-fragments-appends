"use strict";
//using insertafter

let menu = document.getElementById("main");
let li1 = document.createElement("li");
li1.textContent = "Watermelon";
menu.insertBefore(li1, menu.lastElementChild.nextSibling);

//append function

let div = document.getElementById("myDiv");
let heading = document.createElement("h1");
heading.textContent = "this is append function";

let para = document.createElement("p");
para.textContent = "here we will use append function";

let h6 = document.createElement("h6");
h6.textContent = "this is heading 6";

myDiv.append(heading, para, "somecontent", h6);
