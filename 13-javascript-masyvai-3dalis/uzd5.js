let failuMasyvas = ['text.txt', 'failas.json', 'song.mp3', 'video.mp4', 'vid.mkv']
for (let failas of failuMasyvas) {
    if (failas.endsWith('.txt') || failas.endsWith('.json')){
      console.log(failas);
    }
  }