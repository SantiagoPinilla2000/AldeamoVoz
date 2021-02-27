var ttsSound = document.querySelector('#inputLayout');
var audioPlay = document.querySelector('#audioSRC');
ttsSound.addEventListener('change', () => {
    switch (ttsSound.value) {
        case '1':
            audioPlay.src = "../Assets/AudioLayout/PlantillaTTS.mp3"
            audioPlay.play();
            buttonSubmit.disabled = false;
            break;
        case '2':
            audioPlay.src = "../Assets/AudioLayout/PlantillaUpload.mp3"
            audioPlay.play();
            buttonSubmit.disabled = false;
            break
        case '3':
            audioPlay.src = "../Assets/AudioLayout/PlantillaRecorded.mp3"
            audioPlay.play();
            buttonSubmit.disabled = false;
            break;
        default:
            buttonSubmit.disabled = true;
            break;
    }
});