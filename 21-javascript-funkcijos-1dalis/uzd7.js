function isvedimas () {
    let arr = [];
    
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 10) + 1; 
        //arr.push( Math.floor(Math.random() * 10) + 1;);  
    }        
    let tekstas = arr.join(' ');
    console.log(tekstas);    
}

let j = 1;
while (j <= 5) {
   isvedimas();
    j++;
}