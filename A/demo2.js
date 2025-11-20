function getData(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    console.log("Email: "+email+" Password: "+password);
    alert("Email: "+email+" Password: "+password);
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (email == "" || password == "") {
        alert("Please fill all the fields");
    }
    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
    }
    else if (!passwordPattern.test(password)) {
        alert("Password must be 7-15 characters long, include at least one digit and one special character (!@#$%^&*)");
    }
    else {
        login(email,password);
    }
}
function login(email,password){
    const xhr=new XMLHttpRequest();
    xhr.open("POST","htt[://localhost:3000/login");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onload=function(){
        console.log("Response:",JSON.parse(xhr.respomnseText));
    };
    const body = {
        email:email,
        password:password,
    };
    xhr.send(JSON.stringify(body));
}