document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('mouseenter', () => {
            closeOtherDropdowns(dropdowns, dropdown);
            select.classList.add('select-clicked');
            caret.classList.add('caret-rotate');
            menu.classList.add('menu-open');
        });

        options.forEach(option => { 
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');

                // Remover la clase 'active' de todas las opciones
                options.forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });

    // Cerrar todos los dropdowns cuando se hace clic fuera de ellos o el mouse sale del área del dropdown
    document.addEventListener('mousedown', (event) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.querySelector('.menu').classList.remove('menu-open');
            }
        });
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.menu').classList.remove('menu-open');
        });
    });

    function closeOtherDropdowns(allDropdowns, currentDropdown) {
        allDropdowns.forEach(dropdown => {
            if (dropdown !== currentDropdown) {
                dropdown.querySelector('.menu').classList.remove('menu-open');
            }
        });
    }
});

/* barra de busqueda */
const barra_busqueda = document.getElementById("barra_busqueda");
const inputSearch = document.getElementById("inputSearch");
const caja_de_busqueda = document.getElementById("caja_de_busqueda");

inputSearch.addEventListener('mouseout', () => {
    console.log('El mouse salió del área del inputSearch');
    inputSearch.value="";
});

// Creando filtrado de búsqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    const filtro = inputSearch.value.toUpperCase();
    const li = caja_de_busqueda.getElementsByTagName("li");

    // Recorre los elementos a filtrar
    for (let i = 0; i < li.length; i++) {
        const a = li[i].querySelector("a"); // Utiliza querySelector para obtener el primer elemento <a> dentro de li
        const textValue = a.textContent || a.innerText;
        if (textValue.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Event listener para activar y desactivar la búsqueda
document.addEventListener('DOMContentLoaded', function() {
    const inputSearch = document.getElementById('inputSearch');
    inputSearch.addEventListener('mouseover', function() {
        caja_de_busqueda.style.zIndex = "2"; // Establece directamente el z-index en 2
    });

    inputSearch.addEventListener('mouseout', function() {
        caja_de_busqueda.style.zIndex = ""; // Restaura el z-index a su valor predeterminado cuando el mouse sale del campo de búsqueda
    });
    function activarBusqueda() {
        inputSearch.disabled = false;
        caja_de_busqueda.style.display = 'block';
        clearTimeout(timer);
    }

    function desactivarBusquedaConRetraso() {
        timer = setTimeout(() => {
            inputSearch.disabled = true;
            caja_de_busqueda.style.display = 'none';
        }, 100);
    }

    inputSearch.addEventListener('mouseover', activarBusqueda);

    inputSearch.addEventListener('mouseout', function(event) {
        if (!caja_de_busqueda.contains(event.relatedTarget)) {
            desactivarBusquedaConRetraso();
        }
    });

    caja_de_busqueda.addEventListener('mouseout', function(event) {
        if (!inputSearch.contains(event.relatedTarget)) {
            desactivarBusquedaConRetraso();
        }
    });

    caja_de_busqueda.addEventListener('mouseover', function(event) {
        clearTimeout(timer);
    });

    const listaElementos = caja_de_busqueda.querySelectorAll('li');

    listaElementos.forEach(function(elemento) {
        elemento.addEventListener('mouseover', function(event) {
            clearTimeout(timer);
        });

        elemento.addEventListener('mouseout', function(event) {
            clearTimeout(timer);
        });
    });
});
