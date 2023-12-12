let bookstore = {
    pavadinimas: 'Puslapių magnatai',
    adresas: 'Taikos 61',
    plotas: 120,
    knygu_kiekis: 9200,
    darbo_valandos: {
        nuo: '8:00',
        iki: '17:00'
    },
    atidarytas: true
}

for (let key in bookstore) {
    console.log(key, ' => ', bookstore[key]);
}

console.log('Ojekto bookstore ne "string" tipo savybės:')
for (let key in bookstore) {
    if (typeof bookstore[key] != 'string') {
        console.log('\t>', key);

    }
}