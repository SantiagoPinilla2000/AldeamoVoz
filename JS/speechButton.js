/* var contraint = { audio: true };

var speechBtn = document.querySelector("#speechButton");

var onRecorder = false;

var chunks = [];

navigator.mediaDevices.getUserMedia(contraint).then(function(stream) {
    var speechRecorder = new SpeechRecorder(stream);
    speechBtn.onClick = function() {
        if (onRecorder == false) {
            speechRecorder.start();
            onRecorder = true;
            console.log('T');
        } else {
            speechRecorder.stop();
            onRecorder = false;
            console.log('F');
        }
    }
}) */

const speechButton = document.getElementById('speechButton');
const text = document.getElementById('speechText');
const speechText = document.getElementById('speakButton');
const inAction = false;
let userVoiceRecognition = new webkitSpeechRecognition();

userVoiceRecognition.lang = 'es-ES';
userVoiceRecognition.continous = true;
userVoiceRecognition.interimResults = false;

userVoiceRecognition.onresult = (event) => {
    const results = event.results;
    console.log(results);
    const word = results[results.length - 1][0].transcript;
    text.value = word;

};

speechButton.addEventListener('click', () => {
    if (inAction == false) {
        userVoiceRecognition.start();
        inAction = true;
    } else {
        userVoiceRecognition.abort();
        // Play Audio
        inAction = false;
    }
})

userVoiceRecognition.onend = (event) => {
    console.log('Fin')
    readText(text.value)
    buttonSubmit.disabled = false;
};
/*
var time = setTimeout(function() {
    speechButton.addEventListener('click', () => {
        userVoiceRecognition.abort();
    });
}, 5000);
*/

speechText.addEventListener('click', () => {
    readText(text.value);
})

/* speechButton.addEventListener('click', () => {
    userVoiceRecognition.abort();
}) */

function readText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
};