// crating an element..
// document.createElement(tag)...

// let section = document.createElement('section')
// let div = document.createElement('div');
// div.className = "heading";
// div.id = "heading";
// let h2 = document.createElement("h2");
// h2.innerHTML = "Heading";
// div.innerHTML="<h2>hellow</h2>;"
// div.innerHTML = "<p> sdijfojiewrfssdkkcsdf </p>"
// let heading = document.createElement("h2");
// section.appendChild(div);

// //aded new li thrugh parentElem.appendChild(node) metode

// let newli = document.createElement('li')
// newli.innerHTML = 'waqar';
// list.appendChild(newli);
// // div.appendChild(h2);
// // list.insertBefore(newli, list.children[1]);
// list.insertBefore(newli, list.firstChild)
// let li2 = document.createElement('li')
// li2.innerHTML = 'newli2'
// list.prepend(li2);
// let li3 = document.createElement('li2');

// list.before('Students');
// // list.after('Outers');

document.querySelector('#add-btn').addEventListener('click', function onClick() {
  let newList = document.createElement('li');
  newList.textContent = 'add new';
  list.appendChild(newList);
});
document.querySelector('#remove-btn').addEventListener('click',onClick);
function onClick(){
  document.querySelectorAll(".list");
  list.lastChild.remove()
}


// let x=document.createElement('srong');



// console.log(section);