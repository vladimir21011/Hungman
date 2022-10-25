export function setNextImg(buttonCheck, input, message) {
    const currentImg = document.getElementById('img');
    const imgSrc = currentImg.src.split("/");
    const currentImgFile = imgSrc[imgSrc.length - 1];

    if (Number(currentImgFile.split(".")[0]) < 4) {
        const nextImg = currentImgFile.replace(`${currentImgFile.split(".")[0]}`, `${Number(currentImgFile.split(".")[0]) + 1}`);
        imgSrc.splice(-1, 1, nextImg);
        currentImg.src = imgSrc.join('/');
        input.value = "";

        if (nextImg.includes("4")) {
            buttonCheck.disabled = true;
            message.textContent = 'Вылерчик, ты проиграл!';
            message.style.display = 'block';
            input.disabled = true;
        }
    }
}
