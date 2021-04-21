function login_Tab() {
    setTimeout(() => {
        $('.signUp-Fields').css('display', 'none');
        $('.login-Fields').css('display', "block");
        $('.signupBtn').css('color', '#878787');
        $('.loginBtn').css('color', '#0A0102');
    }, 0.8);
}
function signUp_Tab() {
    setTimeout(() => {
        $('.signUp-Fields').css('display', 'block');
        $('.login-Fields').css('display', "none");
        $('.loginBtn').css('color', '#878787');
        $('.signupBtn').css('color', '#0A0102');
    }, 0.8);
}

/***************************************************** SnackBar ***********************************************************/
function showSnackBar(msg) {
    $('#snackbar').addClass('display');
    $('#snackbar').html(msg);
    setTimeout(() => {
        $('#snackbar').removeClass('display');
    }, 2000)
}

/***************************************************** Password Visibility ***********************************************************/
function passVisibility(passwd) {
    if (passwd.type === "password") {
        passwd.type = "text";
    } else {
        passwd.type = "password";
    }
}
function show_SignUp_Pass() {
    passVisibility(document.getElementById("pass"));
}
function show_Login_Pass() {
    passVisibility(document.getElementById('login-pass'));
}
/***************************************************** checkFields SignUp *************************************************/
function getValues(id) {
    return document.getElementById(id).value;
}
function checkFields() {
    if (name_flag === false) {
        $('.nameError').text("Please enter full name!!!").css("color", "#FF0000");
        $('#name').css('border-color', '#FF0000');
    }
    if (email_flag === false) {
        $('.emailError').text("Please enter your email!!!").css("color", "#FF0000");
        $('#email').css('border-color', '#FF0000');
    }
    if (pass_flag === false) {
        $('.passError').text("Please enter password!!!").css("color", "#FF0000");
        $('#pass').css('border-color', '#FF0000');
    }
    if (mobile_flag === false) {
        $('.mobileError').text("Please enter mobile number!!!").css("color", "#FF0000");
        $('#mobile').css('border-color', '#FF0000');
    }
    if (name_flag && email_flag && pass_flag && mobile_flag === true) {
        let name = getValues('name');
        let email = getValues('email');
        let pass = getValues('pass');
        let mobile = getValues('mobile');
        let myData = {
            "fullName": name,
            "email": email,
            "password": pass,
            "phone": mobile
        }
        // call to ajax_Service
        registerUser(myData);
    }
}

/***************************************************** checkFields Login ********************************************************/
function login() {
    if (email_flag === false) {
        $('#login-email').css('border-color', '#FF0000');
        $('.emailErr').text('Please enter your email!!!').css('color', '#FF0000');
    }
    if (pass_flag === false) {
        $('#login-pass').css('border-color', '#FF0000');
        $('.passErr').text('Please enter your password!!!').css('color', '#FF0000');
    }
    if (email_flag && pass_flag === true) {
        let email = getValues('login-email');
        let pass = getValues('login-pass');
        let myData = {
            "email": email,
            "password": pass
        }
        loginUser(myData);
    }
}