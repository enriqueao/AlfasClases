
var audio = document.getElementById('audio');

function play(){
	  audio.play();
	}

	function pause(){
	  if (audio.paused){
	    audio.play();
	  }else{
	    audio.pause();
	  }
	}

	function stop(){
	  audio.pause();
	  audio.currentTime = 0;
	}

	function turnUpVolume(){
	  if (audio.volume<0.9){
	    audio.volume+=0.1;
	  }
	}

	function turnDownVolume(){
	  if (audio.volume>0.1){
	    audio.volume-=0.1;
	  }
	}
