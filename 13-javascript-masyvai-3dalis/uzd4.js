let nuvaziuotiKilometrai = [120, 145, 90, 160, 130, 200];

console.log("Nuvažiuoti kilometrai didesni nei 150:");
for (let kilometrai of nuvaziuotiKilometrai) {
  if (kilometrai > 150) {
    console.log(kilometrai);
  }
}