import {renderCard, filterCategoryJugueteria, buscador} from "./module/funciones.js"

let card2= document.getElementById("containerCard2")
let containerInput= document.getElementById("containerInput") 

let events;
fetch('https://mindhub-xj03.onrender.com/api/petshop')
.then((result) =>   {return result.json()})
.then (data => {
    events= data
    // function farmacia
    let jugueteria= filterCategoryJugueteria(events)
    console.log(jugueteria) 
    
    //function render farmacia
    renderCard (jugueteria, card2) 
})
.catch( err => {
    console.log(err)
}) 



containerInput.addEventListener("input", e => {
let valor=  e.target.value
let jugueteria= filterCategoryJugueteria(events)
let encontrado = buscador(jugueteria, valor)
renderCard(encontrado, card2)
}) 





