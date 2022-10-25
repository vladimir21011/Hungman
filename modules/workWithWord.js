export class WorkWithWord {
    constructor(arrWords, outWord) {
        this.arrWords = arrWords;
        this.outWord = outWord;
    }

    getRandomWord() {
        return this.arrWords[Math.floor(Math.random() * (this.arrWords.length))]
    }

    getWordByLetter(word) {
        return word.split('');
    }

    hideWord(wordByLetter) {
        wordByLetter.forEach((letter) => {
            this.outWord.appendChild(document.createElement('div')).className = letter
        });
    }
}

