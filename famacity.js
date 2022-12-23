
import {renderCard, filterCategoryFarmacia, buscador} from "./module/funciones.js"

let card = document.getElementById("containerCard")
let containerInput= document.getElementById("containerInput") 

let events;
fetch('https://mindhub-xj03.onrender.com/api/petshop')
.then((result) =>   {return result.json()})
.then (data => {
    events = data
    // function farmacia
    let farmacia = filterCategoryFarmacia(events)
    //function render farmacia
    renderCard (farmacia, card) 

})
.catch( err => {
    console.log(err)
}) 




containerInput.addEventListener("input", e => {
let valor=  e.target.value
let farmacia = filterCategoryFarmacia(events)
let encontrado = buscador(farmacia, valor)
console.log(encontrado)
renderCard(encontrado, card)
}) 









