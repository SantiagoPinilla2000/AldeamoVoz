var contraint = { audio: true }

var microphoneButton = document.querySelector("#microphoneButton");

var onRecorder = false;

var chunks = [];

navigator.mediaDevices.getUserMedia(contraint).then(function(stream) {
    var mediaRecorder = new MediaRecorder(stream);
    microphoneButton.onclick = function() {
        if (onRecorder == false) {
            mediaRecorder.start();
            onRecorder = true;
            console.log('T');
        } else {
            mediaRecorder.stop();
            onRecorder = false;
            console.log('F');
        }
    };
    mediaRecorder.onstop = function(e) {
        console.log('Stop');
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
        chunks = [];
        const audioUrl = window.URL.createObjectURL(blob);

        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", "Audio_Recorded.mpeg3");
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        link.remove();
        buttonSubmit.disabled = false;
    }
})