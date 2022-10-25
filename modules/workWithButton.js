import { checkLetter, showLetters } from './workWithLatter.js';
import { setNextImg } from './pictureReplacent.js';


const message = document.getElementById('message');

export function inputHandler(checkButton, event) {
    if (event) {
        checkButton.disabled = !event.target.value;
    }
}

export function checkButtonHandler(input, wordByLetter, outWord, buttonCheck) {
    const formattedInputValue = input.value.toLowerCase();
    const isLetterExist = checkLetter(formattedInputValue, wordByLetter);

    if (isLetterExist) {
        showLetters(outWord, formattedInputValue, buttonCheck, message);
        input.value = "";
    } else {
        setNextImg(buttonCheck, input, message)
    }
}

export function handleClickRestart() {
    return location.reload();
}
