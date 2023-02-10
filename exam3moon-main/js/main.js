const openbtn = document.getElementById('openbtn')
const boxzak = document.querySelector('.openlest')
const dicop = document.getElementById('dic');
const control = document.querySelector('.control')


openbtn.addEventListener('click', function() {
    boxzak.classList.add('mover')
})
dicop.addEventListener('click', function() {
    boxzak.classList.remove('mover')
});









