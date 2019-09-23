import "./styles.css"
import axios from "axios"
console.log("ESTE ES EL JS DEL ARCHIVO BULMA!!!")


if (document.querySelector("#myInput") != null){
    document.querySelector("#myInput").addEventListener('keyup', (event) => {
        /* Code here... */
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
        })

}

const listar = (conjunto) => {
    var incluir = ""
    for(var i = 0; i < conjunto.length; i++) {
        var obj = conjunto[i];
        //incluir += "<li class ='pais'  ><a href = https://api.openweathermap.org/data/2.5/weather?id="+obj.id+"&appid=37c466e1678618dd2536e562caab06b7>"+obj.name+"</a></li>"
        incluir += "<li class ='pais' ><a href = index.html?id="+obj.id +" >"+obj.name+"</a></li>"
        
    
    }
    return incluir
}

var json = require("./city.list.json")


const key = "country";
const value= "CL";
const result = json.filter(d=>d[key]==value);

if (module.hot) {
    module.hot.accept()
}
if (document.querySelector("#myUL") != null ){
    const locations = document.querySelector("#myUL")
    locations.innerHTML+= listar(result)

}


axios.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=37c466e1678618dd2536e562caab06b7").then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})


if (document.querySelector(".empanada-container") != null){
    const datos = document.querySelector(".empanada-container")
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("id");
    axios.get("https://api.openweathermap.org/data/2.5/weather?id="+ c +"&appid=37c466e1678618dd2536e562caab06b7").then((res) => {
        console.log(res)
        datos.innerText+=JSON.stringify(res)

    }).catch((error) => {
        console.log(error)
    })

}


