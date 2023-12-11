let scoreUser1 = [];
let scoreUser2 = [];
let averageUser1 = 0;
let averageUser2 = 0; 

for (let i=0; i<5; i++){
    let scoreA = Math.floor(Math.random() * 10 + 1);
    let scoreB = Math.floor(Math.random() * 10 + 1); 
    scoreUser1.push(scoreA);
    scoreUser2.push(scoreB);
}

console.log('#1 studento balai:', scoreUser1);
console.log('#2 studento balai:', scoreUser2);
averageUser1 = scoreUser1.reduce((sum, score) => sum + score) / scoreUser1.length;
averageUser2 = scoreUser2.reduce((sum, score) => sum + score) / scoreUser2.length;

if (averageUser1 > averageUser2) {
    console.log(`Pirmo stud. vidurkis (${averageUser1}) didesnis už antro stud. vidurkį (${averageUser2})`);
} else if (averageUser1 < averageUser2) {
    console.log(`Antro stud. vidurkis (${averageUser2}) didesnis už pirmo stud. vidurkį (${averageUser1})`);
} else {
    console.log(`Abiejų stud. pažangumas yra vienodas - abiejų vidurkiai ${averageUser1}`);
}