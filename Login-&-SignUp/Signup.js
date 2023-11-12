function validateForm() {
    var email = document.getElementById('username').value;
    var enterPwd = document.getElementById('enterPass').value;
    var rePwd = document.getElementById('re-enter').value;
    
    // Store the username and password in localStorage

    localStorage.setItem('Username', email);
    localStorage.setItem('Password', enterPwd);

    
    if (email === "") {
        alert("Please enter an email!");
        return false;
    }
    
    if (enterPwd === "") {
        alert("Please enter a password!");
        return false;
    }
    
    if (enterPwd.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Password must contain at least 8 characters including letters, numbers, and symbols
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(enterPwd)) {
        alert("Password must contain at least 8 characters, including letters, numbers, and symbols.");
        return false;
    }

    if (enterPwd !== rePwd) {
        alert("Password and Re-enter Password do not match!");
        return false;
    }


    // If all conditions are met, the form will be submitted
    return true;
}
