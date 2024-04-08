import "./style.css";
const validCountries = ["IND", "USA", "CAN", "UK", "GER", "FRA", "NEP"];

const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

const country = document.querySelector("#country");
const countryError = document.querySelector(".countryError");

const zipcode = document.querySelector("#zipcode");
const zipcodeError = document.querySelector(".zipcodeError");

const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");

const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector(".confirmPasswordError");

function showEmailError() {
  emailError.classList.add("emailError");
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter the email address";
  }
  if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address";
  }
}

function showCountryError() {
  countryError.classList.add("countryError");
  if (country.validity.valueMissing) {
    countryError.textContent = "Please enter the country of residence";
  }
  if (country.validity.tooLong || country.validity.tooShort) {
    countryError.textContent = "Country code is between 2 to 3 letters";
  }
  if (validCountries.indexOf(country.textContent) === -1) {
    countryError.textContent = "Please enter a valid Country";
  }
}

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.classList.remove("emailError");
  } else {
    showEmailError();
  }
});

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.classList.remove("countryError");
  } else {
    showCountryError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
  if (
    !country.validity.valid ||
    !validCountries.includes(country.textContent)
  ) {
    showCountryError();
    event.preventDefault();
  }
});
