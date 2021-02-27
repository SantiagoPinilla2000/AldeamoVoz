var uploadButton = document.querySelector('#uploadButton');
var uploadFile = document.querySelector('#UploadImput');
var buttonSubmit = document.querySelector('#sendButton');

uploadButton.addEventListener('click', () => {
    uploadFile.click();
});

uploadFile.addEventListener('change', () => {
    buttonSubmit.disabled = false;
});