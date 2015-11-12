// Declare question object
var Question = function(questionId, questionText, answerValue){
	this.questionId = questionId;
	this.questionText = questionText;
	this.answerValue = answerValue;
};


// declares all the fuctions our question object can perform
Question.prototype = {
	evaluate: function(value) {
		if (value == this.answerValue) {
			return true;
		}
		return false;
	}
};

// declare questionDiv object -- holds HTML for a question
var QuestionDiv = function(question) {
	
	var checkQuestionFunctionString = "checkAnswer(event);";

	this.trueButton = "<input type='button' value='True' class='button' onclick='" + checkQuestionFunctionString + "' />";
	this.falseButton = "<input type='button' value='False' class='button' onclick='" + checkQuestionFunctionString + "' />";
	this.html = "<div class='textbox' id='" + question.questionId + "'><h1>" + question.questionText + "</h1>" + this.trueButton + this.falseButton + "</div>";

};


// Creating our question objects
var question1 = new Question("question1", "My dogs name is Woz.", "True");
var question2 = new Question("question2", "I live in Massachusettes.", "False");
var question3 = new Question("question3", "I was born in Rhode Island.", "True");

// create an array with all our question objects
var questions = [question1, question2, question3];


// loops over question objects and creates QuestionDiv for each question, writing QuestionDiv to HTML page
questions.forEach(function(question){
	var questionDiv = new QuestionDiv(question);
	document.write(questionDiv.html);
});


function checkAnswer(e) {
	var divQuestionId = e.srcElement.parentElement.id;
	var answerValue = e.srcElement.value;

	console.log(answerValue);
	console.log(divQuestionId);

	questions.forEach(function(question) {
		if(question.questionId == divQuestionId) {
			if (question.evaluate(answerValue)) {
				alert("correct!");
			} else {
				alert("incorrect");
			}
			return;
		}
	});
};


