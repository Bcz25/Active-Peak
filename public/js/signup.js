// variable for the function to handle the signup form
const signupFormHandler = async (event) => {
  // prevent the default action of the form
  event.preventDefault();
  // get the values from the form
  const email = document.querySelector("#email-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  // if both values are present, send a POST request to the API endpoint
  if (email && username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: { "Content-Type": "application/json" },
    });
    // if the response is ok, redirect to the dashboard page
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
