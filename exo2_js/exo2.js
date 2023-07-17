// Declaration et init des blocks
const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const block4 = document.querySelector('.block4');

block1.addEventListener('click', () => {
    block1.classList.toggle('vert');
})

block2.addEventListener('click', () => {
    block2.classList.toggle('rouge');
})
block3.addEventListener('click', () => {
    block3.classList.toggle('rouge');
})
block4.addEventListener('click', () => {
    block4.classList.toggle('rouge');
})