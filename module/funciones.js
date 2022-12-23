
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
    <a href="./details.html?id=${propiedades._id}" class="btn btn-dark">Ver más...</a>
    <button href="" class="btn btn-warning" onclick="guardarFav(${propiedades._id})" id="${propiedades._id}"> Agregar al carrito <img class= "w-25 rounded-2" src="https://t4.ftcdn.net/jpg/03/18/62/29/240_F_318622912_IgyaJDXVei9YTsw2BWuJzQLxY6Mr6kDE.jpg"  alt="Carrito"> <br> Ultimas unidades!!! </button>
    
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
            <a href="./details.html?id=${propiedades._id}" class="btn btn-dark">ver más...</a>
            <button href="" class="btn btn-info" onclick="guardarFav(${propiedades._id})" id="${propiedades._id}" > Agregar al carrito <img class= "w-25 rounded-2" src="https://t4.ftcdn.net/jpg/03/18/62/29/240_F_318622912_IgyaJDXVei9YTsw2BWuJzQLxY6Mr6kDE.jpg" 
            alt="Carrito"> </button>
            </div>
            </div>
        `;
        }
    });
    container.innerHTML = listado
} 



let favoritos= []

function guardarFav(eventos) {
console.log("por favorrr")
}





export function filterCategoryFarmacia(lista) {
    return lista.filter(element =>element.categoria === "farmacia" )
} 


export function filterCategoryJugueteria(lista) {
    return lista.filter(element =>element.categoria === "jugueteria" )
}



export function buscador (lista, input) {
    return lista.filter(element => element.producto.toLowerCase().includes(input.toLowerCase()));
    } 
    