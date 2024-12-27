function validateForm() {
    var isValid = true;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    // Validate username
    if (username.length < 5) {
        document.getElementById('usernameError').innerText = 'Username must be at least 5 characters long.';
        isValid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
    }

    // Validate email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    return isValid;
}
