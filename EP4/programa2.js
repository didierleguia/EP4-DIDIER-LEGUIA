
const minnum = document.getElementById('min');
const maxnum = document.getElementById('max');
const mostrarButton = document.getElementById('mostrar');
const lista = document.getElementById('numeros-lista');

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

mostrarButton.addEventListener('click', () => {
    const min = parseInt(minnum.value);
    const max = parseInt(maxnum.value);

    for (let i = 0; i < 20; i++) {
        const numero = generarNumeroAleatorio(min, max);
        const li = document.createElement('li');
        li.textContent = `${i + 1} - ${numero}`;
        lista.appendChild(li);
    }
   
});

