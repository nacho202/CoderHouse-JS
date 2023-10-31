// Función para generar un número aleatorio entre 1 y 10
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

// Función para adivinar el número
function adivinarNumero() {
    var numeroSecreto = parseInt(localStorage.getItem('numeroSecreto'));
    var intento = parseInt(document.getElementById('numeroInputX').value);

    if (!isNaN(intento)) {
        if (intento === numeroSecreto) {
            document.getElementById('resultadoX').textContent = '¡Adivinaste! El número secreto es ' + numeroSecreto;
            localStorage.setItem('numeroSecreto', generarNumeroSecreto()); // Genera y almacena un nuevo número secreto
        } else if (intento < numeroSecreto) {
            document.getElementById('resultadoX').textContent = 'El número secreto es mayor';
        } else {
            document.getElementById('resultadoX').textContent = 'El número secreto es menor';
        }
    } else {
        document.getElementById('resultadoX').textContent = 'Ingresa un número válido.';
    }
}
// Función para rendirse
function rendirse() {
    var numeroSecreto = localStorage.getItem('numeroSecreto');
    document.getElementById('resultadoX').textContent = 'El número secreto era ' + numeroSecreto;
    localStorage.removeItem('numeroSecreto');
    localStorage.setItem('numeroSecreto', generarNumeroSecreto());
}

// Inicialización del juego
if (!localStorage.getItem('numeroSecreto')) {
    localStorage.setItem('numeroSecreto', generarNumeroSecreto());
}

// Agregar manejadores de eventos a los botones
document.getElementById('adivinarBtn').addEventListener('click', adivinarNumero);
document.getElementById('rendirseBtn').addEventListener('click', rendirse);