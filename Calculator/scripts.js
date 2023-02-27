let allButtons = document.querySelectorAll('.form-button');
allButtons.forEach((element) => element.addEventListener('click', (e) => e.preventDefault()));
let firstInput = document.querySelector('.first');
let secondInput = document.querySelector('.second');
let sumButton = document.querySelector('.sum');
let resButton = document.querySelector('.res');
let multiplyButton = document.querySelector('.mul');
let divideButton = document.querySelector('.div');
let mainForm = document.querySelector('.calculator-container');
let pushResults = document.createDocumentFragment();

function check() {
    let toDelete = document.querySelector('.results');
    if (toDelete) mainForm.removeChild(toDelete); 

    let msg = '';
    if (firstInput.value.length === 0 || secondInput.value.length === 0) {
        msg += 'Hay campos vacios';
    };
    if (isNaN(firstInput.value) || isNaN(secondInput.value)) {
        (msg.length > 0) 
            ? msg += '. Hay campos que no son numeros.'
            : msg += 'Hay campos que no son numeros.';
    };
    return msg;
};

function create() {
    let spanElement = document.createElement('span');
    spanElement.className = 'results';
    let pElement = document.createElement('p');
    pElement.className = 'results-p';

    return [spanElement, pElement];
};

function show(span, fragment, form, p) {
    span.appendChild(p);
    fragment.appendChild(span);
    form.appendChild(fragment);
    // span.style.top = '-5vh';
};

sumButton.addEventListener('click', (e) => {
    let result = check();
    let results = create()[0];
    let parrafo = create()[1];

    if (result.length > 0) {
        results.className += ' error';
        parrafo.innerHTML = `&#10807 Error: ${result}`;
    } else {
        let ans = parseInt(firstInput.value) + parseInt(secondInput.value);
        results.className += ' all-ok';
        parrafo.innerHTML = `Resultado: ${ans}`;
    };

    show(results, pushResults, mainForm, parrafo);
});

resButton.addEventListener('click', (e) => {
    let result = check();
    let results = create()[0];
    let parrafo = create()[1];

    if (result.length > 0) {
        results.className += ' error';
        parrafo.innerHTML = `&#10807 Error: ${result}`;
    } else {
        let ans = parseInt(firstInput.value) - parseInt(secondInput.value);
        results.className += ' all-ok';
        parrafo.innerHTML = `Resultado: ${ans}`;
    };

    show(results, pushResults, mainForm, parrafo);
});

multiplyButton.addEventListener('click', (e) => {
    let result = check();
    let results = create()[0];
    let parrafo = create()[1];

    if (result.length > 0) {
        results.className += ' error';
        parrafo.innerHTML = `&#10807 Error: ${result}`;
    } else {
        let ans = parseInt(firstInput.value) * parseInt(secondInput.value);
        results.className += ' all-ok';
        parrafo.innerHTML = `Resultado: ${ans}`;
    };

    show(results, pushResults, mainForm, parrafo);
});

divideButton.addEventListener('click', (e) => {
    let result = check();
    let results = create()[0];
    let parrafo = create()[1];

    if (result.length > 0) {
        results.className += ' error';
        parrafo.innerHTML = `&#10807 Error: ${result}`;
    } else {
        let ans = parseInt(firstInput.value) / parseInt(secondInput.value);
        results.className += ' all-ok';
        parrafo.innerHTML = `Resultado: ${ans}`;
    };

    show(results, pushResults, mainForm, parrafo);
});