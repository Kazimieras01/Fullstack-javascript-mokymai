let darbuotojas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    alga: 1000,
    etatas: 1,
    pakeltaAlga: function(proc) {
        const naujaAlga = this.alga * (1+proc/100);
        return naujaAlga;
    },
    keistiEtata: function (naujasEtatas) {
        const naujaAlga = this.alga * naujasEtatas;
        const skirtumas = this.alga - naujaAlga;
        return skirtumas;
    }
}
const raise = darbuotojas.pakeltaAlga(20);
console.log(`Nauja Alga: ${raise} euru`);
const skirtumas = darbuotojas.keistiEtata(0.5);
console.log(`Algos skirtumas: ${skirtumas} euru`);