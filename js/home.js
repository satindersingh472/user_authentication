// cookies_value will store the value of token cookies
let cookies_value = Cookies.get(`token`);
// remove_cookies function will remove the cookies with logout button clicked 
function remove_cookies(details) {
    Cookies.remove(`token`);
}
// function success color will give name and year and div with background color same as the color name
function success_color(response) {
    // the loop will go thru the data inside data inside response and give back the name year and color
    for (let i = 0; i < response[`data`][`data`].length; i++) {
        box[`innerHTML`] += `<div class="color_description">
    <h2 style="color:${response[`data`][`data`][i][`color`]};">${response[`data`][`data`][i][`name`]}</h2>
    <h2>This color was created in ${response[`data`][`data`][i][`year`]}</h2>   
    </div>

    <div class="color_box" style="background-color: ${response[`data`][`data`][i][`color`]};"> The color in the background is ${response[`data`][`data`][i][`name`]}</div>
    `;
    }
}
// if something gets wrong with the request then this function will dislay the error 
function failure_color(error) {
    box[`innerHTML`] = `<h2>Error in showing the output</h2>`;
}
// displat color function will run the axios request if button is user is logged in correctly 
// the user will be logged in and their will be a cookies in a jar that will have token for authentication
function display_color(details) {
    axios.request({
        url: `https://reqres.in/api/unknown`
    }).then(success_color).catch(failure_color);

}
let box = document.getElementById(`box`);
// if there is cookies with token of authentication then if will execute the display color function
if (cookies_value) {
    display_color();
    // else it will ask the user to login
} else {
    box[`innerHTML`] = `<h2>You should  <a href = "index.html">login</a> see some colors here!</h2>`;
}
// button remove will call the remove cookies function with the help of click event
let button_remove = document.getElementById(`remove`);
button_remove.addEventListener(`click`, remove_cookies);