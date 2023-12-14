function isveskZodziusSuIlgiais(zodziuMasyvas) {
    zodziuMasyvas.forEach(zodis => {
        console.log(`${zodis}: ${zodis.length} simboliai`);
    });
}
let zodziuMasyvas = ["katė", "šuo", "namas", "stalas", "pieva"];

isveskZodziusSuIlgiais(zodziuMasyvas);