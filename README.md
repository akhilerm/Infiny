# Infiny
WhatsApp Web automation using javascript

###Current Stage
Can only send messages. Need to create fucntions for performing all operations on WhatsApp Web.

##Usage
Open WhatsApp Web. Open the chat with the contact that you to send the message. Copy the complete code in 'infiny.js' to the javascript console (Use Ctrl+Shift+I in Google Chrome)  and hit enter.

To customize the message : A sample "Blah" is given in the the file. Replace it with your own message to send to your contact.
A setTimeout function is used so that after every 10 messages the script waits for 1 second and then repeats. The sample code sends 100 messages to the contact to whom the chat is currently open in WhatsApp Web.

##Plan
Need to implement fucntions for performing all operations on WhatsApp Web. Thus it can be automated.
Fucntions like `send_message(content)` need to be implemented for sending messages. The current implementaion contains the code for this function
Planning to implement the following functions:
1.`select_contact(name)` for selecting a contact from the list. `send_message(content)` can be called after this fucntion to send message to that contact
2.`create_group(name)` for creating a new group. Members can be added after this function call.
3.More fucntions need to follow for performing other fucntions.

After completion, it is expected that,
```
select_contact("John");
for(i=0;i<10;i++){
  send_message("Happy Birthday");
}
```
will send "Happy Birthday" 10 times to "John"

The code should be made to run either from the console in browser or from the terminal.
