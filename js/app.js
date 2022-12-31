//sum of two number
let a = Number(prompt('Enter first Number:'));
let b = Number(prompt('Enter second Number:'));
let p = document.querySelector('.demo');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    p.textContent = `Sum of two number is: ${a + b}`;
})
