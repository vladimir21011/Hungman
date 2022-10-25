let guessedLetters = 0;

export function checkLetter(inputLetter, wordByLetter) {
    return wordByLetter.some((letter) => inputLetter === letter)
}

export function showLetters(outWord, inputValue, buttonCheck, message) {
    for (const child of outWord.children) {
        if (child.className === inputValue) {
            child.innerText = inputValue;
            ++guessedLetters;
        }
    }

    if (outWord.children.length === guessedLetters) {
        buttonCheck.disabled = true;
        message.textContent = 'Красиво делаешь, Олежа';
        message.style.color = '#43a047';
        message.style.display = 'block';
    }
}
