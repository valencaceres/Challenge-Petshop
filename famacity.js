
import {renderCard, filterCategoryFarmacia} from "./module/funciones.js"

let card = document.getElementById("containerCard")

let events;
fetch('https://mindhub-xj03.onrender.com/api/petshop')
.then((result) =>   {return result.json()})
.then (data => {
    events= data
    // function farmacia
    let categoryFarmacity= filterCategoryFarmacia(events)
    
    //function render farmacia
    renderCard (categoryFarmacity, card) 
})
.catch( err => {
    console.log(err)
}) 










