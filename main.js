function checkName() {
    input01 = document.getElementById("name").value;

    if (input01.length < 7 || !input01.match(' ')) {
        document.getElementById("error-name").style.display = "inline";
        document.getElementById("name").style.border = "2px solid #d85a4b";
        return false
    } else {
        document.getElementById("error-name").style.display = "none";
        document.getElementById("name").style.border = "none";
        return true;
    }
}

function checkEmail() {
    input02 = document.getElementById("email").value;
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!filter.test(input02)) {
        document.getElementById("error-email").style.display = "inline";
        document.getElementById("email").style.border = "2px solid #d85a4b";
        return false;
    } else {
        document.getElementById("error-email").style.display = "none";
        document.getElementById("email").style.border = "none";
        return true;
    }
}

function checkMessage() {
    input03 = document.getElementById("message").value;

    if (input03.length < 20 || !input03.match(' ', ' ', ' ', ' ')) {
        document.getElementById("error-message").style.display = "inline";
        document.getElementById("message").style.border = "2px solid #d85a4b";
        return false;
    } else {
        document.getElementById("error-message").style.display = "none";
        document.getElementById("message").style.border = "none";
        return true;
    }
}

function confirmMessage() {

    if (checkName() && checkEmail() && checkMessage()) {
        document.getElementById("confirmation").style.display = "block";
        return true;
    } else {
        document.getElementById("confirmation").style.display = "none";
        return false;
    }
}