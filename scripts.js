// Select the video elements
const video1 = document.querySelector('.video1');
const video2 = document.querySelector('.video2');
const music = document.getElementById('background-music');
const musicControl = document.getElementById('music-control');

// Initialize current video state
let currentVideo = 1;

// Function to toggle video opacity for a seamless transition
function toggleVideos() {
    if (currentVideo === 1) {
        video1.style.opacity = 0; // Fade out the first video
        video2.style.opacity = 1; // Fade in the second video
        currentVideo = 2;
    } else {
        video1.style.opacity = 1; // Fade in the first video
        video2.style.opacity = 0; // Fade out the second video
        currentVideo = 1;
    }
}

// Start toggling videos after the first one is preloaded
setInterval(toggleVideos, 10000); // Change every 10 seconds

// Play/Pause music functionality
musicControl.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicControl.textContent = 'Pause Music';
    } else {
        music.pause();
        musicControl.textContent = 'Play Music';
    }
});
