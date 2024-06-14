document.querySelector("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert('Failed to sign up');
      }
    } catch (err) {
      console.error(err);
    }
  }
});