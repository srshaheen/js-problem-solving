//GET TYPEOF VALUE
let a = prompt('Enter first Number:');

let p = document.querySelector('.demo');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    p.textContent = typeof a;
})
