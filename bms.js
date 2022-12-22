
// function loadCoupon() {
//     document.getElementsByClassName("coupon")[0].style.display = "block";
//     document.querySelector("body").style.opacity = "0.5";
// }


// const closeCoupon = () => {
//     document.getElementsByClassName("coupon")[0].style.display = "none";
//     document.querySelector(".carousel").style.opacity = "1";
// }

// window.load = loadCoupon();


// const darkMode = document.querySelector(".dm");

function darkMode() {
    let myBody = document.body;
    myBody.classList.toggle("dark-mode");

    // if (darkMode.classList.contains("fa-moon")) {
    //     darkMode.classList.replace("fa-moon", "fa-sun");
    //     darkMode.classList.add("fa-sun");
    // }

    // else {
    //     darkMode.classList.replace("fa-sun", "fa-moon");
    //     darkMode.classList.add("fa-moon");
    // }
}