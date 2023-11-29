document.getElementById('mygtukas1').addEventListener("click", (e) => {
    alert('nespausk')});
let mygtukas2 = document.getElementById('mygtukas2');
mygtukas2.addEventListener('click', Event => {
    console.log(Event)});
mygtukas2.addEventListener('click', Event => {
        console.log(Event.target.textContent)});
        mygtukas2.addEventListener('click', event => {
            // console.log(event);
            // console.log(event.target.textContent);
            let mygtukoTekstas = event.target.textContent;
            alert('Buvo paspausta: ' + mygtukoTekstas);
        });
let mygtukas3 = document.querySelector('#info-perdavimas button');

mygtukas3.addEventListener('click', event => {
    // alert('paspaudziau');
    // document.querySelector('#info-perdavimas p') // 1-as variantas
    // mygtukas3.nextElementSibling // 2-as variantas
    // event.target.nextElementSibling // 3-as variantas
    mygtukas3.nextElementSibling.textContent = "paspaudziau ant trecio mygtuko";
});

let counterioBlokas = document.getElementById ('counteris')
let countMygtukas = counterioBlokas.querySelector('button');
let countUzrasas = counterioBlokas.querySelector('p span');

let counter = 0;

countMygtukas.addEventListener('click', () => {
    counter++;
    countUzrasas.textContent = counter;
    //countUzrasas.textContent = ++counter;
});

let reziuInput = document.querySelector('#reziai #skInput');
let reziuMygtukas = document.querySelector('#reziai button');
let reziuAts = document.querySelector('#reziai p');

reziuMygtukas.addEventListener('click', () => {
    // console.dir(reziuInput);
    // console.log(reziuInput.value);
    // console.log(parseInt(reziuInput.value));
    // console.log(reziuInput.valueAsNumber);

    if (reziuInput.valueAsNumber >= 1 && reziuInput.valueAsNumber <= 100) {
        // reziuAts.textContent = 'Skaičius patenka į rėžius.';
        reziuAts.textContent = `Skaičius ${reziuInput.valueAsNumber} patenka į rėžius.`;
    } else {
        reziuAts.textContent = 'Bandykite iš naujo.';
}});