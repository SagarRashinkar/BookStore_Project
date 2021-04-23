/********************************************* Check Logged In or Not *************************************/
$(document).ready(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    if (!data) {
        window.location.href = "../signUp_page.html";
    }
    if ((!data) === "") {
        window.location.href = "../HTML/dashboard.html";
    }
})

/********************************************* Show User Profile ******************************************/
let prof_flag = false;
function showProfile() {
    if (prof_flag === false) {
        prof_flag = true;
        $('.dropdown').css('display', 'flex');
    } else {
        prof_flag = false;
        $('.dropdown').css('display', 'none');
    }
    let data = JSON.parse(localStorage.getItem('user'));
    let email = data.email;
    document.getElementById('loggedEmail').innerHTML = email;
}

/********************************************** Logout User **********************************************/
function logoutUser() {
    localStorage.removeItem('user');
    setTimeout(() => {
        location.reload();
    }, 1000);
}

/********************************************** Get Books Data **********************************************/
$(document).ready(() => {
    // Call to ajax_service from here
    getBooks();
});
function printBooksData(data) {
    let item = document.getElementById('card-item');
    let book_count = document.getElementById('cnt');
    let count = 0;
    let temp = "";
    data['result'].forEach(element => {
        // console.log(element);
        count++;
        temp += `<div class="card">
                    <div class="card-img-parent">
                        <img src="../Assets/book.png" class="book-img" alt="book-image">
                    </div>
                    <div class="title-box">
                        <div class="book-name">${element.bookName}</div>
                        <div class="author">by ${element.author}</div>
                        <div class="price-parent">
                            <div class="price">Rs. ${element.price}</div>
                            <div class="off-price">Rs. ${element.discountPrice}</div>
                        </div>
                    </div>
                </div>`
    });
    book_count.innerHTML = "(" + `${count}` + " items)";
    item.innerHTML = temp;
}