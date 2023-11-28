let PirmasParagrafas = document.querySelector('#blokas1 p.pirmas')
console.log(PirmasParagrafas.innerText);
console.log('pirmo paragrafo tekstas:', PirmasParagrafas.textContent);

let antroParTekstas = document.querySelector('#blokas1 p.antras').textContent;
console.log('antro paragrafo tekstas kitaip:', antroParTekstas);

console.log('trecio paragrafo tekstas:', document.querySelector('#blokas1 p.trecias').textContent);

let antroBlokoParagrafas = document.querySelector('#blokas2 p')
console.log(antroBlokoParagrafas.innerText);
console.log('antro bloko paragrafo tekstas:', antroBlokoParagrafas.textContent);

console.log('antro bloko paragrafo innerHTML:',antroBlokoParagrafas.innerHTML);
console.log('antro bloko paragrafo innerText:',antroBlokoParagrafas.innerText);
console.log('antro bloko paragrafo textContent:',antroBlokoParagrafas.textContent);

let par1 = document.querySelector('#blokas3 .par-1')
par1.textContent = 'Naujas TekStaS';

document.querySelector('#blokas3 .par-2').innerText = 'NauJaS KiTaS TeKsTaS';

document.querySelector('#blokas3 .par-3').innerText += ' PaPiLdYmAs';
document.querySelector('#blokas3 .par-4').innerHTML = 'Kaina: <span>20 €</span>';
document.querySelector('#blokas3 .par-5').textContent = 'KAINA: <span>20 €</span>';

let blokas4 = document.getElementById('blokas4');
console.dir(blokas4);

console.log('kaina:', blokas4.attributes['data-kaina'].value);
let bloko4Kaina = parseInt(blokas4.attributes['data-kaina'].value);

if (bloko4Kaina >= 10) {
    console.log('Didelė kaina');
} else {
    console.log('Maža kaina');
}
let blokas5 = document.getElementById('blokas5');
blokas5.innerHTML = "<p class='tekstukas'>pirma eilute</p>";
blokas5.innerHTML += '<p class="tekstukas">antra eilutė</p>';

let blokas6 = document.getElementById('blokas6');
let paragrafasNaujas = document.createElement('p');
paragrafasNaujas.textContent = 'NAUJAS paragrafas';
paragrafasNaujas.classList.add('tekstukas');
blokas6.appendChild(paragrafasNaujas);