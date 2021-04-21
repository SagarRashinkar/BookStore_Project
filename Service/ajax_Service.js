let baseURL = "https://backend-bookstore.herokuapp.com/bookstore_user/";

function ajaxPostService(myURL, myData, successMsg, errorMsg) {
    $.ajax({
        url: baseURL + myURL,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        data: JSON.stringify(myData),
        success: function (data) {
            localStorage.setItem("user", JSON.stringify(data));
            console.log(data);
            showSnackBar(successMsg);
        },
        error: function (err) {
            showSnackBar(errorMsg)
            console.log(err);
        }
    })
}
/********************************************** User registration API call **************************************************/
function registerUser(myData) {
    let myURL = "registration";
    ajaxPostService(myURL, myData, "Registration success...", "Registration failed...");
}

/********************************************* User login API call **********************************************************/
function loginUser(myData) {
    let myURL = "login";
    ajaxPostService(myURL, myData, "Login success...", "Login failed...");
}