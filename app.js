let nombres = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    nombreInput.value = '';
    nombreInput.focus();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nombres.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert('La lista está vacía. Agrega al menos un nombre.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];

    document.getElementById('resultado').textContent = `El nombre sorteado es: ${nombreSorteado}`;
}