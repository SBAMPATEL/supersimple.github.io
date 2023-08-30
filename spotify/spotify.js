console.log("Welcom to Spotify");

//Initialize the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');



let songs = [
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "1.mp3.mp3", coverPath: "1.jpg" },
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "2.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "3.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "4.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "5.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "6.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "7.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tu-Mera-Koi-Na-Hoke-Bhi", filePath: "8.mp3", coverPath: "covers/1.jpg" },

]

//let audioElement = new Audio('1.mp3');
//audioElement.play();
//Handle play/pause click

masterplay.addEventListener('click', () => {
    if (audioElement.pause || audioElement.currentTime <= 0) {
        audioElement.play();
    }

})

//listen to events
myprogressbar.addEventListener('timeupdate', () => {
        console.log('timeupdate');
        //update seek bar

    }

)