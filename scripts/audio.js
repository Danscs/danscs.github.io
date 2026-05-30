let specifics = document.querySelectorAll(".NaviButton");

let hoveraudioogg = "assets/audio/piko.mp3";

for(i = 0; i < specifics.length; i++){
	let specific = specifics[i];
  
  let audio = document.createElement("audio");
  audio.src = hoveraudioogg;
  document.body.appendChild(audio);

  specific.onmouseover = () => {
    audio.play();
  }
  specific.onmouseout = () => {
    audio.pause();
    audio.currentTime = 0;
  }
}