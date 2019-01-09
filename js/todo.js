let myInput=document.getElementById('submit-btn');

myInput.addEventListener('click',function(){
let ul = document.getElementById("list");
let input = document.getElementById('input');
let li = document.createElement("li");
li.setAttribute('id', input.value);
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li); 
input.value="";
  let remove1 = document.getElementById('remove-btn').addEventListener('click', function onremove() {
  li.remove();
  });

});


