fetch('data/taller.json')
    .then((response) => response.json())
    .then(data => {
        const tableContainer = document.getElementById("tabla");
        let tabla = '';
        data.computadores.forEach(function(informacion) {
            tabla += `<tr>
                        <td>${informacion.nombre}</th>
                        <td>${informacion.descripcion}</td>
                        <td>${informacion.precio}</td>
                        <td>${informacion.imagen}</td>
                    </tr>`
        });
        tableContainer.innerHTML= tabla;

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

    })