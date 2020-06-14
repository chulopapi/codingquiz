/*var count = 60, timer = setInterval(function() {
    $("#counter").html(count--);
    if(count == 1) clearInterval(timer);
}, 1000);*/


const startButton = document.getElementById('start')
/*const questionContainerElement = document.getElementById
('question-container')*/

startButton.addEventListener('timer', startGame)

function startGame () {
console.log('started')
startButton.classList.add('hide')
questionContainerElement.classlist.remove('hide')
setNextQuestion()

}

function setNextQuestion () {


}

function selectAnswer () {


}