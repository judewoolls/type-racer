const easyTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question."
];

const mediumTexts = [
    "All that glitters is not gold.",
    "A picture is worth a thousand words.",
    "Actions speak louder than words."
];

const hardTexts = [
    "The only thing we have to fear is fear itself.",
    "In the beginning God created the heavens and the earth.",
    "To infinity and beyond!"
];

document.getElementById('difficulty').addEventListener('change', function() {
    const difficulty = document.getElementById('difficulty').value;
    let selectedText = '';

    if (difficulty === 'easy') {
        selectedText = easyTexts[Math.floor(Math.random() * easyTexts.length)];
    } else if (difficulty === 'medium') {
        selectedText = mediumTexts[Math.floor(Math.random() * mediumTexts.length)];
    } else if (difficulty === 'hard') {
        selectedText = hardTexts[Math.floor(Math.random() * hardTexts.length)];
    }

    document.getElementById('game-text').innerText = selectedText;
    document.getElementById('difficulty-text').innerText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
});

let startTime;
let endTime;
let testStarted = false;

function enableInput() {
    document.getElementById('user-input').value = ''; // Clear user input
    document.getElementById('user-input').disabled = false; // Enable user input
    document.getElementById('user-input').focus(); // Focus on user input
    document.getElementById('start-button').disabled = true; // Disable start button
    document.getElementById('stop-button').disabled = false; // Enable stop button
}

function startTest() {
    startTime = new Date();
    testStarted = true;
}

function stopTest() {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    const timeTakenMinutes = timeTaken / 60; // Time in minutes
    const userInput = document.getElementById('user-input').value;
    const wordCount = userInput.trim().split(/\s+/).length; // Count words
    const wpm = wordCount / timeTakenMinutes; // Calculate WPM

    document.getElementById('time-text').innerText = timeTaken.toFixed(2) + 's';
    document.getElementById('wpm-text').innerText = wpm.toFixed(2);
    document.getElementById('start-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('user-input').disabled = true; // Disable user input
    testStarted = false;
}

document.getElementById('user-input').disabled = true;
document.getElementById('start-button').addEventListener('click', enableInput);
document.getElementById('stop-button').addEventListener('click', stopTest);

document.getElementById('user-input').addEventListener('input', function() {
    if (!testStarted) {
        startTest();
    }

    const gameText = document.getElementById('game-text').innerText.split(' ');
    const userInput = document.getElementById('user-input').value.split(' ');

    let feedbackHTML = '';
    for (let i = 0; i < gameText.length; i++) {
        if (userInput[i] === undefined) {
            feedbackHTML += `<span>${gameText[i]}</span> `;
        } else if (userInput[i] === gameText[i]) {
            feedbackHTML += `<span class="correct-word">${gameText[i]}</span> `;
        } else {
            feedbackHTML += `<span class="incorrect-word">${gameText[i]}</span> `;
        }
    }

    document.getElementById('game-text').innerHTML = feedbackHTML;
});

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action of the Enter key
        stopTest();
    }
});