let klaiduZinutes = {
    ui87: 'Grafinės sąsajos klaida navigacijoje',
    sys12: 'Trūksta operatyviosios atminties sistemoje',
    db32: 'Duomenų bazės klaida, nepavyko prisijungti',
    net45: 'Nėra interneto ryšio, patikrinkite interneto jungtį',
    fs20: 'Failo sistemos klaida, nepavyko atidaryti failo'
};
let ivykusiosKlaidos = ['ui87', 'sys12', 'db32', 'net45', 'fs20'];

console.log('Administratoriui pranešamos klaidos:');
for (klaidosKodas of ivykusiosKlaidos) {
  let klaidosZinute = klaiduZinutes[klaidosKodas];
  if (klaidosZinute) {
    console.log(`${klaidosKodas}: ${klaidosZinute}`);
  } else {
    console.log(`${klaidosKodas}: Klaidos žinutė nerasta.`);
  }
};