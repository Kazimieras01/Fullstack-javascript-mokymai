// Susikurkite tris kintamuosius skaičiams saugoti. Parašykite šias atskiras if sąlygas:
let pirmas = 10;
let antras = 5;
let trecias = 8;

// Ar pirmas ir antras skaičiai yra lygūs?
if (pirmas === antras) {
  console.log("Pirmas ir antras skaičiai yra lygūs.");
}

// Ar antras ir trečias skaičiai yra lygūs?
if (antras === trecias) {
  console.log("Antras ir trečias skaičiai yra lygūs.");
}

// Ar pirmas skaičius yra didesnis už antrąjį?
if (pirmas > antras) {
  console.log("Pirmas skaičius yra didesnis už antrąjį.");
}

// Ar antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?
if (antras > trecias * 2) {
  console.log("Antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę.");
}

// Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?
if (pirmas % 2 === 0) {
  console.log("Pirmas skaičius yra lyginis.");
}

// Ar antras skaičius yra nelyginis (ar nesidalina iš 2)?
if (antras % 2 !== 0) {
  console.log("Antras skaičius yra nelyginis.");
}

// Ar trečias skaičius yra teigiamas (didesnis už 0)?
if (trecias > 0) {
  console.log("Trečias skaičius yra teigiamas.");
}

// Ar pirmas skaičius yra neigiamas (mažesnis už 0)?
if (pirmas < 0) {
  console.log("Pirmas skaičius yra neigiamas.");
}

// Ar antras skaičius dalinasi iš 4?
if (antras % 4 === 0) {
  console.log("Antras skaičius dalinasi iš 4.");
}

// Ar trečias skaičius dalinasi iš 8?
if (trecias % 8 === 0) {
  console.log("Trečias skaičius dalinasi iš 8.");
}