let name_flag = false, email_flag = false, pass_flag = false, mobile_flag = false;

function validateName() {
    let pattern = RegExp("[A-Z][a-z]{2,}");
    let name = document.getElementById('name').value;
    if (pattern.test(name)) {
        name_flag = true;
        $('.nameError').text("");
        $('#name').css('border-color', '#E2E2E2');
    } else {
        name_flag = false;
        $('.nameError').text("Enter valid full name").css("color", "#FF0000");
        $('#name').css('border-color', '#FF0000');
    }
}
function validateEmail() {
    let pattern = RegExp("^[a-zA-Z]{4,}[a-zA-Z0-9\.\!\_]*\@[a-z]*\.(co|in|com)$");
    let email = document.getElementById('email').value;
    if (pattern.test(email)) {
        email_flag = true;
        $('.emailError').text("");
        $('#email').css('border-color', '#E2E2E2');
    } else {
        email_flag = false;
        $('.emailError').text("Enter valid email address").css("color", "#FF0000");
        $('#email').css('border-color', '#FF0000');
    }
}
function validatePassword() {
    let pattern = RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$");
    let pass = document.getElementById('pass').value;
    if (pattern.test(pass)) {
        pass_flag = true;
        $('.passError').text("");
        $('#pass').css('border-color', '#E2E2E2');

    } else {
        pass_flag = false;
        $('.passError').text("Enter valid password").css("color", "#FF0000");
        $('#pass').css('border-color', '#FF0000');
    }
}
function validateMobile() {
    let pattern = RegExp("(0/91)?[7-9][0-9]{9}$");
    let mobile = document.getElementById('mobile').value;
    if (pattern.test(mobile)) {
        mobile_flag = true;
        $('.mobileError').text("");
        $('#mobile').css('border-color', '#E2E2E2');
    } else {
        mobile_flag = false;
        $('.mobileError').text("Enter a valid mobile number").css("color", "red");
        $('#mobile').css('border-color', 'red');
    }
}
/************************************************** Login fields validation *******************************************************/
function loginEmailValidation() {
    let pattern = RegExp("^[a-zA-Z]{4,}[a-zA-Z0-9\.\!\_]*\@[a-z]*\.(co|in|com)$");
    let email = document.getElementById('login-email').value;
    if (pattern.test(email)) {
        email_flag = true;
        $('.emailErr').text("");
        $('#login-email').css('border-color', '#E2E2E2');
    } else {
        email_flag = false;
        $('.emailErr').text("Enter email").css("color", "#FF0000");
        $('#login-email').css('border-color', '#FF0000');
    }
}
function loginPasswordValidation() {
    let pattern = RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$");
    let pass = document.getElementById('login-pass').value;
    if (pattern.test(pass)) {
        pass_flag = true;
        $('.passErr').text("");
        $('#login-pass').css('border-color', '#E2E2E2');

    } else {
        pass_flag = false;
        $('.passErr').text("Enter password").css("color", "#FF0000");
        $('#login-pass').css('border-color', '#FF0000');
    }
}