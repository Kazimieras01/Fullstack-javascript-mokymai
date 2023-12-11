let a = 0;
let b = 0;
let c = 0;

let storeA = 200;
let storeB = 200;
let storeC = 200;

let msg = '';
let n = 1;

while (storeA > 0 || storeB > 0 || storeC > 0) {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    c = Math.floor(Math.random() * 10);
    if (a <= storeA && a != 0) {
        storeA -= a;
        msg += `a ${a} vnt. `;
    }
    if (b <= storeB && b != 0) {
        storeB -= b;
        msg += `b ${b} vnt. `;
    }
    if (c <= storeC && c != 0) {
        storeC -= c;
        msg += `c ${c} vnt. `;
    }
    if (msg == '') {
        console.log(n, 'pirkėjas neįsigijo nieko, nes jo norimų prekių kiekio nepakako... išėjo nusivylęs...');
    } else {
        console.log(n, 'pirkėjas nupirko:', msg);
    }
    
    n++;
    msg = '';

}