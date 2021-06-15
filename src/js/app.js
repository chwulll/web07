const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function hanldeLoginSubmit(){
    event.preventDefault();
    const username = loginInput.value;
}


loginForm.addEventListener("submit", hanldeLoginSubmit);