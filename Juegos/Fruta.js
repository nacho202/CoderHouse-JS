//Inicio minijuego Frutas(array)
var frutas = ["manzana", "platano", "uva", "naranja", "sandia"];
var frutaSeleccionada = "";
var letrasAdivinadas = [];
var intentosMaximos = 6;
var intentosRestantes = intentosMaximos;

function iniciarJuego() {
    frutaSeleccionada = frutas[Math.floor(Math.random() * frutas.length)];
    document.getElementById("frutaOculta").textContent = "???";
    document.getElementById("intentosRestantes").textContent = intentosMaximos;
    letrasAdivinadas = [];
    intentosRestantes = intentosMaximos;
    document.getElementById("letraIngresada").value = "";
    document.getElementById("mensajeResultado").textContent = "¿Puedes adivinar la fruta oculta?";
    document.getElementById("adivinarLetraBoton").disabled = false;
    document.getElementById("reiniciarJuegoBoton").disabled = true;
}

function adivinarLetra(letra) {
    if (intentosRestantes > 0) {
        if (frutaSeleccionada.includes(letra)) {
            letrasAdivinadas.push(letra);
            document.getElementById("frutaOculta").textContent = obtenerFrutaOculta();
            if (todasLasLetrasAdivinadas()) {
                document.getElementById("mensajeResultado").textContent = "¡Has adivinado la fruta! La respuesta es " + frutaSeleccionada + ".";
                document.getElementById("adivinarLetraBoton").disabled = true;
                document.getElementById("reiniciarJuegoBoton").disabled = false;
            } else {
                document.getElementById("mensajeResultado").textContent = "¡Correcto! Letras adivinadas: " + letrasAdivinadas.join(", ");
            }
        } else {
            intentosRestantes--;
            document.getElementById("intentosRestantes").textContent = intentosRestantes;
            if (intentosRestantes === 0) {
                document.getElementById("mensajeResultado").textContent = "¡Perdiste! La fruta era " + frutaSeleccionada + ".";
                document.getElementById("adivinarLetraBoton").disabled = true;
                document.getElementById("reiniciarJuegoBoton").disabled = false;
            }
        }
    } else {
        document.getElementById("mensajeResultado").textContent = "¡Ya has agotado tus intentos!";
        document.getElementById("adivinarLetraBoton").disabled = true;
        document.getElementById("reiniciarJuegoBoton").disabled = false;
    }
}

function obtenerFrutaOculta() {
    var frutaOculta = "";
    for (var i = 0; i < frutaSeleccionada.length; i++) {
        var letra = frutaSeleccionada[i];
        if (letrasAdivinadas.includes(letra)) {
            frutaOculta += letra;
        } else {
            frutaOculta += "?";
        }
    }
    return frutaOculta;
}

function todasLasLetrasAdivinadas() {
    return frutaSeleccionada.split("").every(function (letra) {
        return letrasAdivinadas.includes(letra);
    });
}

document.getElementById("adivinarLetraBoton").addEventListener("click", function () {
    var letraIngresada = document.getElementById("letraIngresada").value;
    if (letraIngresada) {
        adivinarLetra(letraIngresada.toLowerCase());
    }
});

document.getElementById("reiniciarJuegoBoton").addEventListener("click", iniciarJuego);

iniciarJuego();