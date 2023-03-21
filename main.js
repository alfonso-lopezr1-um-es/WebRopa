const bicicletasContenedor = document.getElementById("ropa-contenedor");

// Obtener los datos de las bicicletas
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.bicicletas = data.bicicletas;
        // Mostrar las bicicletas en la página
        mostrarBicicletas();
    })
    .catch(error => console.error(error));

// Función para mostrar las bicicletas en la página
function mostrarBicicletas() {
    const bicicletasContenedor = document.getElementById("ropa-contenedor");
    bicicletasContenedor.innerHTML = "";

    // Obtener los valores seleccionados en los filtros
    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroMarca = document.getElementById("filtro-marca").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);

    // Recorrer cada bicicleta
    window.bicicletas.forEach(function (bicicleta) {
        // Comprobar si la bicicleta cumple con los criterios de los filtros
        if ((filtroModelo === "" || bicicleta.modelo === filtroModelo) && (filtroPrecio === 0 || bicicleta.precio <= filtroPrecio) && (filtroMarca === "" || bicicleta.marca === filtroMarca)
        ) {
            // Crear un elemento div para la bicicleta
            const bicicletaDiv = document.createElement("div");
            bicicletaDiv.classList.add("bicicleta");

            // Crear un enlace para la bicicleta
            /*
            const bicicletaEnlace = document.createElement("a");
            bicicletaEnlace.href = `aaaa.html?id=${bicicleta.id}`;
            bicicletaDiv.appendChild(bicicletaEnlace);*/

            // Crear una imagen para la bicicleta
            const bicicletaImg = document.createElement("img");
            bicicletaImg.src = bicicleta.img;
            bicicletaImg.alt = bicicleta.modelo;
            bicicletaDiv.appendChild(bicicletaImg);

            // Crear un h3 para el nombre de la bicicleta
            const bicicletaNombre = document.createElement("h3");
            bicicletaNombre.innerHTML = bicicleta.nombre;
            bicicletaDiv.appendChild(bicicletaNombre);

            // Crear un p para el modelo de la bicicleta
            const bicicletaModel = document.createElement("p");
            bicicletaModel.innerHTML = bicicleta.marca;
            bicicletaDiv.appendChild(bicicletaModel);

            // Crear un p para el precio de la bicicleta
            const bicicletaPrice = document.createElement("p");
            bicicletaPrice.innerHTML = bicicleta.precio + "€";
            bicicletaDiv.appendChild(bicicletaPrice);

            // Agregar el elemento div a la página
            bicicletasContenedor.appendChild(bicicletaDiv);
        }
    });
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar las bicicletas
document.getElementById("filtro-modelo").addEventListener("change", mostrarBicicletas);
document.getElementById("filtro-precio").addEventListener("change", mostrarBicicletas);
document.getElementById("filtro-marca").addEventListener("change", mostrarBicicletas);

window.onload = function () {
    var popup = document.querySelector('.popup');
    var popupClose = document.querySelector('.popup-close');

    popup.style.display = 'block';

    popupClose.onclick = function () {
        popup.style.display = 'none';
    };
};
