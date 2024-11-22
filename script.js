// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const name = nameField.value;
    const email = emailField.value;
    const message = messageField.value;
  
    alert(`Thank you, ${name}! Your message has been received.`);

    
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
});
