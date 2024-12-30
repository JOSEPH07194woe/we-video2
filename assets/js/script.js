document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
    const fileInput = document.querySelector('#video-file');
    const fileName = fileInput.files[0]?.name;
    if (fileName) {
        alert(`You selected: ${fileName}`);
    } else {
        alert('Please select a video file.');
    }
});
