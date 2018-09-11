var crel = require('crel')

require('../css/main.css')

function checkAnswer(btn, answer) {
	btnclass = btn.classList
	btn = btn.textContent
	btn = btn.replace(/\n|\r/g, "")
	
	if (btn == answer) {
		alert('Good Answer')
	} else {
		alert('Bad Answer')
	}
}

function renderQuiz(quiz) {
	var answer = quiz.CorrectAnswer
	var btn1 = crel('button', {class: 'pure-button pure-button-primary'}, quiz.A)
	var btn2 = crel('button', {class: 'pure-button pure-button-primary'}, quiz.B)
	var btn3 = crel('button', {class: 'pure-button pure-button-primary'}, quiz.C)
	
	btn1.addEventListener('click', function() {
		checkAnswer(btn1, answer)
	})
	btn2.addEventListener('click', function() {
		checkAnswer(btn2.textContent, answer)
	})
	btn3.addEventListener('click', function() {
		checkAnswer(btn3.textContent, answer)
	})
		
	return crel('div',
				crel('h3', quiz.Question),
				btn1, btn2, btn3)
}

function renderQuizzes(quizzes) {
	return quizzes.map(renderQuiz)
}

function renderPage(quizzes) {
	crel(document.body,
		 crel('div', renderQuizzes(quizzes)))
}

module.exports = renderPage