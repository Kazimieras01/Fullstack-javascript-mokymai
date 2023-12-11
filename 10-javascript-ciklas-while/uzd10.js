let i = 1000;              // tyrimo start'as
let padalijimai = 0;    //sėkmingų (be liekanos) analizuojant vieną konkretų sk.
let daliklis = 1;

while (true) {    
    
    while (daliklis <= i) {
        if (i % daliklis == 0) {
            padalijimai++;
        }
        daliklis++;
    }
    daliklis = 1;       // resetinam

    if (padalijimai == 2) {
        console.log('aptiktas pirmasis pirminis sk.', i);
        break;
    } else {
        console.log('nepirminis:', i);
        padalijimai = 0;    
    }    
    i++; // generuojame naują sk., nes iki tol visi buvo nepirminiai
}