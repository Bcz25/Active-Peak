// This document.querySelector() method is used to select the signup-form element.
document
  .querySelector("#signup-form")
  .addEventListener("submit", async (event) => {
    // Prevent the default form submission action.
    event.preventDefault();
    // This const statement declares the email, users_name, and password variables and assigns them the values of the email, users_name, and password input elements, respectively.
    const email = document.querySelector("#email").value.trim();
    const users_name = document.querySelector("#users_name").value.trim();
    const password = document.querySelector("#password").value.trim();
    // This if statement checks if the email, users_name, and password variables have values.
    if (email && users_name && password) {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, users_name, password }),
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
