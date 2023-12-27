document.getElementById('gautiJuokeli').addEventListener('click', gautiJuokeli);

async function gautiJuokeli() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });

    const data = await response.json();

    if (data.joke) {
      const rezultatasElementas = document.getElementById('rezultatas');
      rezultatasElementas.textContent = data.joke;
    } else {
      throw new Error('Nepavyko gauti juoko');
    }
  } catch (error) {
    console.error('Klaida:', error);
  }
}