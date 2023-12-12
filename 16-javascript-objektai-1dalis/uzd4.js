let preke1 = {
    pavadinimas: 'Prekė 1',
    kaina: 50,
    savikaina: 20,
    kodas: 'P1',
    turimasKiekisSandelyje: 100,
    siuntimuiDezesMatmenys: { x: 10, y: 20, z: 15 }
};
  
let preke2 = {
    pavadinimas: 'Prekė 2',
    kaina: 35,
    savikaina: 15,
    kodas: 'P2',
    turimasKiekisSandelyje: 75,
    siuntimuiDezesMatmenys: { x: 12, y: 18, z: 10 }
};
  
let preke3 = {
    pavadinimas: 'Prekė 3',
    kaina: 80,
    savikaina: 30,
    kodas: 'P3',
    turimasKiekisSandelyje: 50,
    siuntimuiDezesMatmenys: { x: 8, y: 25, z: 20 }
};
  
  console.log('Pirma prekė:', preke1);
  console.log('Antra prekė:', preke2);
  console.log('Trečia prekė:', preke3);
  
  console.log(`Pirma prekė kainuoja - ${preke1.kaina}, antra prekė kainuoja - ${preke2.kaina}, trečia prekė kainuoja - ${preke3.kaina}`);
  
let brangiausiaPreke = preke1;
  if (preke2.kaina > brangiausiaPreke.kaina) {
    brangiausiaPreke = preke2;
}
  if (preke3.kaina > brangiausiaPreke.kaina) {
    brangiausiaPreke = preke3;
}
  console.log('Brangiausia prekė:', brangiausiaPreke);
  
let prekiuDėžėsTuriai = [
    preke1.siuntimuiDezesMatmenys.x * preke1.siuntimuiDezesMatmenys.y * preke1.siuntimuiDezesMatmenys.z,
    preke2.siuntimuiDezesMatmenys.x * preke2.siuntimuiDezesMatmenys.y * preke2.siuntimuiDezesMatmenys.z,
    preke3.siuntimuiDezesMatmenys.x * preke3.siuntimuiDezesMatmenys.y * preke3.siuntimuiDezesMatmenys.z
  ];
  console.log('Pirma prekė dėžės tūris:', prekiuDėžėsTuriai[0], 'cm3');
  console.log('Antra prekė dėžės tūris:', prekiuDėžėsTuriai[1], 'cm3');
  console.log('Trečia prekė dėžės tūris:', prekiuDėžėsTuriai[2], 'cm3');
  
  let prekiuPelningumai = [
    (preke1.kaina - preke1.savikaina) * preke1.turimasKiekisSandelyje,
    (preke2.kaina - preke2.savikaina) * preke2.turimasKiekisSandelyje,
    (preke3.kaina - preke3.savikaina) * preke3.turimasKiekisSandelyje
  ];
  console.log('Pirma prekė pelningumas:', prekiuPelningumai[0]);
  console.log('Antra prekė pelningumas:', prekiuPelningumai[1]);
  console.log('Trečia prekė pelningumas:', prekiuPelningumai[2]);