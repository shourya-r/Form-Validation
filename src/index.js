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
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

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
  if (!validCountries.includes(country.value)) {
    countryError.textContent = "Please enter a valid Country";
  }
}

function showZipcodeError() {
  zipcodeError.classList.add("zipcodeError");
  if (zipcode.validity.valueMissing) {
    zipcodeError.textContent = "Please enter the zipcode";
  }
  if (zipcode.validity.tooLong || zipcode.validity.tooShort) {
    zipcodeError.textContent = "Valid zipcode has 6 digits";
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

zipcode.addEventListener("input", (event) => {
  if (zipcode.validity.valid) {
    zipcodeError.textContent = "";
    zipcodeError.classList.add("zipcodeError");
  } else {
    showZipcodeError();
  }
});

password.addEventListener("input", (event) => {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  let flag = true;
  if (password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    flag = false;
  }

  if (password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    flag = false;
  }

  if (password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    flag = false;
  }

  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    flag = false;
  }

  if (flag === false) {
    passwordError.textContent = "Please enter a valid password";
    passwordError.classList.add("passwordError");
  } else {
    passwordError.textContent = "";
    passwordError.classList.remove("passwordError");
  }
});

confirmPassword.addEventListener("input", (event) => {
  if (confirmPassword.value === password.value) {
    confirmPasswordError.textContent = "";
    confirmPasswordError.classList.remove("confirmPasswordError");
  } else {
    confirmPasswordError.textContent = "Password does not match";
    confirmPasswordError.classList.add("confirmPasswordError");
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
  if (!country.validity.valid || !validCountries.includes(country.value)) {
    showCountryError();
    event.preventDefault();
  }
  if (!zipcode.validity.valid) {
    showZipcodeError();
    event.preventDefault();
  }
  if (
    letter.classList.contains("invalid") ||
    capital.classList.contains("invalid") ||
    number.classList.contains("invalid") ||
    length.classList.contains("invalid")
  ) {
    passwordError.textContent = "Please enter a valid password";
    passwordError.classList.add("passwordError");
    event.preventDefault();
  }
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Password does not match";
    confirmPasswordError.classList.add("confirmPasswordError");
    event.preventDefault();
  }
});
