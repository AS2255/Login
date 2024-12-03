
var signupNameInput = document.querySelector("#signupname");
var signupEmailInput = document.querySelector("#signupemail");
var signupPasswordInput = document.querySelector("#signuppass");
var SignupBtn = document.querySelector("#signupbtn");
var UsersData = [];

if (localStorage.getItem("Users") != null) {
    UsersData = JSON.parse(localStorage.getItem("Users"));
}

// signup
function signup() {
    var User = {
        name: signupNameInput.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value
    };
    if (IsSignupEmpty() == false) {
        document.getElementById("massage").innerHTML =
            "<span class='text-danger my-3'> All Input Is Required </span>";
            return;
    };
    if (
        isValidEmail(signupEmailInput.value) &&
        IsEmailNew(signupEmailInput.value)
    ) {
        UsersData.push(User);
        localStorage.setItem("Users", JSON.stringify(UsersData));
        document.getElementById("massage").innerHTML =
            "<span class='text-success success my-3'> Sign up Successful </span>";
    } else if(isValidEmail(signupEmailInput.value) == false) {
        document.getElementById("massage").innerHTML =
            "<span class='text-danger success my-3'> Invalid email</span>";
    }else{
        document.getElementById("massage").innerHTML =
        "<span class='text-danger success my-3'> Email already exist</span>";
    }
    ClearInput()
}
SignupBtn.addEventListener("click", function(){
    signup();
});
function IsSignupEmpty() {
    if (
        signupNameInput.value == "" ||
        signupEmailInput.value == "" ||
        signupPasswordInput.value == "") {
        return false;
    } else {
        return true;
    }
}
function isValidEmail(email) {
    var EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return EmailRegex.test(email);
}
function IsEmailNew(email) {
    for (var i = 0; i < UsersData.length; i++) {
        if (UsersData[i].email == email) {
            return false;
        }else{
            return true;
        }
    }
}
function ClearInput(){
    signupNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
}