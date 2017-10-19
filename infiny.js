//To send 100 text messages of text "Blah" with a delay of 1 second
var input = document.querySelector('.pluggable-input-body');
var count = 0;
var timer = setInterval(function(){
	count++;
	input.innerHTML = "Blah";
	input.dispatchEvent(new Event('input', {bubbles: true}));
	var button = document.querySelector('button.compose-btn-send');
	button.click();
	if(count==100){clearInterval(timer);}
},1000);
