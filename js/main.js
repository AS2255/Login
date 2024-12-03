
var loginEmailInput = document.querySelector("#loginemail");
var loginPasswordInput = document.querySelector("#loginpass");
var LoginBtn = document.querySelector('#LoginBtn')
var UsersData = [];

if(localStorage.getItem("Users") != null){
    UsersData = JSON.parse(localStorage.getItem("Users"));
}
// login 

function isLoginEmpty(){
    if(
        loginEmailInput.value == "" ||
        loginPasswordInput.value == ""){
        return false
    }else{
        return true
    }
}
function Login(){
    var LoginEmail = loginEmailInput?.value;
    var LoginPass = loginPasswordInput?.value;
    if(isLoginEmpty() == false){
        document.getElementById("incorrect").innerHTML=
        "<span class='text-danger my-3'> All Input Is Required </span>"
        return;
    };
    if(isEmailAndPassCorrect(LoginEmail, LoginPass)){
        location.href = "home.html";
    }else{
        document.getElementById('incorrect').innerHTML = 
        "<span class='text-danger my-3'> Email or Password is incorrect </span>"
    };
}
LoginBtn?.addEventListener('click', Login)
function isEmailAndPassCorrect(email, password){
    for(var i = 0; i <UsersData.length; i++){
        if(email == UsersData[i].email && password == UsersData[i].password){
            localStorage.setItem("username", UsersData[i].name);
            return true;
        }else{
            return false;
        }
    }
}