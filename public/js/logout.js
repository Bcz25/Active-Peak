// Login page logout button event listener.
const logout = async (event) => {
  event.preventDefault();
  // Fetch request to logout the user using the POST method.
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // If the response is okay, redirect the user to the login page.
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

// Add an event listener to the logout button, and call the logout function when the button is clicked.
document.querySelector("#logout").addEventListener("click", logout);
