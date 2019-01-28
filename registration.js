document.forms.registration.onsubmit = function (event) {
    return validateSampleForm(event);
};



function validateName(nameField) {
    if (/\s*^[A-Za-z]+\s*[A-Za-z]*$\s*/.test(nameField.value)) {
        return "";
    } else {
        return "Please fill in your name.\n";
    }
};

function validateSurname(surnameField) {
    if (/\s*^[A-Za-z]+\s*[A-Za-z]*$\s*/.test(surnameField.value)) {
        return "";
    } else {
        return "Please fill in your surname.\n"
    }
};

function validateBirthDate(birth_dateField) {
    if (/^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/.test(birth_dateField.value)) {
        return "";
    } else {
        return "Please enter a valid birth date.\n"
    }
};

function validatePhoneNumber(phoneField) {
    if (/\s*^\d{3}-\d{3}-\d{4}$\s*/.test(phoneField.value)) {
        return ""
    } else {
        return "Please enter a correct phone number.\n"
    }
};

function validateEmail(emailField) {
    if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(emailField.value)) {
        return ""
    } else {
        return "Please enter a correct email.\n"
    }
};

function validateAge(birth_dateField) {
    if (new Date().getFullYear() - new Date(document.getElementById("birthday").value).getFullYear() <= 18) {
        return ""
    }
    else if (new Date().getFullYear() - new Date(document.getElementById("birthday").value).getFullYear() >= 12) {
        return ""
    }
    else {
        return "Sorry your age doesn't meet the requirements.\n"
    }
};

function validateSampleForm(event) {
    var form = event.target;
    var messages = validateName(form.name) + validateSurname(form.surname) + validateBirthDate(form.birth_date) + validatePhoneNumber(form.phone) + validateEmail(form.email) + validateAge(form.birth_field) ;
    if (messages === "") {
        return true;
    } else {
        alert(messages);
        return false;
    }
};


function setUni() {
    if (document.getElementById("placement").disabled === true) {
        document.getElementById("placement").disabled = false;
        document.getElementById("placement2").disabled = false;
    } else {
        document.getElementById("placement").disabled = true;
        document.getElementById("placement2").disabled = true;
    }


}

document.getElementById('signDate').valueAsDate = new Date();

function getSeason() {
    var month = new Date().getMonth();
    console.log(month);
    if (month === 0 || month === 1 || month === 11) {
         document.getElementById("season").value = "winter";
    } 
    else if (month === 2 || month === 3 || month === 4) {
         document.getElementById("season").value = "spring";
    }
    else if (month === 5 || month === 6 || month === 7) {
         document.getElementById("season").value = "summer";
    }
    else {
         document.getElementById("season").value = "autumn";
    }
}

