var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

contacts = [];
chat_div = [];

function triggerMouseEvent(node, eventType) {
    var event = document.createEvent('MouseEvents');
    event.initEvent(eventType, true, true);
    node.dispatchEvent(event);
}

function getChatname(){
    $("#pane-side > div > div > div").find("._25Ooe > ._1wjpf").each(function(){
        console.log($(this).text())
        contacts.push($(this).text());
        chat_div.push($(this));
    })
    
     console.log($("#pane-side > div > div > div"))
}

function selectContact(name){
    getChatname()
    for (i = 0; i < contacts.length; i++){
        if (name.toUpperCase() === contacts[i].toUpperCase()){
            console.log(name.toUpperCase() + " match with "+contacts[i].toUpperCase())
             triggerMouseEvent(chat_div[i][0],"mousedown")
        }else{
            console.log(name.toUpperCase() + " mismatch with "+contacts[i].toUpperCase())
        }
    }
}

function sendMessage(text){
    $("#main > footer > div._3oju3 > div._2bXVy > div > div._2S1VP.copyable-text.selectable-text").text(text)
    input = document.querySelector("#main > footer > div._3oju3 > div._2bXVy > div > div._2S1VP.copyable-text.selectable-text");
    input.dispatchEvent(new Event('input', {bubbles: true}));
	var button = document.querySelector('#main > footer > div._3oju3 > button');
	button.click();
}
