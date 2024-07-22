document.getElementById('color1').addEventListener('click', function() {
    document.getElementById('text-container').style.filter = 'invert(1) hue-rotate(180deg)';
});

document.getElementById('color2').addEventListener('click', function() {
    document.getElementById('text-container').style.filter = 'none';
});

document.getElementById('black').addEventListener('click', function() {
    var sideImage = document.getElementById('side');
    var sideVideo = document.getElementById('side-video');
    
    if (sideImage.style.display === 'none') {
        sideImage.style.display = 'block';
        sideVideo.style.display = 'none';
    } else {
        sideImage.style.display = 'none';
        sideVideo.style.display = 'block';
        sideVideo.play(); // Ensure the video plays when shown
    }
});
