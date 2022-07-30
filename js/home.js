let cookies_value = Cookies.get(`token`);
function success_color(response) {
    for (let i = 0; i < response[`data`][`data`].length; i++) {
        box[`innerHTML`] += `<div class="color_description">
    <h2 style="color:${response[`data`][`data`][i][`color`]};">${response[`data`][`data`][i][`name`]}</h2>
    <h2>This color was created in ${response[`data`][`data`][i][`year`]}</h2>   
    </div>
    <div class="color_box" style="background-color: ${response[`data`][`data`][i][`color`]}">
        
    </div>
    `;
    }
}
function failure_color(error) {
    box[`innerHTML`] = `<h2>Error Showing the output</h2>`;
}
function display_color(details) {

    axios.request({
        url: `https://reqres.in/api/unknown`
    }).then(success_color).catch(failure_color);

}
let box = document.getElementById(`box`);
if (cookies_value) {
    display_color();
} else {
    box[`innerHTML`] = `<h2>You should  <a href = "index.html">login</a> see some colors here!</h2>`;
}