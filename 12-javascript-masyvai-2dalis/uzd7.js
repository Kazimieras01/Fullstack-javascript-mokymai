let pažymiai=[]
let suma=0

for( let i=0;i<20;i++){
    let atsitiktinai=Math.floor(Math.random() * 10) + 1;
    pažymiai.push(atsitiktinai);
}
for(let i=0;i<pažymiai.length;i++){
    suma+=pažymiai[i]
   
}
let vidurkis=suma/pažymiai.length
    console.log('pazymiai:' ,pažymiai);
    console.log('suma:' ,suma);
    console.log('vidurkis:' ,vidurkis);

for(let i=0;i<pažymiai.length;i++){
if (pažymiai[i]>vidurkis) {
   
    console.log(`Pažymys ${pažymiai[i]} ,yra didesnis nei vidurkis `)
  
}}