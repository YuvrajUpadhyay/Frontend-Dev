function getData(){
    let name=document.getElementById('name').value;
    let phone=document.getElementById('phone').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let country=document.getElementById('country').value;
    let terms=document.getElementById('terms').checked;
    let namePattern = /^[A-Za-z\s]{2,}$/;
    let phonePattern = /^[6-9]\d{9}$/;
    let confirmPassword=document.getElementById('confirmPassword').value;
    console.log("Email: "+email+" Password: "+password);
    alert("Email: "+email+" Password: "+password);
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    if (email == "" || password == "" || name == ""|| phone==""||!gender||country==""||confirmPassword=="") {
        alert("Please fill all the fields");
    }
    else if (!namePattern.test(name)) {
        alert("Please enter a valid name (letters only, min 2 characters)");
    }
    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
    }
    else if (!passwordPattern.test(password)) {
        alert("Password must be 7-15 characters long, include at least one digit and one special character (!@#$%^&*)");
    }
    else if (password !== confirmPassword) {
    alert("Passwords do not match");
}
    else if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number starting with 6–9");
    }
    else if (country === "Select") {
        alert("Please select your country");
    }
    else {
        alert("Registration Successful");
        console.log("Name: " +name +
            "Email: "+email +
            "Phone: "+phone +
            "Country: "+country
        );
    }
}
// function getData(){
//     let name = document.getElementById('name').value;
//     let phone = document.getElementById('phone').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirmPassword').value;
//     let gender = document.querySelector('input[name="gender"]:checked');
//     let country = document.getElementById('country').value;
//     let terms = document.getElementById('terms').checked;

//     let namePattern = /^[A-Za-z\s]{2,}$/;
//     let phonePattern = /^[6-9]\d{9}$/;
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

//     if (name == "" || phone == "" || email == "" || password == "" || confirmPassword == "" || !gender || country == "") {
//         alert("Please fill all the fields");
//     }
//     else if (!namePattern.test(name)) {
//         alert("Please enter a valid name (letters only, min 2 characters)");
//     }
//     else if (!emailPattern.test(email)) {
//         alert("Please enter a valid email");
//     }
//     else if (!passwordPattern.test(password)) {
//         alert("Password must be 8-20 characters long, include at least one digit and one special character (!@#$%^&*)");
//     }
//     else if (password !== confirmPassword) {
//         alert("Passwords do not match");
//     }
//     else if (!phonePattern.test(phone)) {
//         alert("Please enter a valid 10-digit phone number starting with 6–9");
//     }
//     else if (country === "Select") {
//         alert("Please select your country");
//     }
//     else if (!terms) {
//         alert("You must agree to the terms and conditions");
//     }
//     else {
//         alert("Registration Successful");
//         console.log("Name: " + name +
//             " Email: " + email +
//             " Phone: " + phone +
//             " Country: " + country +
//             " Gender: " + gender.value
//         );
//     }
// }
function register(email,password,country,gender,terms,confirmPassword){
    const xhr=new XMLHttpRequest();
    xhr.open("POST","htt[://localhost:3000/login");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onload=function(){
        console.log("Response:",JSON.parse(xhr.respomnseText));
    };
    const body = {
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        terms:terms,
        country:country,
        gender:gender,
    };
    xhr.send(JSON.stringify(body));
}