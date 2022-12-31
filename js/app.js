//sum of two number
let a = Number(prompt('Enter first Number:'));
let b = Number(prompt('Enter second Number:'));
let p = document.querySelector('.demo');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let result = (a === b) ? 'a and b are equal' : 'a and b are not equal';
    p.textContent = result;
})
