

function darkMode() {
    let myBody = document.body;
    myBody.classList.toggle("dark-mode");
}

const bodyEl = document.querySelector("body");

const closeCouponEl = document.querySelector(".closeBtn");
const couponEl = document.querySelector(".coupon");
const refresh = document.querySelector("#refresh");

function closeCoupon() {
    couponEl.style.display = "none";
    document.querySelector("body").style.opacity = "1";
}

window.onload = function () {
    setTimeout(function couponLoad() {
        couponEl.style.display = "block";
        document.querySelector(".coupon").style.opacity = "1";
        document.querySelector("body").style.opacity = "0.8";
    }, 3000);
};


let degreeEl = document.getElementById("degree");
let cityEl = document.getElementById("city");
let iEl = document.getElementById("locationI");
// let apiKey = "";

iEl.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        degreeEl.innerText = "Location not available";
    }
    iEl.classList.remove("fa-location-arrow")
})

function showPosition(data) {
    cityEl.innerText = "Updating"
    // console.log(data);
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    // x.innerText = `latitude: ${lat}, longitude: ${lon}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6035519ecaf25e5a1bb42df89e9fbf76`;


    fetch(url, { method: "GET" })
        // Promise return
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let cityName = data.name;
            let temp = data.main.temp;
            let tempe = Math.floor(temp - 273.15);
            let foggy = data.weather[0].description;
            console.log(foggy);
            cityEl.innerText = `${cityName} ${tempe} °C`;
        })


    // api calling

}


refresh.addEventListener("click", ()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        degreeEl.innerText = "Location not available";
    }
    iEl.classList.remove("fa-location-arrow")
    
});


// function geolocation() {
    



