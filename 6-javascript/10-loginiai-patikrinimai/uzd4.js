let pirmasSk = 15;
let antrasSk = 5;

if (pirmasSk >= antrasSk || pirmasSk === 0) {
  console.log("Pirmas skaičius yra didesnis už antrąjį arba lygus 0.");
}

if (antrasSk > pirmasSk || antrasSk === 5) {
  console.log("Antras skaičius yra didesnis už pirmąjį arba lygus 5.");
}

if (pirmasSk === 20 && pirmasSk > antrasSk) {
  console.log("Pirmas skaičius yra lygus 20 ir didesnis už antrąjį.");
}

if (antrasSk > pirmasSk && antrasSk < 100) {
  console.log("Antras skaičius yra didesnis už pirmąjį ir mažesnis už 100.");
}