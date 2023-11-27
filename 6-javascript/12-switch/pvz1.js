let role = 'moderatorius';

switch (role) {
        case "admin":
            console.log('leidžiame viską');
            break;
        case 'moderatorius':
            console.log('leidžiama naujinti turinį');
            break;
        case 'rasytojas':
            console.log('tik rašo turinį');
            break;
        case vartotojas:
            console.log('gali skaityti ir mėgti');
            break;

    default:
        console.log('neprisijungęs');
        break;
}

// if (role == 'admin') {
//     console.log('leidžiame viską');
// } else if (role == 'moderatorius') {
//     console.log('leidžiama naujinti turinį');
// } else if (role == 'rasytojas') {
//     console.log('tik rašo turinį');
// } else if (role == 'vartotojas') {
//     console.log('gali skaityti ir mėgti');
// } else {
//     console.log('neprisijungęs');
// }