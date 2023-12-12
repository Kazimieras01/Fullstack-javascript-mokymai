let automobilis = {}
automobilis.marke = 'Audi';
automobilis.modelis = 'A4';
automobilis.rida = 50000;
automobilis.metai = 2018;
automobilis.spalva = 'Juoda';
automobilis.darbinisTuris = 2.0;
automobilis.dauzta = false;
automobilis.parduodama = true;
console.log(automobilis);
let dabartiniaiMetai = 2023; 
let nuvaziuotaVidPerMetus = automobilis.rida / (2023 - automobilis.metai);
console.log('Auto amzius:', 2023 - automobilis.metai);
console.log('Vidutiniskai nuvaziuota per metus:', nuvaziuotaVidPerMetus);