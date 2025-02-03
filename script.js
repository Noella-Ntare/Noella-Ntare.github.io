function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    if (userMessage.trim() !== "") {
        // Display user message
        displayMessage(userMessage, 'user');

        // Clear input field
        document.getElementById("userInput").value = "";

        // Simulate bot response after a brief delay
        displayBotTyping();
        setTimeout(() => {
            let botResponse = "This is an automated response.";
            displayMessage(botResponse, 'bot');
        }, 2000); // 2 seconds delay to simulate typing
    }
}

function displayMessage(message, sender) {
    let chatContent = document.getElementById("chatContent");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === 'user' ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatContent.appendChild(messageDiv);

    // Scroll to the bottom
    chatContent.scrollTop = chatContent.scrollHeight;
}

function displayBotTyping() {
    let chatContent = document.getElementById("chatContent");
    let typingDiv = document.createElement("div");
    typingDiv.classList.add("bot-typing");
    typingDiv.textContent = "Bot is typing...";
    chatContent.appendChild(typingDiv);

    // Scroll to the bottom
    chatContent.scrollTop = chatContent.scrollHeight;
}

function clearChat() {
    let chatContent = document.getElementById("chatContent");
    chatContent.innerHTML = "";
}

// Show the "About Us" section
function showAboutUs() {
    document.getElementById("aboutUsSection").style.display = "block";
    document.getElementById("servicesSection").style.display = "none";
}

// Show the "Services" section
function showServices() {
    document.getElementById("aboutUsSection").style.display = "none";
    document.getElementById("servicesSection").style.display = "block";
}
