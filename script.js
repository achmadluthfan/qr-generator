const inputURL = document.querySelector('.url-value');
let urlValue = ''
inputURL.addEventListener('change', function () {
    urlValue = inputURL.value;
    return urlValue;
})

const resizeSection = document.querySelector('.resize'),
slider = resizeSection.querySelector('#slider'),
sampleImg = resizeSection.querySelector('img'),
sizeImg = resizeSection.querySelector('.size-img'),
doneButton = resizeSection.querySelector('button');

const overlay = document.querySelector(".overlay");

sizeButton = document.querySelector('#size-button');

sizeButton.addEventListener('click', function () {
    resizeSection.style.top = '10%';
    resizeSection.style.opacity = '1';
    resizeSection.style.zIndex = '100';
    overlay.style.left = '0';
    overlay.style.opacity = '1';
})

slider.addEventListener('input', function () {

    slider.addEventListener('change', function () {
        sampleImg.style.width = `${slider.value}px`;
        sampleImg.style.height = `${slider.value}px`;
    });
    sizeImg.innerHTML = `${slider.value} x ${slider.value} px`
});

doneButton.addEventListener('click', function () {
    resizeSection.style.top = '-1000px';
    resizeSection.style.opacity = '0';
    resizeSection.style.zIndez = '-1';
    overlay.style.left = '-5000px';
    overlay.style.opacity = '1';

});


const buttonGenerate = document.querySelector('#start-generate');
const qrResult = document.querySelector('.result img');
const resultSection = document.querySelector('.result');

const main = document.querySelector('main');

buttonGenerate.addEventListener('click', function () {

    buttonGenerate.innerText = 'Generating...';
    qrResult.src = `https://api.qrserver.com/v1/create-qr-code/?size=${slider.value}x${slider.value}&data=${urlValue}`;

    qrResult.addEventListener('load', function () {
        buttonGenerate.innerText = 'Generate';
        qrResult.style.width = Number(slider.value) + 'px';
        qrResult.style.height = Number(slider.value) + 'px';
    });

})
