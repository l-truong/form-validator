const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMAtch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMAtch = true;
        password1El.style.borderBlock = 'green';
        password2El.style.borderBlock = 'green';
    } else {
        passwordsMAtch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderBlock = 'red';
        password2El.style.borderBlock = 'red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMAtch) {
        message.textContent = 'Sucessfully Registered!'
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        password1El.style.borderBlock = 'green';
        password2El.style.borderBlock = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value,
    };
    // Do something with user data
    window.alert("Received Data (data aren't stored nor passed in databases)\n"+
                 "Name:\n     "+user.name+"\n"+
                 "Phone Number:\n     "+user.phone+"\n"+
                 "Email Adress:\n     "+user.email+"\n"+
                 "Password:\n     "+user.password+"\n"
                );
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submite Data if Valid
    if (isValid && passwordsMAtch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);