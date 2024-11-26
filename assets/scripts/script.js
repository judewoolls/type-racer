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
});