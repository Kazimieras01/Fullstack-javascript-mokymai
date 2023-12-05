// Add event listeners to update values and calculate volume
storis.addEventListener("input", calculateVolume);
plotis.addEventListener("input", calculateVolume);
ilgis.addEventListener("input", calculateVolume);
kiekis.addEventListener("input", calculateVolume);

function calculateVolume() {
    let storisValue = storis.value;
    let plotisValue = plotis.value;
    let ilgisValue = ilgis.value;
    let kiekisValue = kiekis.value;

    // Perform the calculation within the event listener to update when values change
    let kubaturaValue = (storisValue * plotisValue * ilgisValue * kiekisValue / 1000000000);
    let suma = 0;
    if(storisValue==25 && plotisValue==50 && ilgisValue==3000) 
         {suma= 1.27*kiekisValue} 
            else if (storisValue==25 && plotisValue==100 && ilgisValue==3000)
            {suma= 2.55*kiekisValue}
            else if (storisValue==25 && plotisValue==120 && ilgisValue==3000)
            {suma= 3.06*kiekisValue}
            else if (storisValue==25 && plotisValue==150 && ilgisValue==3000)
            {suma= 3.82*kiekisValue}

            else if (storisValue==30 && plotisValue==50 && ilgisValue==3000)
            {suma= 1.53*kiekisValue}
            else if (storisValue==30 && plotisValue==100 && ilgisValue==3000)
            {suma= 3.06*kiekisValue}
            else if (storisValue==30 && plotisValue==150 && ilgisValue==3000)
            {suma= 4.59*kiekisValue}

            else if (storisValue==50 && plotisValue==50 && ilgisValue==3000)
            {suma= 2.55*kiekisValue}
            else if (storisValue==50 && plotisValue==75 && ilgisValue==3000)
            {suma= 3.82*kiekisValue}
            else if (storisValue==50 && plotisValue==100 && ilgisValue==3000)
            {suma= 5.10*kiekisValue}
            else if (storisValue==50 && plotisValue==150 && ilgisValue==3000)
            {suma= 7.65*kiekisValue}
            else if (storisValue==50 && plotisValue==200 && ilgisValue==3000)
            {suma= 10.20*kiekisValue}
            else if (storisValue==50 && plotisValue==250 && ilgisValue==3000)
            {suma= 12.75*kiekisValue}

            else if (storisValue==100 && plotisValue==100 && ilgisValue==3000)
            {suma= 10.20*kiekisValue}
            else if (storisValue==100 && plotisValue==150 && ilgisValue==3000)
            {suma= 15.30*kiekisValue}

            else if (storisValue==120 && plotisValue==120 && ilgisValue==3000)
            {suma= 14.69*kiekisValue}

            else if (storisValue==150 && plotisValue==150 && ilgisValue==3000)
            {suma= 22.95*kiekisValue}


            else if(storisValue==25 && plotisValue==50 && ilgisValue==6000) 
            {suma= (1.27*kiekisValue)*2} 
            else if (storisValue==25 && plotisValue==100 && ilgisValue==6000)
            {suma= (2.55*kiekisValue)*2}
            else if (storisValue==25 && plotisValue==120 && ilgisValue==6000)
            {suma= (3.06*kiekisValue)*2}
            else if (storisValue==25 && plotisValue==150 && ilgisValue==6000)
            {suma= (3.82*kiekisValue)*2}

            else if (storisValue==30 && plotisValue==50 && ilgisValue==6000)
            {suma= (1.53*kiekisValue)*2}
            else if (storisValue==30 && plotisValue==100 && ilgisValue==6000)
            {suma= (3.06*kiekisValue)*2}
            else if (storisValue==30 && plotisValue==150 && ilgisValue==6000)
            {suma= (4.59*kiekisValue)*2}

            else if (storisValue==50 && plotisValue==50 && ilgisValue==6000)
            {suma= (2.55*kiekisValue)*2}
            else if (storisValue==50 && plotisValue==75 && ilgisValue==6000)
            {suma= (3.82*kiekisValue)*2}
            else if (storisValue==50 && plotisValue==100 && ilgisValue==6000)
            {suma= (5.10*kiekisValue)*2}
            else if (storisValue==50 && plotisValue==150 && ilgisValue==6000)
            {suma= (7.65*kiekisValue)*2}
            else if (storisValue==50 && plotisValue==200 && ilgisValue==6000)
            {suma= (10.20*kiekisValue)*2}
            else if (storisValue==50 && plotisValue==250 && ilgisValue==6000)
            {suma= (12.75*kiekisValue)*2}

            else if (storisValue==100 && plotisValue==100 && ilgisValue==6000)
            {suma= (10.20*kiekisValue)*2}
            else if (storisValue==100 && plotisValue==150 && ilgisValue==6000)
            {suma= (15.30*kiekisValue)*2}

            else if (storisValue==120 && plotisValue==120 && ilgisValue==6000)
            {suma= (14.69*kiekisValue)*2}

            else if (storisValue==150 && plotisValue==150 && ilgisValue==6000)
            {suma= (22.95*kiekisValue)*2};
// Display the calculated volume
    stor.innerHTML = `<span>${storisValue} mm</span>`;
    plot.innerHTML = `<span>${plotisValue} mm</span>`; 
    ilg.innerHTML = `<span>${ilgisValue} mm</span>`; 
    kiek.innerHTML = `<span>${kiekisValue}</span>`;
    kub.innerHTML = `<span>${kubaturaValue}</span>`;
    vis.innerHTML = `<span>${suma}€<r> + PVM</r></span>`;
 if (storisValue == 25) {
    vienas.classList.remove('hide');
   du.classList.add('hide');
    trys.classList.remove('hide');
         keturi.classList.remove('hide');
     penki.classList.remove('hide');
     sesi.classList.add('hide');
     septyni.classList.add('hide');

 }   else if ( storisValue == 30) {
     vienas.classList.remove('hide');
     penki.classList.remove('hide');
     trys.classList.remove('hide');

 }   else if ( storisValue == 50) {
     vienas.classList.remove('hide');
     du.classList.remove('hide');
     trys.classList.remove('hide');
     keturi.classList.add('hide');
     penki.classList.remove('hide');
     sesi.classList.remove('hide');
     septyni.classList.remove('hide');

 }   else if ( storisValue == 100) {
     vienas.classList.add('hide');
     du.classList.add('hide');
     trys.classList.remove('hide');
     keturi.classList.add('hide');
     penki.classList.remove('hide');
     sesi.classList.add('hide');
     septyni.classList.add('hide');
 }

     else if ( storisValue == 120) {
         vienas.classList.add('hide');
         du.classList.add('hide');
         trys.classList.add('hide');
         keturi.classList.remove('hide');
         penki.classList.add('hide');
         sesi.classList.add('hide');
         septyni.classList.add('hide');
 }
     else if ( storisValue == 150) {
         vienas.classList.add('hide');
         du.classList.add('hide');
         trys.classList.add('hide');
         keturi.classList.add('hide');
         penki.classList.remove('hide');
         sesi.classList.add('hide');
         septyni.classList.add('hide');
 }};
 let stat = document.getElementById('stat');
 let kalib = document.getElementById('kalib');
 let mygt = document.getElementById('mygt');
  
//   console.log(stat, kalib);
 
 kalib.addEventListener('click', () => { 
        stat.classList.remove('but_active');
         kalib.classList.add('but_active');
         mygt.textContent = 'kalibruota';
     }
 );   
 stat.addEventListener('click', () => { 
         kalib.classList.remove('but_active');
         stat.classList.add('but_active');
         mygt.textContent = 'statybine';
     }
 ); 