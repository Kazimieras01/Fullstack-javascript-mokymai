document.getElementById('siurprizas').addEventListener("click", event => {
    alert('laimejote automobili')
})
document.querySelector('#tekstas button').addEventListener('click', event => {
    event.target.nextElementSibling.textContent = "paspaudei mygtuka";
})
let mygtukai = document.querySelectorAll('#kitas button');
console.log(mygtukai);
mygtukai.forEach(mygtukas => {
    // console.log(mygtukas);
    mygtukas.addEventListener('click', event => {
        // console.dir(event.target);
        // console.log(event.target.textContent);
        let spanEl = document.querySelector('#kitas p span');
        spanEl.textContent = event.target.textContent;
    });
});

let mygDidinti = document.getElementById('didinti');
let mygMazinti = document.getElementById('mazinti');
let counterEl = document.querySelector('#counteris p strong')
//console.log(mygDidinti, mygMazinti, counterEl);

//  console.log({
//     'didinti mygtukas': mygDidinti,
//      'mazinti mygtukas': mygMazinti,
//      'counter strong elementas': counterEl,
// });

mygDidinti.addEventListener('click', () => {
    counterEl.textContent = parseInt(counterEl.textContent) + 1;
});
mygMazinti.addEventListener('click', () => {
    counterEl.textContent = parseInt(counterEl.textContent) - 1;
});

let blokas = document.getElementById('blokas');

blokas.addEventListener('click', () => {
    alert('Labas');
});
blokas.addEventListener('mouseover', () => {
    // console.log('veikia');
    document.getElementById('slaptas').textContent = 'O_O';
});