const dvizenklisSkaicius = 58; // Galite pakeisti šį skaičių norimu kitu dvizenkliu skaičiumi

const pirmasSkaitmuo = Math.floor(dvizenklisSkaicius / 10); // Pirmas skaitmuo
const antrasSkaitmuo = dvizenklisSkaicius % 10; // Antras skaitmuo

const skaitmenuSuma = pirmasSkaitmuo + antrasSkaitmuo; // Skaitmenų suma

console.log(`${pirmasSkaitmuo} + ${antrasSkaitmuo} = ${skaitmenuSuma}`);