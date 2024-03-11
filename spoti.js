console.log("Welcome to Spotify");

// Initilize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Song1", filePath:"song/1.mp3", coverPath: "paisa/.jpg"},
    {songName: "Song1", filePath:"song/1.mp3", coverPath: "paisa/.jpg"},
    {songName: "Song1", filePath:"song/1.mp3", coverPath: "paisa/.jpg"},
    {songName: "Song1", filePath:"song/1.mp3", coverPath: "paisa/.jpg"},
    {songName: "Song1", filePath:"song/1.mp3", coverPath: "paisa/.jpg"},
    {songName: "Song1", filePath:"song/1.mp3", coverPath: "paisa/.jpg"},
    {songName: "Song1", filePath:"song/1.mp3", coverPath: "paisa/.jpg"},
]

// audioElement.play()

// Handle play/pause click "C:\Users\mansh\Music"
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 0;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
// Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})