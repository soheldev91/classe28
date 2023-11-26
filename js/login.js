document.getElementById("Login-button").addEventListener("click", function (){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if(email.value === "sohelrana019258@gmail.com" && password.value === "01882471"){
        window.location = 'index.html'
    }
    else{
        alert("meye mane gilapir moto soja")
    }
})