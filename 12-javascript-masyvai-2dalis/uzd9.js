let pazymiai=[,1,2,1,9,8,7,6,5,4,3,4,5,6,7,10,4,3,2,3,8,9,8,7,6,5,4]

for (let i = 0; i < pazymiai.length; i++) {

if(pazymiai[i]>=5){
    console.log(`pazymys ${pazymiai[i]} yra teigiamas`);
}else{
    console.log(`pazymys ${pazymiai[i]} yra neigiamas, jums truksta ${5-pazymiai[i]} balo(-u) iki teigiamo pazymio`);
}
     
}