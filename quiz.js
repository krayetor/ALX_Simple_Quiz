// Declaration of function

function checkAnswer() {

    // Identifying the correct answer
    let correctAnswer = "4";

    // Retreive the user's selected answer
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');

    if(!selectedRadioButton) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedRadioButton.value;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done";
    }
    else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);