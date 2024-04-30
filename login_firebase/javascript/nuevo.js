document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown-1');
    const select = dropdown.querySelector('.select-2');
    const caret = dropdown.querySelector('.caret-1');
    const menu = dropdown.querySelector('.menu-1');
    const options = dropdown.querySelectorAll('.menu-1 li');
    const selected = dropdown.querySelector('.selected-2');

    select.addEventListener('mouseenter', () => {
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
                opt.classList.remove('active-1');
            });
            option.classList.add('active-1');
        });
    });

    // Cerrar el dropdown cuando se hace clic fuera de él
    document.addEventListener('mousedown', (event) => {
        if (!dropdown.contains(event.target)) {
            menu.classList.remove('menu-open');
        }
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('menu-open');
    });
});
