document.querySelector("#btn-b4-follow").addEventListener("click", function () {
    let doc = document.querySelector(".follow");
    doc.classList.toggle('arrow-right');
    console.log(2)
                    doc.classList.toggle('button-paused');
    console.log(3)
});


let audio1 = document.getElementById("myAudio");
let isPlaying = false;
function togglePlay() {
isPlaying ? myAudio.pause() : myAudio.play();
};
myAudio.onplaying = function() {
isPlaying = true;
};
myAudio.onpause = function() {
isPlaying = false;
};