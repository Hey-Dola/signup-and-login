let login = document.querySelector("#login");
let signup = document.getElementById("signup");

login.addEventListener("click", function(){
    console.log("clicked")
    document.querySelector("#form2").style.top = "0%";
    document.querySelector("#form1").style.top = "-100%";
})
signup.addEventListener("click", function(){
    console.log("clicked")
    document.querySelector("#form2").style.top = "100%";
    document.querySelector("#form1").style.top = "0%";
})