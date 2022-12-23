
const card= document.getElementById("cardContainer")  


let events;
fetch('https://mindhub-xj03.onrender.com/api/petshop')
.then( res => { return res.json() } ) 
.then( data => {
    events= data
    const queryString= location.search 
    const param= new URLSearchParams(queryString).get("id") 
    let everyEvent= events.find(item => item._id == param) 
    renderDetails(everyEvent, card)

} )
.catch(err => {
})




function renderDetails (lista, containerDetails) {
  containerDetails.innerHTML=  `
  <div class="p-5 container-details-card d-flex justify-content-center aling-item-center flex-column">
  <div class="container-img">
  <img src="${lista.imagen}" class="img-detail rounded" alt="${lista.producto}">
  </div>
  <div class="container-h3 d-flex justify-content-center flex-column text-center"  >
  <h3 class="p-4" >${lista.producto}</h3>
  <p>${lista.descripcion}</p>
  <p> Disponibilidad : ${lista.disponibles}</p>
  <p class="bg-secondary rounded-4 p-2">Precio : ${lista.precio}</p>
  but
  </div>
` 
}











