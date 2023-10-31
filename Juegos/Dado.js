// Inicio Juego Dado (If)
var botonIniciarJuego = document.getElementById('iniciarJuego');
var botonLanzar = document.getElementById('lanzarDado');
var resultado = document.getElementById('resultado');
var puntajeJugador1 = document.getElementById('puntajeJugador1');
var puntajeJugador2 = document.getElementById('puntajeJugador2');
var jugadorActual = document.getElementById('jugadorActual');
var botonReiniciar = document.getElementById('reiniciar');
var nombreJugador1Label = document.getElementById('nombreJugador1Label');
var nombreJugador2Label = document.getElementById('nombreJugador2Label');
var nombreJugador1Input = document.getElementById('nombreJugador1');
var nombreJugador2Input = document.getElementById('nombreJugador2');
var nombres = document.getElementById('nombres');


var puntaje1 = 0;
var puntaje2 = 0;
var jugador = 1;


function lanzarDado() {
    var numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    return numeroAleatorio;
}


function cambiarJugador() {
    jugador = (jugador === 1) ? 2 : 1;
    jugadorActual.textContent = (jugador === 1) ? nombreJugador1Input.value : nombreJugador2Input.value;
}


botonIniciarJuego.addEventListener('click', function () {
    var nombreJugador1 = nombreJugador1Input.value.trim();
    var nombreJugador2 = nombreJugador2Input.value.trim();

    if (nombreJugador1 !== '' && nombreJugador2 !== '') {
        nombreJugador1Label.textContent = nombreJugador1 + ': ';
        nombreJugador2Label.textContent = nombreJugador2 + ': ';
        jugadorActual.textContent = nombreJugador1;
        botonIniciarJuego.style.display = 'none';
        botonLanzar.disabled = false;
        nombreJugador1Input.style.display = 'none';
        nombreJugador2Input.style.display = 'none';
        nombres.style.display = 'none'; 
    }
});


botonLanzar.addEventListener('click', function () {

    var resultadoLanzamiento = lanzarDado();
    resultado.textContent = 'Resultado: ' + resultadoLanzamiento;


    if (jugador === 1) {
        puntaje1 += resultadoLanzamiento;
        puntajeJugador1.textContent = puntaje1;
    } else {
        puntaje2 += resultadoLanzamiento;
        puntajeJugador2.textContent = puntaje2;
    }


    if (resultadoLanzamiento % 2 !== 0) {
        resultado.textContent += ' (Impar)';
        cambiarJugador();
    }


    if (puntaje1 % 2 !== 0 && puntaje2 % 2 !== 0) {
        var mensaje = '';
        if (puntaje1 > puntaje2) {
            mensaje = nombreJugador1Input.value + ' gana!';
        } else if (puntaje2 > puntaje1) {
            mensaje = nombreJugador2Input.value + ' gana!';
        } else {
            mensaje = '¡Empate!';
        }
        resultado.textContent = mensaje;
        botonLanzar.disabled = true;
        botonReiniciar.style.display = 'block';
    }
});


botonReiniciar.addEventListener('click', function () {
    location.reload();
});