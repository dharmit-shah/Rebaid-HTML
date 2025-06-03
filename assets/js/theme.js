// 1st Increment & Decrement JS
function increaseValue() {var value = parseInt(document.getElementById("number").value, 10);value = isNaN(value) ? 0 : value;value++;document.getElementById("number").value = value;}
function decreaseValue() {var value = parseInt(document.getElementById("number").value, 10);value = isNaN(value) ? 0 : value;value < 1 ? (value = 1) : "";value--;document.getElementById("number").value = value;}

// 2nd Increment & Decrement JS
function increaseValueProduct() {var value = parseInt(document.getElementById("number2").value, 10);value = isNaN(value) ? 0 : value;value++;document.getElementById("number2").value = value;}
function decreaseValueProduct() {var value = parseInt(document.getElementById("number2").value, 10);value = isNaN(value) ? 0 : value;value < 1 ? (value = 1) : "";value--;document.getElementById("number2").value = value;}

// phoneInput JS
const phoneInput = document.querySelector("#phoneInput");
const iti = window.intlTelInput(phoneInput, {utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js"});
iti.promise.then(() => {const countryCode = iti.getSelectedCountryData().iso2; iti.setCountry(countryCode);});
phoneInput.addEventListener("countrychange", function() {const countryCode = iti.getSelectedCountryData().iso2;console.log("Selected country code:", countryCode);});