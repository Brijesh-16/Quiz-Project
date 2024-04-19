const quizData = [
    {
        question: "Who invented the mouse?",
        options: ["Charles Babbage", "Martin Copper", "Douglas Engelbart", "Christopher Sholes"],
        answer: "Douglas Engelbart"
    },
    {
        question: "What is the time complexity of Merge Sort algorithm?",
        options: ["O(n)", " O(n log n)", "O(n^2)", "O(log n"],
        answer: "O(n log n)"
    },
    {
        question: "What is the SI unit of electric charge?",
        options: ["Ampere (A)", "Volt (V)", "Coulomb (C)", " Ohm (Ω)"],
        answer: "Coulomb (C)"
    },
    {
        question: "Which of the following is a type of heat exchanger?",
        options: ["Transformer", " Radiator", "Capacitor", "Diode"],
        answer: "Radiator"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    }
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = '#28a745';
        score++;
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.style.color = '#dc3545';
    }
    scoreElement.textContent = `Score: ${score}`;
    submitBtn.disabled = true;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        resultElement.textContent = '';
        submitBtn.disabled = false;
    } else {
        endQuiz();
    }
}

function endQuiz() {
        
        quizContainer.innerHTML = '';
        const completionContainer = document.createElement('div');
        completionContainer.classList.add('quiz-completion');

        const completionHeader = document.createElement('h2');
        completionHeader.textContent = 'Quiz Complete';
        completionContainer.appendChild(completionHeader);

        const finalScoreParagraph = document.createElement('p');
        finalScoreParagraph.textContent = `Your final score is: ${score} out of ${quizData.length}`;
        completionContainer.appendChild(finalScoreParagraph);

        quizContainer.appendChild(completionContainer);
}

submitBtn.addEventListener('click', nextQuestion);

loadQuestion();