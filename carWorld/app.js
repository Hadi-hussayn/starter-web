class car{
  constructor(name, make, model, year, discription){
    this.name = name;
    this.make = make;
    this.model = model;
    this.year = year;
    this.discription = discription;
  }


    //  localStorage

  table(car){
    let lis;
    let table=document.querySelector(".table");
    if(localStorage.getItem("lis") ==null){
      lis =[];
    }else{
      lis = JSON.parse(localStorage.getItem('lis'));
    }
    lis.push(car);
    localStorage.setItem('lis',JSON.stringify(lis));
   // console.log(make);
    let records = JSON.parse(localStorage.getItem('lis'));
    // console.log(records);
     displayTable(records);
    function displayTable (records){
     let tr = document.createElement('tr');
    
     for (let i = 0; i < records.length; i++) {
       tr.innerHTML = `
       <td>${records[i].name}</td>
       <td>${records[i].make}</td>
       <td>${records[i].model}</td>
       <td>${records[i].year}</td>
       <td>${records[i].discription}</td>
      //  <td><button claass="remove"> X </button> </td>
       `;
       // records[i]   
      }
     table.appendChild(tr);
    }
  }
}

let form = document.getElementById('cars')
form.addEventListener('click', function (e) {
  let name, make, model, year, discription;
  name = document.getElementById('name').value;
  // console.log(name);
  make = document.getElementById("make").value;
  model = document.getElementById('model').value
  year = document.getElementById("year").value;
  discription = document.getElementById("discription").value;
  e.preventDefault();
  // console.log(e.target.className);
  if (e.target.className == "submit-btn") {
    // console.log(modal)
    let obj = new car(name, make, model, year, discription);
    obj.table(obj);
    // console.log(obj.table(obj));
  }
  // e.preventDefault();
});

