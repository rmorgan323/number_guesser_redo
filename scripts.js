
$(document).ready(function() {
	onLoadActions();
	});

var randomNumber
var topRangeValue = 100;
var bottomRangeValue = 0;

$('.guess-button').on('click', enterGuess)
$('.clear-button').on('click', clearGuessInputField)
$('.reset-button').on('click', onLoadActions)
$('.range-left, .range-right').on('keyup', updateRange)

function updateRange() {
	topRangeValue = parseInt($('.range-right').val());
	bottomRangeValue = parseInt($('.range-left').val());
	generateRandomNumber();
}

function onLoadActions() {
	generateRandomNumber();
	$('.top-text').text(`Guess my number between ${bottomRangeValue} and ${topRangeValue}!`);
	$('.guess-display').text('-');
	$('.bottom-text').text('-');
	$('.range-left').val(0);
	$('.range-right').val(100);
	clearGuessInputField();
}

function generateRandomNumber() {
	randomNumber = Math.floor((Math.random() * (topRangeValue - bottomRangeValue + 1)) + bottomRangeValue);
	console.log(randomNumber, topRangeValue, bottomRangeValue)
}

function enterGuess(e) {
	e.preventDefault();
	displayTopText();
	displayGuess();
	displayBottomText();
}

function displayTopText() {
	var guessInputValue = $('.guess-input').val();
	var topText = $('.top-text');
	if (guessInputValue == randomNumber) {
		topText.text('How about that?'); 
	} else {
		topText.text('Your last guess was:');
	}
}

function displayGuess() {
	var guessInputValue = $('.guess-input').val();
	var guessDisplay = $('.guess-display');
	guessDisplay.text(guessInputValue);
}

function displayBottomText() {
	var guessInputValue = $('.guess-input').val();
	var bottomText = $('.bottom-text');
	if (guessInputValue < randomNumber) {
		bottomText.text('that is too low');
	} else if (guessInputValue > randomNumber) {
		bottomText.text('that is too high');
	} else {
		bottomText.text('BLAM!');
	}
}



function clearGuessInputField() {
	$('.guess-input').val('');
}