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

    document.getElementById('game-text').value = selectedText;
    document.getElementById('difficulty-text').innerText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
});

let startTime;
let endTime;

function startTest() {
    startTime = new Date();
    document.getElementById('start-button').disabled = true;
    document.getElementById('stop-button').disabled = false;
    document.getElementById('user-input').value = ''; // Clear user input
    document.getElementById('user-input').disabled = false; // Enable user input
    document.getElementById('user-input').focus(); // Focus on user input
}

function stopTest() {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    document.getElementById('time-text').innerText = timeTaken.toFixed(2) + 's';
    document.getElementById('start-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('user-input').disabled = true; // Disable user input
}

document.getElementById('user-input').disabled = true;
document.getElementById('start-button').addEventListener('click', startTest);
document.getElementById('stop-button').addEventListener('click', stopTest);