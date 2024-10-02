fetch('data/datos.json')
    .then((response) => response.json())
    .then(data => {

        const cardContainer = document.getElementById("cards");
        let cards = '';
        
        data.productos.forEach(function(informacion) {
            let rec = '';
            informacion.reseñas.forEach(function(reseña){
                
                rec += `<h1>${reseña.usuario}</h1>
                    <p>${reseña.comentario}</p>
                    <p>${reseña.calificacion}</p>
                    <p>${reseña.fecha}</p>`
            });
            

            cards +=
            ` <div class="col">
                <div class="card">
                <img src="${informacion.imagenes[0]}" class="card-img-top" alt="...">
                <img src="${informacion.imagenes[1]}" class="card-img-top" alt="...">
                <img src="${informacion.imagenes[2]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${informacion.nombre}</h5>
                        <h5 class="card-title">${informacion.categoria}</h5>
                        <p class="card-text">${informacion.descripcion}</p>
                        <h1 class="card-title">${informacion.precio}</h1>
                        <div>${rec}</div>
                    </div>
                </div>
            </div>`
            });
        cardContainer.innerHTML= cards;


        const tituloContainer = document.getElementById("titulo");
        const titulo = data.titulo_pagina;
        tituloContainer.innerHTML= titulo;

        const titulo1Container = document.getElementById("titulo1");
        const titulo1 = data.titulo_pagina;
        titulo1Container.innerHTML= titulo1;

        const nombreTienda = document.getElementById("nombre_tienda");
        nombreTienda.innerHTML = "Nombre: " + data.datos_tienda.nombre;

        const correoTienda = document.getElementById("correo_tienda");
        correoTienda.innerHTML = "Correo: " + data.datos_tienda.correo;

        const telefonoTienda = document.getElementById("telefono_tienda");
        telefonoTienda.innerHTML = "Telefono:" + data.datos_tienda.telefono;

        const direccionTienda = document.getElementById("direccion_tienda");
        direccionTienda.innerHTML = "Direccion:" + data.datos_tienda.direccion;

        const horarioTienda = document.getElementById("horario_tienda")
        
        let horario = '';
        horario =
        `<p>Lunes a Viernes: ${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
        <p>Sábados: ${data.datos_tienda.horario_atencion.sabados}</p>
        <p>Domingos: ${data.datos_tienda.horario_atencion.domingos}</p>`
        
        horarioTienda.innerHTML = horario;
        

    })