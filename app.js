const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
        getMessage();
})


// Get like an alert msg on what you've typed
function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value= " ";
   
}