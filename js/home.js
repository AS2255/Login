
var LogOutBtn = document.querySelector('.logoutbtn');
var UserName = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome " + UserName

LogOutBtn.addEventListener('click', function(){
    location.href = "index.html";
}
);