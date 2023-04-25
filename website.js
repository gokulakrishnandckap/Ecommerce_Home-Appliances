const input = document.querySelectorAll("input")
const sumbit = document.querySelector(".btn")
const require = document.querySelectorAll(".require")
const showPwd = document.querySelector("#eyeopen")
const hidePwd = document.querySelector("#eyeclose")
const password = document.querySelector('input[type="password"]')
const EmailInp = document.querySelector('input[type="email"]')
const TextInp = document.querySelector('input[type="text"]')
const welcome = document.querySelector(".welcome")

window.addEventListener("DOMContentLoaded", () => {
    dayFunction()

})


String.prototype.isPassword = function () {
    return !!this.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
}

String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/);
}


sumbit.addEventListener("click", (e) => {
    e.preventDefault()
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            validation(input[i], require[i])
        }
        else {
            checkPassword(password)
            checkEmail(EmailInp)
            checkText(TextInp)
        }
    }
})



for (let j = 0; j < input.length; j++) {
    input[j].addEventListener("keyup", () => {
        validation(input[j], require[j])
    })
}



function validation(params, elems) {
    if (params.value === "") {
        params.style.borderColor = "red"
        elems.style.display = "block"
    }
    else {
        params.style.borderColor = "Green"
        elems.style.display = "none"
    }
}


function checkEmail(input) {
    if (!input.value.trim().isEmail()) {
        error(input, 'This is not an valid email address')
    }
    else {
        verified(input)
    }
}



function checkText(input) {
    if (input.value.length < 8) {
        error(input, 'Username must be more than 8 charcters')
    }
    else {
        verified(input)
    }
}


function checkPassword(input) {
    if (!input.value.trim().isPassword()) {
        error(input, 'Use special charcters & upperCase')
    }
    else {
        verified(input)
    }
}

function error(input, text) {
    let FullForm = input.parentElement
    let content = FullForm.querySelector("p")
    content.innerText = text
    content.style.display = "block"
    input.style.borderColor = "red"
}

function verified(input) {
    input.style.borderColor = "Green"
}

hidePwd.addEventListener("click", () => {
    hideShow("none", "block", "text")
})

showPwd.addEventListener("click", () => {
    hideShow("block", "none", "password")
})

function hideShow(show, hide, type) {
    hidePwd.style.display = show
    showPwd.style.display = hide
    password.setAttribute('type', type)
}


function dayFunction() {
    let myDate = new Date();
    let hrs = myDate.getHours()
    let Wish;

    if (hrs < 12) {
        Wish = 'Happy Morning!';
    }
    else if (hrs >= 12 && hrs <= 17) {
        Wish = 'Happy Afternoon!';
    }
    else if (hrs >= 17 && hrs <= 24) {
        Wish = 'Happy Evening!';

    }
    welcome.innerText = Wish
}





























