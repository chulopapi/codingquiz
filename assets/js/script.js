/* This is a game that plays a Coding Quiz Challenge
Written my Marlon Guandique*/


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


/* We give only 60 seconds for the quiz to last */
var timer = 60;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

/* This is when the game starts */
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')

  var intervals = setInterval(function () {
    //console.log(timer);
    document.getElementById('time').textContent = timer;
    if (timer < 1) {
      gameover()
      clearInterval(intervals)
    }
    timer = timer - 1;
  }, 1000)
  setNextQuestion()
}

/* Function to keep track of the next question &  points manipulation*/
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  console.log("SA: ", correct);
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


function gameover() {
  document.getElementById('end-screen').setAttribute("class", "");
}

/*  Array that holds questions and answer for the game */
const questions = [
  {
    question: 'Commonly used data types DO Not include:',
    answers: [
      { text: '1. STRINGS', correct: true },
      { text: '2. BOOLEANS', correct: false },
      { text: '3. ALERTS', correct: false },
      { text: '4. NUMBERS', correct: false }
    ]
  },
  {
    question: 'The condition in an if / else statement is enclosed with______?',
    answers: [
      { text: '1. QUOTES', correct: false },
      { text: '2. CURLY BRACKETS', correct: false },
      { text: '3. PARENTHESIS', correct: true },
      { text: '4. SQUARE BRACKETS', correct: false }
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store______?',
    answers: [
      { text: '1. NUMBERS AND STRINGS', correct: false },
      { text: '2. OTHER ARRAYS', correct: false },
      { text: '3. BOOLEANS', correct: false },
      { text: '4. ALL OF THE ABOVE', correct: true }
    ]
  },
  {
    question: 'String values must be enclosed with in ______ when being assigned to variables.',
    answers: [
      { text: '1. COMMAS', correct: false },
      { text: '2. CURLY AND BRACKETS', correct: true },
      { text: '3. QUOTES', correct: false },
      { text: '4. PARENTHESIS', correct: false }
    ]
  }
]
