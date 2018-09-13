var crel = require('crel')

require('../css/main.css')

function toggleColorC(btn) {
	var buttonClass = btn.classList
	buttonClass.remove('button-secondary', 'pure-button')
	buttonClass.add('button-success', 'pure-button')
}

function toggleColorW(btn) {
	var buttonClass = btn.classList
	buttonClass.remove('button-secondary', 'pure-button')
	buttonClass.add('button-error', 'pure-button')
}

function checkAnswer(btn, answer) {
	btn1 = btn.textContent
	btn1 = btn1.replace(/\n|\r/g, "")
	
	if (btn1 == answer) {
		toggleColorC(btn)
		return true
	} else {
		toggleColorW(btn)
		return false
	}
}

function renderQuiz(quiz) {
	var component = crel('div')
	var answer = quiz.CorrectAnswer
	var btn1 = crel('button', {class: 'button-secondary pure-button'}, quiz.A)
	var btn2 = crel('button', {class: 'button-secondary pure-button'}, quiz.B)
	var btn3 = crel('button', {class: 'button-secondary pure-button'}, quiz.C)
	
	btn1.addEventListener('click', function() {
		checkAnswer(btn1, answer)
	})
	btn2.addEventListener('click', function() {
		checkAnswer(btn2, answer)
	})
	btn3.addEventListener('click', function() {
		checkAnswer(btn3, answer)
	})
		
	return crel(component,
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