import "./styles.css"
import axios from "axios"
console.log("ESTE ES EL JS DEL ARCHIVO BULMA!!!")


const listar = (conjunto) => {
    var incluir = ""
    for(var i = 0; i < conjunto.length; i++) {
        var obj = conjunto[i];
        incluir += "  <li><a>"+obj.name+"</a></li>"
    
    }
    return incluir
}

var json = require("./city.list.json")


const key = "country";
const value= "CL";
const result = json.filter(d=>d[key]==value);

console.log(listar(result))
if (module.hot) {
    module.hot.accept()
}

const locations = document.querySelector("#myUL")



//locations.innerHTML()



function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



axios.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=37c466e1678618dd2536e562caab06b7").then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})


/*
const calculate_mean = (array) => {
    let count = 0
    array.forEach((element) => {
        count += element
    })

    return count / array.length
}

document.querySelector("#mean_container button").addEventListener('click', (event) => {
    let input = document.querySelector("#mean_container input").value
    input = input.split(" ").map((x) => { return parseInt(x) })
    let mean = calculate_mean(input)
    let answer_container = document.querySelector("#mean_container .answer")
    answer_container.innerText = mean
})

const dog_formatter = (x) => {
    return `
    <div class="is-narrow" style="max-width: 300px">
        <div class="dog-box">
        <img src="${x}" style="width: 100%"> 
        </div>
    </div>
    `
}

axios.get("https://dog.ceo/api/breeds/image/random/10").then((res) => {
    let container = document.querySelector("#dogcontainer")
    console.log(res)
    res.data.message.forEach((x) => {
        container.innerHTML += dog_formatter(x)
    })
}).catch((error) => {
    console.log(error)
})

if (module.hot) {
    module.hot.accept()
}
*/