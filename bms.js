

function darkMode() {
    let myBody = document.body;
    myBody.classList.toggle("dark-mode");
}

const bodyEl = document.querySelector("body");

const closeCouponEl = document.querySelector(".closeBtn");
const couponEl = document.querySelector(".coupon");


function closeCoupon(){
    couponEl.style.display = "none";
    document.querySelector("body").style.opacity = "1";
}

window.onload = function(){
    setTimeout(function couponLoad(){
        couponEl.style.display = "block";
        document.querySelector("body").style.opacity = "0.8";
        document.querySelector(".coupon").style.opacity = "1";
    }, 3000);
   };



