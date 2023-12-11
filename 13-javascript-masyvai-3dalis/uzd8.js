let likuciai = [74, 54, 32];

for (let likutis of likuciai) {
  let dienos = Math.ceil(likutis / 5);
  console.log(`${likutis} vnt. prekės užteks maždaug ${dienos} dienų.`);
}