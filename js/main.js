const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const message = document.querySelector("#message");
const headMessage = document.querySelector("#head-message");

function checkInputs() {
  // Get values from inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const messageValue = message.value.trim();

  if (firstNameValue === "") {
    // Show error
    // Add error class
    setErrorFor(firstName, "First name cannot be blank");
  } else if (firstNameValue.length < 4) {
    setErrorFor(firstName, "First name must be at leatst 4 characters");
  } else {
    // Add success class
    setSuccessFor(firstName);
  }
  if (lastNameValue === "") {
    // Show error
    // Add error class
    setErrorFor(lastName, "Last name cannot be blank");
  } else if (lastNameValue.length < 4) {
    setErrorFor(lastName, "Last name must be at leatst 4 characters");
  } else {
    // Add success class
    setSuccessFor(lastName);
  }

  if (phoneNumberValue === "") {
    // Show error
    // Add error class
    setErrorFor(phoneNumber, "Phone number cannot be blank");
  } else if (typeof +phoneNumberValue !== "number") {
    setErrorFor(phoneNumber, "Phone number must be a number");
  } else if (+phoneNumberValue.length < 9) {
    console.log(phoneNumberValue.length);
    setErrorFor(phoneNumber, "Enter a valid phone number");
  } else {
    // Add success class
    setSuccessFor(phoneNumber);
  }

  if (messageValue === "") {
    // Show error
    // Add error class
    setErrorFor(message, "Message cannot be blank");
  } else if (messageValue.length > 140) {
    setErrorFor(message, "Message cannot be more than 140 characters");
  } else if (messageValue.length < 10) {
    setErrorFor(message, "Message cannot be less than 10 characters");
  } else {
    // Add success class
    setSuccessFor(message);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector("small");

  // Add error message
  small.innerText = message;
  // Add error class
  inputBox.classList.add("error");
  console.log(inputBox);
}

function setSuccessFor(input) {
  const inputBox = input.parentElement;

  //   Remocve error clas
  inputBox.classList.remove("error");

  // Add error class
  inputBox.classList.add("success");
  console.log(inputBox);
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});
