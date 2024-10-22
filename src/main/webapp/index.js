let SubscribeEle = document.getElementById("subscribeForm");
 
let emailEle = document.getElementById("email");
let nameEle = document.getElementById("name");
let emailErr = document.getElementById("emailErrMsg");
let nameErr = document.getElementById("nameErrMsg");
 
nameEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErr.textContent = "Required*";
    } else {
        nameErr.textContent = "";
    }
});
 
emailEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErr.textContent = "Required*";
    } else {
        emailErr.textContent = "";
    }
});
 
SubscribeEle.addEventListener("submit", function(event) {
    event.preventDefault();
});
