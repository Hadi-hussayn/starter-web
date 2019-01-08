let a = document.getElementById("heading");
// console.log(a);
a.style.textAlign = "center";
a.style.background = "green";
a.style.fontSize = "2rem";
a.style.color = "#fff";
a.textContent = "This is new Heading";
a.style.padding = "3rem";
// a.style.lineHeight ="2rem";

let pera = document.getElementById("pera");
// console.log(pera);
pera.style.textAlign = "center";
pera.style.background = "gray";
pera.firstElementChild.style.margin = "0px";
pera.firstElementChild.style.padding = "3rem";
pera.firstElementChild.style.fontSize = "1.5rem";
pera.firstElementChild.style.color = "#fff";
// pera.textContent="this is new pera pera for this and i averide old one"
// let btn = document.querySelector('.btn');
// btn.style.margin = "0 auto";
// btn.style.padding = "1rem";
// btn.style.width = "10rem";
// btn.style.height = "3rem";
// btn.style.textAlign = "center";

// form js


// boxis js

let boxis = document.getElementById ("boxis")
boxis.style.display = "flex";
boxis.style.justifyContent ="space-evenly";
// boxis.style.backgroundColor = "gray";
let heading = boxis.children[0].children[1];
heading.style.color = "red";
heading.style.textAlign = "center"
// boxis.children[0].children[1].style.color = "red"
// boxis.children[0].children[1].style.textAlign = "center"
boxis.children[0].children[2].style.fontSize = "1.5rem";

let secondBox = document.querySelector(".secondBox");
secondBox.children[1].style.color = "green";
secondBox.children[1].style.textAlign = "center";

let formColect = document.querySelector("#form")
formColect.style.display = "flex";
formColect.style.justifyContent = "center";

// console.dir(formColect);








