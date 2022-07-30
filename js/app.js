function go_home(details){
    location.href = `home.html`;
}
function success_login(response) {
    let token_value = response[`data`][`token`];
    Cookies.set(`token`, token_value);
    box[`innerHTML`] = `<h2>your login is sucessful, you are being redirected to home page</h2>`;
    setTimeout(go_home,2000);

}
function failure_login(error) {
    box[`innerHTML`] = `<h2>Invalid email or password</h2>`;
}
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
let box = document.getElementById(`box`);
let submit_button = document.getElementById(`submit`);
submit_button.addEventListener(`click`, login);