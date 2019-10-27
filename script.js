function generatePassword() {
    let length = document.getElementById("slider").value;
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    let password = "";
for(var i = 1; i <= length; i++) {
    password = password + charSet.charAt(Math.floor(Math.random() * Math.floor(charSet.length - 1)));
}
document.getElementById("display").value = password;
}

function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}

document.getElementById("slider").oninput = function() {
    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
}

document.getElementById("length").innerHTML = "Length: 68";

