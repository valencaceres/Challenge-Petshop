
//function render card



export function renderCard (listaEvents,container) {
    container.innerHTML = "";
    let listado = "";
    listaEvents.forEach((propiedades) => {
        if(propiedades.disponibles < 5 ) {
        listado += `
    <div class="card"> 
    <img src="https://www.portalveterinaria.com/upload/20200703080947schafer-dog-4357790_1920.jpg" class="card-img-top" alt="${propiedades.producto}">
    <div class="card-body">
    <h5 class="card-title text-center">${propiedades.producto}</h5>
    <p class="card-text">${propiedades.descripcion}</p>
    <div class= "container-p bg-warning p-2 text-center rounded">
    <p class= "mt-3" > Price: ${propiedades.precio} </p>
    <a id="information" href="./details.html?id=${propiedades._id}" class="btn btn-danger">Utimas unidades</a>
    </div>
    </div>
    </div>
`; 
        } else {
            listado += `
            <div class="card"> 
            <img src="https://www.portalveterinaria.com/upload/20200703080947schafer-dog-4357790_1920.jpg" class="card-img-top" alt="${propiedades.producto}">
            <div class="card-body">
            <h5 class="card-title text-center">${propiedades.producto}</h5>
            <p class="card-text">${propiedades.descripcion}</p>
            <div class= "container-p bg-warning p-2 text-center rounded">
            <p class= "mt-3" > Price: ${propiedades.precio} </p>
            <a id="information" href="./details.html?id=${propiedades._id}" class="btn btn-dark">More</a>
            </div>
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

