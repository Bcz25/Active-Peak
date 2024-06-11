// This file is used to handle the login form submission
const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form by default so we can do so with JavaScript
  event.preventDefault();
  // Get the email and password from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  // If the email and password fields aren't empty, send the user data to the login route
  if (email && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // If the response is okay, redirect the user to the homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};
// Add an event listener to the login form
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
