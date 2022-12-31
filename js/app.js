//get nth character of a string
let a = prompt('Enter a String:');
let n = Number(prompt('Enter n value: '));

let p = document.querySelector('.demo');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    p.textContent = a[n-1];
})
