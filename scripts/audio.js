let hoveraudio = "/assets/audio/piko.mp3";
  let NaviButtons = document.querySelectorAll("a");
  var clicksound = document.getElementById("click-sound");
  var avatarsound =document.getElementById("avatar-sound");
  var danscsound =document.getElementById("dansc-sound");

for(i = 0; i < NaviButtons.length; i++){
	let NaviButton = NaviButtons[i];
  let audio = document.createElement("audio");
  audio.src = hoveraudio;
  document.body.appendChild(audio);

  NaviButton.onmouseover = () => {
    audio.play();
  }
  NaviButton.onmouseout = () => {
    audio.pause();
    audio.currentTime = 0;
  }
    NaviButton.onclick = () => {
    clicksound.play();
  }

}
  let avatar = document.getElementById("intropic");
    avatar.onmouseover= () => {
    avatarsound.play();
  }
    let dansc = document.getElementById("bichito");
    danscsound.loop = true;
    dansc.onmouseover= () => {
    danscsound.play();
  }
        dansc.onmouseout= () => {
    danscsound.pause();
  }