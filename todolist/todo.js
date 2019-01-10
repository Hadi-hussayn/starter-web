let myInput = document.getElementById("submit-btn");
let input = document.getElementById("input");
let i = 0;
myInput.addEventListener("click", function() {
  if (input.value != "") {
    let ul = document.getElementById("list");
    let input = document.getElementById("input");
    let li = document.createElement("li");
    li.className = "lis";
    // console.log(li);

    let icon = document.createElement("i");
    icon.className = "fas fa-times float-right";
    icon.setAttribute("id", "icon" + i);
    li.appendChild(icon);

    li.setAttribute("id", input.value);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    document.body.addEventListener("click", function(e) {
      // console.log(e.target);
      if (e.target.parentElement.classList.contains("lis")) {
        e.target.parentElement.remove();
      }
    });

    // document.getElementById("icon" + i).addEventListener("click", function close() {
    //     li.remove();
    //   });
    // i++;

    document
      .getElementById("remove-btn")
      .addEventListener("click", function onremove() {
        let list = document.querySelectorAll(".lis");
        for (let i = 0; i < list.length; i++) {
          list[i].remove();
        }
      });
  } else {
    alert("input shuld not be empty");
  }
});
