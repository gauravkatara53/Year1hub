document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();

//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();

//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();

//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Get references to HTML elements
//     var loginButton = document.getElementById('loginButton');
//     var loginCard = document.getElementById('loginCard');
//     var loginWithEmailButton = document.getElementById('loginWithEmail');
//     var loginWithGoogleButton = document.getElementById('loginWithGoogle');

//     // Add event listener to show login card on button click
//     loginButton.addEventListener('click', function () {
//         loginCard.classList.remove('hidden');
//     });

//     // Add event listener for login with email button
//     loginWithEmailButton.addEventListener('click', function () {
//         var email = document.getElementById('email').value;
//         var password = document.getElementById('password').value;
        
//         // Add your login logic here, for example, sending data to a server.
//         console.log('Logging in with email:', email, 'and password:', password);
//     });

//     // Add event listener for login with Google button
//     loginWithGoogleButton.addEventListener('click', function () {
//         // Add your Google login logic here.
//         console.log('Logging in with Google');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    var loginButton = document.getElementById('loginButton');
    var loginCard = document.getElementById('loginCard');
    var overlay = document.getElementById('overlay');
    var cancelButton = document.getElementById('cancelButton');
    var loginWithEmailButton = document.getElementById('loginWithEmail');
    var loginWithGoogleButton = document.getElementById('loginWithGoogle');

    // Add event listener to show login card on button click
    loginButton.addEventListener('click', function () {
        loginCard.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    // Add event listener to hide login card on cancel button click
    cancelButton.addEventListener('click', function () {
        loginCard.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    // Add event listener for login with email button
    loginWithEmailButton.addEventListener('click', function () {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Add your login logic here, for example, sending data to a server.
        console.log('Logging in with email:', email, 'and password:', password);
    });

    // Add event listener for login with Google button
    loginWithGoogleButton.addEventListener('click', function () {
        // Add your Google login logic here.
        console.log('Logging in with Google');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var fanQuestions = document.querySelectorAll('.fan-question');

    fanQuestions.forEach(function (question) {
        var toggleButton = question.querySelector('button');
        var answer = question.querySelector('.fan-answer');

        toggleButton.addEventListener('click', function () {
            answer.classList.toggle('hidden');
        });
    });
});

const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});