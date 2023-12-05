let pradzia = 5;
let pabaiga = 16;

if (pradzia < pabaiga) {
    for (let i = pradzia; i <= pabaiga; i++) {
        if (i % 2 !== 0)  {
            console.log('nelyginis skaicius:', i);
        } else if (i % 8 === 0) {
            console.log('skaicius dalinasi is 8:', i);
        }
    }
}