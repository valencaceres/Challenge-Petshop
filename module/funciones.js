//function render card

export function renderCard(listaEvents, container) {
  container.innerHTML = "";
  let listado = "";
  if (listaEvents.length === 0) {
    listado = `lo sentimos no encontramos esto`;
  } else {
    listaEvents.forEach((propiedades) => {
      if (propiedades.disponibles < 5) {
        listado += `<div class="card" style="width:22% ; margin: 1rem ; 
  height: 70vh;
  padding: 2px;
  ">
    <img src="${propiedades.imagen}" style="
  object-fit: cover;
  width: 100%;
  height: 50%;
    " alt="${propiedades.producto}">
    <div class="card-body">
    <h5 class="card-title">${propiedades.producto}</h5>
    <p class="card-text">${propiedades.descripcion.slice(0, 120)}...</p>
    <p class="card-text">Precio: ${propiedades.precio}</p>
    <a href="./details.html?id=${
      propiedades._id
    }" class="btn btn-danger">Ultimas Unidades</a>
    </div>
    </div>
`;
      } else {
        listado += `
            <div class="card" style="  style="width:22% ; margin: 1rem ; 
            height: 70vh;
            padding: 2px;
            "">
            <img src="${propiedades.imagen}" style="
  object-fit: cover;
            
            " alt="${propiedades.producto}">
            <div class="card-body">
            <h5 class="card-title">${propiedades.producto}</h5>
            <p class="card-text">${propiedades.descripcion.slice(0, 120)}...</p>
            <p class="card-text">Precio: ${propiedades.precio}</p>
            <a href="./details.html?id=${
              propiedades._id
            }" class="btn btn-dark">Mas...</a>
            </div>
            </div>
        `;
      }
    });
  }
  container.innerHTML = listado;
}

export function filterCategoryFarmacia(lista) {
  return lista.filter((element) => element.categoria === "farmacia");
}

export function filterCategoryJugueteria(lista) {
  return lista.filter((element) => element.categoria === "jugueteria");
}

export function buscador(lista, input) {
  return lista.filter((element) =>
    element.producto.toLowerCase().includes(input.toLowerCase())
  );
}
