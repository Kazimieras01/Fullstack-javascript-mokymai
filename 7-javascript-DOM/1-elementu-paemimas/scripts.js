let pslPavadinimas = document.getElementById ('pavadinimas');
console.log('psulapio pavadinimo elementas:',pslPavadinimas);

console.log ('pirmas tekstas:', document.getElementById ('pirmas-tekstas'))

let blokas1 = document.getElementById('blokas1')
console.log('blokas1:', blokas1);

console.log("saraso elementas", document.getElementById ('saraso-el'));

console.log('pirmas saraso elementas:', document.querySelector ('ul li'));

let pirmasTekstas = document.querySelector ('p')
console.log('tekstas:', pirmasTekstas)

let kazkurioSarEl = document.querySelector('#blokas2 ul.antras li')
console.log('kazkurio saraso elementas:', kazkurioSarEl);

console.log('visi saraso elementai:', document.querySelectorAll ('ul li'));

console.log('blokas3:', document.getElementById ('blokas3'));

console.log('blokas3 spec paragrafai:', document.querySelectorAll ('.bl3-par'));

console.log('bloko 3 pirmas pargrafas', document.getElementById('pr3'));

console.log('visi paragrafai', document.querySelectorAll('p'));

let straipsniuBlokas = document.getElementById('straipsniai');
console.log ('straipsniu blokas:', straipsniuBlokas);

let straipsniai = straipsniuBlokas.querySelectorAll('article')
console.log('straipsniai:', straipsniai);

let StrAntrastes = straipsniuBlokas.querySelectorAll('h3');
console.log('straipsniu antrastes:', StrAntrastes);

let antrasStr = document.getElementById ('antras-str');
console.log('antras straipsnis:', antrasStr);

console.log("pries antra straipsni:", antrasStr.previousElementSibling);
console.log("uz antro straipsnio:", antrasStr.nextElementSibling);
console.log("antro straipsnio tevinis el:", antrasStr.parentElement);
console.log("antro straipsnio tevinio tevinis el:", antrasStr.parentElement.parentElement);