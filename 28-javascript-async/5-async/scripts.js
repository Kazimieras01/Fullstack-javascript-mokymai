let mygtukai = document.querySelectorAll('.informacija .mygtukai button');
let atsakymoBlokas = document.querySelector('.informacija .turinys');

mygtukai.forEach((mygtukas) => {
    // console.log(mygtukas);
    mygtukas.addEventListener('click', () => {
        // console.log(mygtukas.attributes['data-file'].value);
        let failas = mygtukas.attributes['data-file'].value;
        fetch(failas).then(atsakymas => {
            // console.log("gautas atsakymas:", atsakymas);
            return atsakymas.json();
        }).then(duomenys => {
            // console.log('atsakymas geras:', duomenys);
            switch (failas) {
                case 'projektai.json': spausdintiProjektus(duomenys); break;
                case 'darbuotojai.json': spausdintiDarbuotojus(duomenys); break;
                case 'uzduotys.json': spausdintiUzduotis(duomenys); break;
            }
        }).catch(klaida => {
            // console.log('atsakymas blogas:', klaida);
            atsakymoBlokas.innerHTML = `<p>Įvyko klaida.</p>`;
        });
    });
});
function spausdintiProjektus(projektai) {
    let html = '';

    for (const projektas of projektai) {
        // console.log(projektas);
        html += `<div class="projektas">
                    <h3>${projektas.pavadinimas}</h3>
                    <p>Kaina ${projektas.kaina}</p>
                    <p>Aprasymas: ${projektas.aprasymas}</p>
                    <p><strong>ar atliktas?:</strong> ${projektas.ar_igyvendintas}</p>
                </div>`;
    }
    atsakymoBlokas.innerHTML = html;
    atsakymoBlokas.classList.add('projektai');
    atsakymoBlokas.classList.remove('darbuotojai', 'uzduotys');
}
function spausdintiDarbuotojus(darbuotojai) {
    let html = '';
    for (const darbuotojas of darbuotojai) {
        // console.log(darbuotojas);
        html += `<div class="darbuotojas">
                    <h3>${darbuotojas.vardas} ${darbuotojas.pavarde}</h3>
                    <p>Dirba ${darbuotojas.etatas} etatu.</p>
                    <p><strong>Uždirba:</strong> ${darbuotojas.atlyginimas} €/mėn.</p>
                </div>`;
       }
    atsakymoBlokas.innerHTML = html;
    atsakymoBlokas.classList.add('darbuotojai');
    atsakymoBlokas.classList.remove('projektai', 'uzduotys');
}

function spausdintiUzduotis(uzduotys) {
    let html = '';
    for (const uzduotis of uzduotys) {
        // console.log(darbuotojas);
        html += `<div class="uzduotis">
                    <h3>${uzduotis.uzduotis}</h3> 
                    <h4>Atlikti iki: ${uzduotis.terminas}</h4>
                    <p>Prioritetas ${uzduotis.prioritetas} </p>
                    <p><strong>ar atlikta:</strong> ${uzduotis.ar_baigta}</p>
                </div>`;
       }
    atsakymoBlokas.innerHTML = html;
    atsakymoBlokas.classList.add('uzduotys');
    atsakymoBlokas.classList.remove('projektai', 'darbuotojai');
}