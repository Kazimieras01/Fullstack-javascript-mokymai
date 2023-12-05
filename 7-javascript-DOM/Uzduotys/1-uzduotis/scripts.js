document.getElementById ('calculate').addEventListener('click', function() {
    // console.log('clicked');
    let dSkaicius = parseInt(document.getElementById('dSkaicius').value);
    let vntPerDay = parseInt(document.getElementById('vntPerDay').value);
    let orders = parseInt(document.getElementById('orders').value);

    let savikaina = 0.3;
    let kaina = 1.5;
    let pelnas = (kaina*orders)-(savikaina*orders)
    let kepaluPerDay = dSkaicius*vntPerDay;
    let uzsakymuIspildymas = kepaluPerDay >= orders;

    // let logInfo = {
    //     kepaluPerDay,
    //     uzsakymuIspildymas
    // };
    // console.log(logInfo);
    let results = document.getElementById('results');
    // console.log(results);
    results.innerHTML = `<p><strong>Kepykla per diena pagamina kepalu: </strong>${kepaluPerDay}</p>`;
    results.innerHTML += `<p><strong>Kepykloje uzsakyta pagaminti: </strong>${orders} kepalu</p>`;
    results.innerHTML += `<p><strong>Ar kepykla spes ispildyti uzsakymus: </strong>${uzsakymuIspildymas ? 'taip' : 'ne'}</p>`;
    results.innerHTML += `<p><strong>Kepyklos pelnas išpildžius užsakymus: </strong>${pelnas}</p>`;
});

document.getElementById('dSkaicius').addEventListener('keyup', function(e) {
    let inputValue = e.target.valueAsNumber;
    if (inputValue<0) {
        e.target.classList.add ('error')
        e.target.nextElementSibling.classList.add ('show')
    } else {
        e.target.classList.remove ('error')
        e.target.nextElementSibling.classList.remove ('show')
    }
});
document.getElementById('vntPerDay').addEventListener('keyup', function(e) {
    let inputValue = e.target.valueAsNumber;
    if (inputValue<0) {
        e.target.classList.add ('error')
        e.target.nextElementSibling.classList.add ('show')
    } else {
        e.target.classList.remove ('error')
        e.target.nextElementSibling.classList.remove ('show')
    }
});
document.getElementById('orders').addEventListener('keyup', function(e) {
    let inputValue = e.target.valueAsNumber;
    if (inputValue<0) {
        e.target.classList.add ('error')
        e.target.nextElementSibling.classList.add ('show')
    } else {
        e.target.classList.remove ('error')
        e.target.nextElementSibling.classList.remove ('show')
    }
});
document.getElementById('reset').addEventListener('click', function(e) {
    document.getElementById('dSkaicius').value = 0;
    document.getElementById('vntPerDay').value = 0;
    document.getElementById('orders').value = 0;
    document.getElementById('results').innerHTML = '<p>skaičiavimų rezultatai</p>'
});
document.getElementById('dSkaicius').addEventListener('mouseenter', () => {
    teigiamas.innerHTML ='<span>Įveskite kepyklos darbuotojų skaičių</span>';
})
document.getElementById('dSkaicius').addEventListener('mouseleave', () => {
    teigiamas.innerHTML ='<span></span>';
})
document.getElementById('vntPerDay').addEventListener('mouseenter', () => {
    perDay.innerHTML ='<span>Įveskite darbuotojų apsukas :)</span>';
})
document.getElementById('vntPerDay').addEventListener('mouseleave', () => {
    perDay.innerHTML ='<span></span>';
})
document.getElementById('orders').addEventListener('mouseenter', () => {
    uzsakymai.innerHTML ='<span>Įveskite dienos užsakymų skaičių</span>';
})
document.getElementById('orders').addEventListener('mouseleave', () => {
    uzsakymai.innerHTML ='<span></span>';
})
