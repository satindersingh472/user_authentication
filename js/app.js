// go home function wil take back to the home page
function go_home(details){
    location.href = `home.html`;
}
// success login will set cookies value from response data and redirect to home page
function success_login(response) {
    let token_value = response[`data`][`token`];
    Cookies.set(`token`, token_value);
    box[`innerHTML`] = `<h2>your login is sucessful, you are being redirected to home page</h2>`;
    setTimeout(go_home,2000);

}
// failure login will display msg if any error
function failure_login(error) {
    box[`innerHTML`] = `<h2>Invalid email or password</h2>`;
}
// function login will perform axios request 
// it will first grab value from the form and store them in seperate variables
// then the post method will use those variables and data object key value pairs
function login(details) {
    let email_value = document.getElementById(`email`)[`value`];
    let password_value = document.getElementById(`password`)[`value`];

    axios.request({
        url: ` https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: password_value
        }
    }).then(success_login).catch(failure_login);
}
// box is the div inside index html document
let box = document.getElementById(`box`);
// submit button is also inside index document it is there to execute the login function
let submit_button = document.getElementById(`submit`);
submit_button.addEventListener(`click`, login);