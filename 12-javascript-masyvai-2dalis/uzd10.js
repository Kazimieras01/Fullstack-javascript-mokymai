let pavasarioLinksmybes = 
    `Jau saulelė vėl atkopdama budino svietą
    Ir žiemos šaltos triūsus pargriaudama juokės.
    Šalčių pramonės su ledais sugaišti pagavo,
    Ir putodams sniegs visur į nieką pavirto`;

let set = pavasarioLinksmybes.split(/[,.\s]+/);
console.log('Originalus masyvas sudarytas iš žodžių:\n', set);

let sum = 0;
let n = 0;

for (let i=0; i < set.length; i++) {
    n = set[i].length;
    sum += n;
    console.log(`"${set[i]}" ${set[i].length<4 ? '\t\t':'\t'} => \tžodis sudarytas iš`, n, 'spaudos ženklų.');
}
console.log('\nVisuose žodžiuose yra', sum, 'spaudos ženklai.');