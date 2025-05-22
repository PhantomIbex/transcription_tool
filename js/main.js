//Declare global variables
var audio = $('#audio')[0];
var speed = $('#speed')[0];

//Adding shortcuts

//Play/Pause shortcut
shortcut.add("esc", function() { 
	/*if (audio.paused == true) {
		audio.play();
	}
	else {
		audio.pause();
	}*/
	play();
}); 

//Forward shortcut
shortcut.add("f1", function() {
	//audio.currentTime -= 3;
	rewind();
});

//Rewind shortcut
shortcut.add("f2", function() {
	//audio.currentTime += 3;
	forward();
});

//Speed fast shortcut
shortcut.add("f4", function () {
	speed.value++;
	changespeed();
});

//Speed slow shortcut
shortcut.add("f3", function () {
	speed.value--;
	changespeed();
});

/*//Forward button
$('#for').click(function() {
    audio.currentTime += 3;
});

//Rewind button
$('#rew').click(function() {
    audio.currentTime -= 3;
});
*/


//New Audio button
$('#newSRC').click(function() {
   var audio = document.getElementById("audio");
   audio.src = prompt("Insert Link", "");
   audio.load();
});

//Slow down
$('#slw').click(function() {
	speed.value--;
	changespeed();
});

//Speed up
$('#fst').click(function() {
	speed.value++;
	changespeed();
});

function changespeed() {
	if (speed.value == 1){
		audio.playbackRate = 0.5;
	} else if (speed.value == 2) {
		audio.playbackRate = 1;
	} else if (speed.value == 3) {
		audio.playbackRate = 2;
	}
};


//Play/Pause
function play(){
	if (audio.paused == true) {
		audio.play();
	}
	else {
		audio.pause();
	}
};

//Forward
function forward(){
	audio.currentTime += 3;
};

//Rewind
function rewind(){
	audio.currentTime -= 3;
};

//CSS
$('.controls').mouseenter(function () {
	$(this).css("background-color", "dodgerblue");
});

$('.controls').mouseleave(function () {
	$(this).css("background-color", "white");
});




