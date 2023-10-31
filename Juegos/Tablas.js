//Inicio Minijuego Multiplicar (Bucle)
function comprobarMultiplicacion(numero) {
    var numeroObjetivoInput = document.getElementById(`resultado${numero}Input`);
    var resultadoElement = document.getElementById(`resultado${numero}`);
    
    var numeroObjetivo = parseInt(numeroObjetivoInput.value);

    if (!isNaN(numeroObjetivo)) {
        for (var i = 1; i <= 100; i++) {
            var multiplicacion = i * numero;
            if (multiplicacion === numeroObjetivo) {
                resultadoElement.textContent = `Correcto: ${i} x ${numero} = ${numeroObjetivo}`;
                return;
            }
        }
        resultadoElement.textContent = `No se encontró ninguna multiplicación que dé como resultado ${numeroObjetivo}`;
    } else {
        resultadoElement.textContent = 'Ingresa un número válido.';
    }
}