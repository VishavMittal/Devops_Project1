const questions = [
    {
        question: "Largest animal in the world?",
        answers: [
            { text: "Russia", correct: false },
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "Vatican City", correct: true }
        ]
    },
    {
        question: "Which is the most populated country in the world?",
        answers: [
            { text: "Russia", correct: true },
            { text: "Nepal", correct: false },
            { text: "China", correct: false },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "Who is the Founder of Meta (Facebook)?",
        answers: [
            { text: "Elon Musk", correct: false },
            { text: "Bill Gates", correct: false },
            { text: "Satya Nadella", correct: false },
            { text: "Mark Zuckerberg", correct: true }
        ]
    },
    {
        question: "Who is the CEO of twitter(X)?",
        answers: [
            { text: "Elon Musk", correct: true },
            { text: "Mark Zuckerberg", correct: false },
            { text: "Jeff Bezos", correct: false },
            { text: "Timothy Stokely", correct: false }
        ]
    },
    {
        question: "Which is the most populated country in the world?",
        answers: [
            { text: "Russia", correct: false },
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "Vatican City", correct: true }
        ]
    },
    {
        question: "Most spoken language in the world?",
        answers: [
            { text: "Hindi", correct: false },
            { text: "japenese", correct: false },
            { text: "english", correct: true },
            { text: "chinese", correct: false }
        ]
    },
    {
        question: "World's top cell phone brand in the world?",
        answers: [
            { text: "Russia", correct: false },
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "Vatican City", correct: true }
        ]
    },
    {
        question: "Which is the most populated country in the world?",
        answers: [
            { text: "Russia", correct: false },
            { text: "china", correct: false },
            { text: "India", correct: true },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "Which is the most populated country in the world?",
        answers: [
            { text: "Russia", correct: false },
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "Vatican City", correct: true }
        ]
    },
    {
        question: "Which is the most spoken language in India?",
        answers: [
            { text: "Punjabi", correct: false },
            { text: "Tamil", correct: false },
            { text: "English", correct: false },
            { text: "Hindi", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();    