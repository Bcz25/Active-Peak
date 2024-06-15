// This document.querySelector() method is used to select the login-form element.
document
  .querySelector("#login-form")
  .addEventListener("submit", async (event) => {
    // Prevent the default form submission action.
    event.preventDefault();
    // This const statement declares the email and password variables and assigns them the values of the email and password input elements, respectively.
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    // This if statement checks if the email and password variables have values.
    if (email && password) {
      try {
        const response = await fetch("/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        // This if statement checks if the response is okay.
        if (response.ok) {
          document.location.replace("/profile");
        } else {
          alert("Failed to sign up");
        }
      } catch (err) {
        console.error(err);
      }
    }
  });
