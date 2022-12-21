import {renderCard, filterCategoryJugueteria} from "./module/funciones.js"

let card2= document.getElementById("containerCard2")


let events;
fetch('https://mindhub-xj03.onrender.com/api/petshop')
.then((result) =>   {return result.json()})
.then (data => {
    events= data
    // function farmacia
    let categoryFarmacity= filterCategoryJugueteria(events)
    console.log(categoryFarmacity) 
    
    //function render farmacia
    renderCard (categoryFarmacity, card2) 
})
.catch( err => {
    console.log(err)
}) 
