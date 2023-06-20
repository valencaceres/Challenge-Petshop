const card = document.getElementById("cardContainer");

let events;
fetch("https://mindhub-xj03.onrender.com/api/petshop")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    events = data;
    const queryString = location.search;
    console.log(queryString)
    const param = new URLSearchParams(queryString).get("id");
    console.log(param)
    let everyEvent = events.find((item) => item._id == param);
    renderDetails(everyEvent, card);
  })
  .catch((err) => {
    console.log(err);
  });

function renderDetails(lista, containerDetails) {
  containerDetails.innerHTML = `
  <div class="p-5 container-details-card d-flex justify-content-center aling-item-center flex-column">
  <div class="container-img">
  <img src="https://www.portalveterinaria.com/upload/20200703080947schafer-dog-4357790_1920.jpg" class="img-detail rounded" alt="${lista.producto}">
  </div>
  <div class="container-h3 d-flex justify-content-center flex-column text-center"  >
  <h3 class="p-4" >${lista.producto}</h3>
  <p>${lista.descripcion}</p>
  <p> Disponibilidad : ${lista.disponibles}</p>
  <p class="bg-secondary rounded-4 p-2">Precio : ${lista.precio}</p>
  </div>
`;
}
