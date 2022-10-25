import {WorkWithWord} from './modules/workWithWord.js';
import { inputHandler, checkButtonHandler, handleClickRestart } from './modules/workWithButton.js';

const outWord = document.getElementById('containerRandomWords');
const input = document.getElementById('input');
const buttonCheck = document.getElementById('button');
const buttonRestart = document.getElementById('buttonRestart');

const arrWords = [
  "cat",
  "rain",
  "money",
  "banana",
  "address",
  "mountain",
  "programmer",
];
 
const wordHandler = new WorkWithWord(arrWords, outWord);

const currentWord = wordHandler.getRandomWord();
const wordByLetter = wordHandler.getWordByLetter(currentWord);
wordHandler.hideWord(wordByLetter);

input.oninput = (event) => inputHandler(buttonCheck, event);
buttonCheck.onclick = () => checkButtonHandler(input, wordByLetter, outWord, buttonCheck);
buttonRestart.onclick = () => handleClickRestart();
