document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result');
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let questions = [];

    function startGame() {
        currentQuestionIndex = 0; // Reiniciar el índice de preguntas
        correctAnswers = 0;
        const apiUrl = 'questions.json'; // Reemplaza con tu archivo JSON de preguntas

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                questions = data;
                showQuestion();
            })
            .catch(error => console.error('Error fetching questions:', error));
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;

        // Limpiar opciones anteriores
        optionsContainer.innerHTML = '';

        // Agregar nuevas opciones
        currentQuestion.incorrect_answers.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option === currentQuestion.correct_answer));
            optionsContainer.appendChild(button);
        });

        // Agregar la opción correcta en una posición aleatoria
        const randomIndex = Math.floor(Math.random() * (currentQuestion.incorrect_answers.length + 1));
        const correctButton = document.createElement('button');
        correctButton.textContent = currentQuestion.correct_answer;
        correctButton.addEventListener('click', () => checkAnswer(true));
        optionsContainer.insertBefore(correctButton, optionsContainer.children[randomIndex]);

        // Limpiar resultado anterior
        resultContainer.textContent = '';
    }

    function checkAnswer(isCorrect) {
        if (isCorrect) {
            correctAnswers++;
        }

        resultContainer.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto.';

        // Después de unos segundos, oculta la pregunta y pasa automáticamente a la siguiente pregunta
        setTimeout(() => {
            questionContainer.textContent = '';
            optionsContainer.innerHTML = '';
            resultContainer.textContent = '';
            nextQuestion();
        }, 1000);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            // Fin del juego, mostrar mensaje
            const message = `Felicitaciones, adivinaste ${correctAnswers}/${questions.length} preguntas.`;
            resultContainer.textContent = message;
        }
    }

    // Comienza el juego cuando se carga la página
    startGame();
});
