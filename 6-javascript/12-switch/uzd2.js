let pirmas = 3;
let antras = 5;
let trecias = 7;

switch (pirmas) {
  case 1:
    console.log(`Visų trijų skaičių suma yra: ${pirmas + antras + trecias}`);
    break;
  case 2:
    console.log(`Antro ir trečio skaičių sandauga yra: ${antras * trecias}`);
    break;
  case 3:
    console.log(`Pirmo skaičiaus kvadratas yra: ${pirmas ** 2}`);
    break;
  default:
    console.log("Klaida: Pirmas skaičius neatitinka jokio varianto.");
    break;
}
