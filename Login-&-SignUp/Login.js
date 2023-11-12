function checkData() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('enterPass').value;

    var storedUsername = localStorage.getItem('Username');
    var storedPassword = localStorage.getItem('Password');

    if (username === storedUsername) {
        if(password != storedPassword){
            alert("Wrong password!");
            return false;
        }
        else if(password ==""){
            alert("Enter a password");
            return false;
        }
    }
    else if(username =="" && password==""){
        alert("Enter a username & password!")
        return false;
    }
    else{
        alert("Invalid Login! Check it please")
        return false;
    }

    return true;
}
