// Chat history array to store messages
let chatHistory = [];

// Initialize with a welcome message
document.addEventListener('DOMContentLoaded', () => {
    chatHistory.push({
        type: 'bot',
        message: "Hi! I'm your cricket expert. Ask me anything about cricket!"
    });
    updateChatDisplay();
});

// Handle user input when pressing Enter
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputElement = document.getElementById('userInput');
    const userMessage = inputElement.value.trim();
    
    if (userMessage === '') return;
    
    // Add user message to chat
    chatHistory.push({
        type: 'user',
        message: userMessage
    });
    
    // Generate bot response
    const botResponse = generateResponse(userMessage);
    chatHistory.push({
        type: 'bot',
        message: botResponse
    });
    
    // Clear input and update display
    inputElement.value = '';
    updateChatDisplay();
}

function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Simple response logic based on keywords
    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! How can I help you with cricket today?";
    }
    else if (message.includes('rules')) {
        return "Cricket has several key rules: Two teams compete, each with 11 players. One team bats while the other bowls and fields. The batting team tries to score runs while the bowling team tries to dismiss the batsmen. Would you like to know about any specific rule?";
    }
    else if (message.includes('score') || message.includes('scoring')) {
        return "In cricket, runs can be scored through various means: running between wickets (1 run), hitting the ball to the boundary (4 runs), or hitting the ball over the boundary without touching the ground (6 runs).";
    }
    else if (message.includes('ipl')) {
        return "The Indian Premier League (IPL) is one of the biggest T20 cricket leagues in the world. It features top players from around the globe competing in a franchise-based tournament.";
    }
    else if (message.includes('world cup')) {
        return "The Cricket World Cup is the international championship of One Day International (ODI) cricket. The event is organized by the ICC and takes place every four years.";
    }
    else {
        return "That's an interesting cricket question! While I'm still learning, I can tell you that cricket is a fascinating sport with rich history and complex strategies. Could you be more specific about what you'd like to know?";
    }
}

function updateChatDisplay() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '';
    
    chatHistory.forEach(chat => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(chat.type === 'bot' ? 'bot-message' : 'user-message');
        messageDiv.textContent = chat.message;
        chatMessages.appendChild(messageDiv);
    });
    
    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add smooth hover effects to team members
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'translateY(-5px)';
    });
    
    member.addEventListener('mouseout', () => {
        member.style.transform = 'translateY(0)';
    });
});