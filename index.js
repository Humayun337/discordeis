function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message !== '') {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatBox.appendChild(messageElement);

        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const fileInput = document.getElementById('file-input'); // File input element
    const chatBox = document.getElementById('chat-box');

    const message = input.value.trim();
    const file = fileInput.files[0]; // File selected

    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatBox.appendChild(messageElement);
    }

    if (file) {
        const fileElement = document.createElement('div');
        
        // Create a downloadable link for the file
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.textContent = `📎 File: ${file.name}`;
        link.target = "_blank";

        fileElement.appendChild(link);
        chatBox.appendChild(fileElement);

        // Clear file input after sending
        fileInput.value = '';
    }

    if (message !== '' || file) {
        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
