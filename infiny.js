//To send 100 text messages of text "Blah" with a delay of 1 second after every 10 messages
var input = document.querySelector('.block-compose .input');

for(var i=0;i<10;i++){
	setTimeout(function(){
		for(var j = 0; j < 10; j++) {
  			input.innerHTML = "Blah";
    			input.dispatchEvent(new Event('input', {bubbles: true}));
			var button = document.querySelector('.block-compose button.icon-send');
			button.click();
		}
	},1000);}
