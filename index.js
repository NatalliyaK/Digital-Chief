const burger = document.querySelector('.burger'),
     popup = document.querySelector('.popup'),
     close = document.querySelector('.popup__close');

let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputCheckbox = document.querySelector('.checkbox__label');

burger.addEventListener('click', showMenu);

function showMenu () {
    burger.classList.add('hide');
    popup.classList.add('show');
}

close.addEventListener('click', hideMenu);

function hideMenu () {
    burger.classList.remove('hide');
    popup.classList.remove('show');
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.onsubmit = function (e) {
    e.preventDefault();
    let emailVal = inputEmail.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '')


    formInputs.forEach(function (input) {
        if(input.value === '') {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    });

    if(emptyInputs.length !==0 ) {
        return false;
    }

    if(!validateEmail(emailVal)) {
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if(!inputCheckbox.checked) {
        inputCheckbox.classList.add('error')
        return false;
    } else {
        inputCheckbox.classList.remove('error')
    }
}
