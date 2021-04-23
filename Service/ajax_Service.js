let baseURL = "https://backend-bookstore.herokuapp.com/bookstore_user/";

/********************************************* POST Service **********************************************************/
function ajaxPostService(myURL, myData, successMsg, errorMsg, path = null) {
    $.ajax({
        url: baseURL + myURL,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        data: JSON.stringify(myData),
        success: function (data) {
            localStorage.setItem("user", JSON.stringify(myData));
            console.log(data);
            showSnackBar(successMsg);
            setTimeout(() => {
                window.location.href = path;
            }, 1000);
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
    ajaxPostService(myURL, myData, "Login success...", "Login failed...", "./HTML/dashboard.html");
}

/********************************************* GET Service **********************************************************/
function ajaxGetService(myURL) {
    $.ajax({
        url: baseURL + myURL,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        success: function (data) {
            // console.log(data);
            printBooksData(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

/********************************************* GET API call **********************************************************/
function getBooks() {
    let myURL = "get/book";
    ajaxGetService(myURL);
}