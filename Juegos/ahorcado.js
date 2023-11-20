let palabraSecreta;
let palabraMostrada;
let intentosRestantes;
let letrasIncorrectas;

function setup() {
  const canvasWidth = windowWidth * 0.8;
  const canvasHeight = windowHeight * 0.8;
  createCanvas(canvasWidth, canvasHeight);
  iniciarJuego();
}

function draw() {
  background(220);

  // Mostrar la palabra
  textAlign(CENTER, CENTER);
  textSize(32);
  text(palabraMostrada.join(' '), width / 2, height / 2);

  // Mostrar intentos restantes
  textSize(20);
  text(`Intentos restantes: ${intentosRestantes}`, width / 2, height - 50);

  // Mostrar letras incorrectas
  text(`Letras incorrectas: ${letrasIncorrectas.join(', ')}`, width / 2, height - 20);

  // Verificar si se ha perdido
  if (intentosRestantes === 0) {
    textSize(32);
    text('Perdiste. La palabra era: ' + palabraSecreta.join(''), width / 2, height / 2 + 50);
  }

  // Verificar si se ha ganado
  if (!palabraMostrada.includes('_')) {
    textSize(32);
    text('¡Ganaste!', width / 2, height / 2 + 50);
    // Reiniciar el juego después de un breve tiempo
    setTimeout(() => iniciarJuego(), 2000);
  }
}

function keyPressed() {
  // Verificar si la tecla presionada es una letra
  if (key.length === 1 && key.match(/[a-z]/i)) {
    verificarLetra(key.toLowerCase());
  }
}

function iniciarJuego() {
  // Lista de palabras para elegir
  const palabras = ["javascript", "programacion", "computadora", "desarrollo", "web", "tecnologia"];

  // Elegir una palabra aleatoria
  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)].split('');
  palabraMostrada = palabraSecreta.map(() => '_');
  intentosRestantes = 6;
  letrasIncorrectas = [];
}

function verificarLetra(letra) {
  // Verificar si la letra está en la palabra
  if (palabraSecreta.includes(letra)) {
    // Mostrar la letra en las posiciones correctas
    palabraSecreta.forEach((letraPalabra, index) => {
      if (letraPalabra === letra) {
        palabraMostrada[index] = letra;
      }
    });
  } else {
    // Restar un intento y registrar la letra incorrecta
    intentosRestantes--;
    letrasIncorrectas.push(letra);
  }

  // Verificar si se ha ganado
  if (!palabraMostrada.includes('_')) {
    textSize(32);
    text('¡Ganaste!', width / 2, height / 2 + 50);
    // Reiniciar el juego después de un breve tiempo
    setTimeout(() => iniciarJuego(), 2000);
  }
}

// Redimensionar el lienzo cuando se redimensiona la ventana
function windowResized() {
  const canvasWidth = windowWidth * 0.8;
  const canvasHeight = windowHeight * 0.8;
  resizeCanvas(canvasWidth, canvasHeight);
}
let canvas;

function setup() {
  canvas = createCanvas(800, 600);
  centerCanvas();
  iniciarJuego();
}

function windowResized() {
  centerCanvas();
}

function centerCanvas() {
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);
}