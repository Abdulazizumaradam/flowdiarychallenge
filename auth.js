function validateAuthForm(){
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email==="" || password===""){
        error.textContent = "Please Fill in all fields";

        return false;
    }

    if(!emailPatttern.test(email)){
        error.textContent = "Please enter a valid email address";
        return false;
    }

    error.textContent = "";
    return true;
    
}