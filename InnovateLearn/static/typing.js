document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById('game-container');
    const scoreElement = document.getElementById('score');
    let score = 0;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let currentIndex = 0;

    function nextLetter() {
        const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
        gameContainer.textContent = letter;
        responsiveVoice.speak(letter);
    }

    function increaseScore() {
        score++;
        scoreElement.textContent = score;
    }

    nextLetter();

    document.addEventListener('keypress', function(event) {
        const typedLetter = String.fromCharCode(event.charCode).toLowerCase();
        const currentLetter = gameContainer.textContent.toLowerCase();

        if (typedLetter === currentLetter) {
            increaseScore();
            nextLetter();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById('game-container');
    const scoreElement = document.getElementById('score');
    let score = 0;

    const basicWords = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    let currentIndex = 0;

    function nextWord() {
        const word = basicWords[Math.floor(Math.random() * basicWords.length)];
        gameContainer.textContent = word;
        responsiveVoice.speak(word);
    }

    function increaseScore() {
        score++;
        scoreElement.textContent = score;
    }

    nextWord();

    document.addEventListener('keypress', function(event) {
        const typedWord = gameContainer.textContent.toLowerCase();
        if (event.key === 'Enter') {
            increaseScore();
            nextWord();
        }
    });
});
