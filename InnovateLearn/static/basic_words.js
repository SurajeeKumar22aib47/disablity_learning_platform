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
