var countdown = 3000;  // your countdown in milliseconds

setTimeout(function() {
    // hide your loading image after "countdown" milliseconds
    document.getElementById("loading-image").setAttribute("style","display:none");

}, countdown);

// show your loading image
document.getElementById("loading-image").setAttribute("style","display:block");


// MAIN CONTAINER
setTimeout(function() {
    // hide your loading image after "countdown" milliseconds
    document.getElementById("main-container").setAttribute("style","display:block");

}, countdown);

// show your loading image
document.getElementById("main-container").setAttribute("style","display:none");