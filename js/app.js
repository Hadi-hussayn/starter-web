let form = document.getElementById("form");
let x = form.hasAttribute('id');

let ab = form.getAttribute('id');

form.setAttribute("newAttribute", 1234);
form.setAttribute("newAttribute-one", 1234);

form.removeAttribute("newAttribute")

console.log(form);

