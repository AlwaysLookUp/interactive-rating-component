document.querySelector('#submit-button').onclick = function() {
    const rating_div = document.querySelector('#rating-card');
    const thanks_div = document.querySelector('#thank-you-card');
    rating_div.style.display = "none";
    thanks_div.style.display = "block";
}

// var numbers = [1, 2, 3, 4, 5];

// for (let i = 1; i < 5; i++) {
//     if 
// }

function button_clicked(clicked_id) {
    document.getElementById('rating').innerHTML = clicked_id;
}

// Use a loop to find a match from the button group. If there is a match, use the variable i and the number associated with it to 