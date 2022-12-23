
//function render card



export function renderCard (listaEvents,container) {
    container.innerHTML = "";
    let listado = "";
    listaEvents.forEach((propiedades) => {
        if(propiedades.disponibles < 5 ) {
        listado += 
    `<div class="card" style="width: 18rem;">
    <img src="${propiedades.imagen}" class="card-img-top" alt="${propiedades.producto}">
    <div class="card-body">
    <h5 class="card-title">${propiedades.producto}</h5>
    <p class="card-text">${(propiedades.descripcion).slice(0,120)}...</p>
    <p class="card-text">Precio: ${propiedades.precio}</p>
    <a href="./details.html?id=${propiedades._id}" class="btn btn-danger">Ultimas Unidades</a>
    </div>
    </div>
`; 
        } else {
            listado += `
            <div class="card" style="width: 18rem;">
            <img src="${propiedades.imagen}" class="card-img-top" alt="${propiedades.producto}">
            <div class="card-body">
            <h5 class="card-title">${propiedades.producto}</h5>
            <p class="card-text">${(propiedades.descripcion).slice(0,120)}...</p>
            <p class="card-text">Precio: ${propiedades.precio}</p>
            <a href="./details.html?id=${propiedades._id}" class="btn btn-dark">Mas...</a>
            </div>
            </div>
        `;
        }
    });
    container.innerHTML = listado
} 




export function filterCategoryFarmacia(lista) {
    return lista.filter(element =>element.categoria === "farmacia" )
} 


export function filterCategoryJugueteria(lista) {
    return lista.filter(element =>element.categoria === "jugueteria" )
}



export function buscador (lista, input) {
    let listado = lista.filter(element => element.producto.toLowerCase().includes(input.toLowerCase()));
    if (!listado){
        return console.log(error)
    }else {
        return listado

    }
    } 
    