let itemOne = document.querySelector(".one").addEventListener('click',function one(e) {
  console.log("item one");

  
});
let itemTwo = document.querySelector(".two").addEventListener('click',function two(e) {
  console.log("item two");
  
});
let itemThree = document.querySelector(".three").addEventListener('click',function three(e) {
  console.log("item three");
  e.stopPropagation();

});

let pret = document.querySelector(".anchor").addEventListener('click' , function prevent(e){

  console.log("prevent anchor");
  e.preventDefault();

});
let pretTwo = document.querySelector(".checkbox").addEventListener('click' , function preventwo(e){

  console.log("prevent check");
  e.preventDefault();

});

