let randomNumber = 0;
let countdownValue = 5;
let countdownInterval;

// Seleccionar elementos del DOM
const userInput = document.getElementById("userInput");
const countdownDiv = document.getElementById("countdown");
const resultDiv = document.getElementById("result");
const restartButton = document.getElementById("restart");

// Función para iniciar el juego
function startGame() {
  resetGame();
  randomNumber = Math.floor(Math.random() * 3) + 1; // Número aleatorio del 1 al 3
  countdownValue = 5;

  // Mostrar la cuenta atrás
  countdownDiv.textContent = `Cuenta atrás: ${countdownValue}`;
  countdownInterval = setInterval(updateCountdown, 1000); // Actualizar cada segundo
}

// Función para actualizar la cuenta atrás
function updateCountdown() {
  countdownValue--;
  countdownDiv.textContent = `Cuenta atrás: ${countdownValue} segundos`;
  if (countdownValue === 0) {
    clearInterval(countdownInterval);
    evaluateResult();
  }
}

// Función para evaluar el resultado
function evaluateResult() {
  const userValue = parseInt(userInput.value);
  if (userValue >= 1 && userValue <= 3) {
    if (userValue === randomNumber) {
      resultDiv.innerHTML = `<h2>¡Has salvado el mundo!</h2> <p>Elegiste ${userValue} y el número correcto era ${randomNumber}.</p>`;
    } else {
      resultDiv.innerHTML = `<h2>¡La bomba ha estallado!</h2> <p>Elegiste ${userValue}, pero el número correcto era ${randomNumber}.</p>`;
    }
  } else {
    resultDiv.textContent = "Por favor, introduce un número válido (1-3).";
  }
}

// Función para reiniciar el juego
function resetGame() {
  clearInterval(countdownInterval);
  countdownDiv.textContent = "";
  resultDiv.textContent = "";
  userInput.value = "";
}

// Evento para iniciar el juego al interactuar con el input
userInput.addEventListener("change", startGame);
userInput.addEventListener("blur", startGame);

// Evento para reiniciar el juego
restartButton.addEventListener("click", resetGame);