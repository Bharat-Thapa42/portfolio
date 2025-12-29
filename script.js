//menu or hamburger toggle

const menu = document.getElementById("menu")
const navbar = document.getElementById("navbar") 

menu.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
});

//form validation
function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let numbers= document.getElementById("numbers").value;
    let message= document.getElementById("message").value;

   
   if (!name || name==="") {
    alert("Your Name must be at least 5 characters.");
    return false;
}

if (!email.includes("@")) {
    alert("Invalid Email");
    return false;
}
if (!numbers || numbers.length !== 10 || isNaN(numbers)) {
    alert("Phone number must be exactly 10 digits.");
    return false;
}
if (!message || message.length < 10) {
    alert("Message must be at least 10 characters.");
    return false;
}
alert("Form submitted successfully!");
return true;
}