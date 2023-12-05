let nukeliauta = 0;
let kelionesTikslas = 3210;

while (nukeliauta < kelionesTikslas) {
    let nukeliautaPerDiena = Math.floor(Math.random() * 300) + 200;
    nukeliauta += nukeliautaPerDiena;
    console.log('Šiandien nukeliauta:', nukeliautaPerDiena);
    console.log('Is viso nukeliauta:', nukeliauta);
    let procentai = nukeliauta * 100 / kelionesTikslas;
    console.log(`Atlikta projekto: ${procentai}%`);
}