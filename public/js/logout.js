// Login page logout button event listener
const logout = async () => {
    event.preventDefault();
    // Fetch request to logout the user using the POST method
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    // If the response is okay, redirect the user to the login page
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  // Add an event listener to the logout button
  document.querySelector('#logout').addEventListener('click', logout);
  