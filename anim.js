const typewriterText = document.getElementById('typewriter-text');
const changingWord = document.getElementById('changing-word');
const blinkingCursor = document.getElementById('blinking-cursor');
const typingSpeed = 200; // Adjust the typing speed as needed (lower value makes it faster)
const eraseSpeed = 60; // Adjust the erasing speed as needed (lower value makes it faster)
const wordsToAnimate = ["hoodies.", "t-shirts.", "joggers.", "socks."];
let currentWordIndex = 0;

function typeWriter() {
    let i = 0;
    const currentWord = wordsToAnimate[currentWordIndex];
    const textLength = currentWord.length;

    function type() {
        if (i < textLength) {
            changingWord.textContent += currentWord.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else {
            // Wait for a short period before erasing the word
            setTimeout(eraseWord, 1000);
        }
    }

    function eraseWord() {
        const wordToErase = changingWord.textContent;
        if (wordToErase.length > 0) {
            changingWord.textContent = wordToErase.slice(0, -1);
            setTimeout(eraseWord, eraseSpeed);
        } else {
            // Move to the next word in the array and start typing again
            currentWordIndex = (currentWordIndex + 1) % wordsToAnimate.length;
            typeWriter();
        }
    }

    type();
}

function blinkCursor() {
    blinkingCursor.style.visibility = blinkingCursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    setTimeout(blinkCursor, 600); // Adjust the blinking speed here (lower value makes it faster)
}

window.onload = function () {
    typeWriter();
    blinkCursor();
};
