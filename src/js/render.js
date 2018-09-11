var crel = require('crel')

function checkAnswer(button, answer) {
	if (button == answer) {
		return alert('Good Answer')
	}
}

function renderQuiz(quiz) {
	console.log(quiz.Question)
	console.log(quiz.A)
	console.log(quiz.B)
	console.log(quiz.C)
	console.log(quiz.CorrectAnswer)
	
	var answer = quiz.CorrectAnswer
	var button1 = crel('button', quiz.A)
	var button2 = crel('button', quiz.B)
	var button3 = crel('button', quiz.B)
	
//	document.addEventListener('click', function () {
//		
//		
//	})
	
	
	return crel('div',
				crel('h2', quiz.Question),
				button1, button2, button3)
//		crel('button', quiz.A),
//		crel('button', quiz.B),
//		crel('button', quiz.C))
	
}

function renderQuizzes(quizzes) {
	return quizzes.map(renderQuiz)
}

function renderPage(quizzes) {
	crel(document.body,
		 crel('div', renderQuizzes(quizzes)))
}




module.exports = renderPage
