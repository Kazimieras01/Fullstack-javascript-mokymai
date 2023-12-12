let filmas = {
    pavadinimas: 'Pavadinimas',
    rezisierius: 'Rezisierius',
    biudzetas: 5000000,
    uzdarbis: 8000000,
    zanras: 'Veiksmo',
    trukme: 120,
    metai: 2022,
    aktoriai: ['Vardenis Pavardenis', 'Varde Pavarde', 'Vardis Pavardis']
  };
  
  console.log('Filmo informacija:', filmas);
  
  let pelnas = filmas.uzdarbis - filmas.biudzetas;
  console.log('Filmo pelnas:', pelnas);
  
  let aktoriuKiekis = filmas.aktoriai.length;
  console.log('Aktoriu kiekis filme:', aktoriuKiekis);
  
  let dabartiniaiMetai = new Date(Date.now()).getFullYear()
  let filmoMetai = dabartiniaiMetai - filmas.metai;
  console.log('Filmas isleistas pries:', filmoMetai, 'metus');