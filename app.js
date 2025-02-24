
// Arreglo para almacenar los nombres ingresados
let nombres = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtiene el input donde el usuario escribe el nombre
    const nombreInput = document.getElementById('amigo');
    // Obtiene el valor ingresado y elimina espacios extra al inicio y final
    const nombre = nombreInput.value.trim();

    // Valida que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Sale de la función si el campo está vacío
    }

    // Agrega el nombre al arreglo 'nombres'
    nombres.push(nombre);

    // Actualiza la lista en pantalla para mostrar el nuevo nombre
    actualizarLista();

    // Limpia el campo de texto y coloca el foco nuevamente para otro ingreso
    nombreInput.value = '';
    nombreInput.focus();
}

/**
 * Función para actualizar la lista de amigos en el DOM
 */
function actualizarLista() {
    // Obtiene el elemento <ul> o <ol> donde se mostrarán los nombres
    const lista = document.getElementById('listaAmigos');
    // Limpia la lista actual antes de agregar nuevos elementos
    lista.innerHTML = '';

    // Recorre el arreglo 'nombres' y agrega cada uno como un elemento <li>
    nombres.forEach((nombre) => {
        const li = document.createElement('li'); // Crea un nuevo <li>
        li.textContent = nombre; // Asigna el nombre como texto del <li>
        lista.appendChild(li); // Añade el <li> a la lista
    });
}

/**
 * Función para realizar el sorteo y mostrar un amigo al azar
 */
function sortearAmigo() {
    // Verifica que haya al menos un nombre en la lista antes de sortear
    if (nombres.length === 0) {
        alert('La lista está vacía. Agrega al menos un nombre.');
        return; // Sale de la función si no hay nombres
    }

    // Genera un índice aleatorio basado en la longitud del arreglo
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    // Selecciona el nombre correspondiente al índice aleatorio
    const nombreSorteado = nombres[indiceAleatorio];

    // Muestra el resultado del sorteo en un elemento con id 'resultado'
    document.getElementById('resultado').textContent = `El nombre sorteado es: ${nombreSorteado}`;
}
