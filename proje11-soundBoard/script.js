const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const audios = document.createElement('audio');
    audios.src = "sounds/" + sound + ".mp3";
    audios.id = sound;

    //document.body.appendChild(audios); //Sayfanın sonunda yer alır
    document.body.insertBefore(audios, document.body.firstChild)
})

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)

});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;

    })
}