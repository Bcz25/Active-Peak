document.querySelector("#signup-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const users_name = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && users_name && password) {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, users_name, password }),
      });

      if (response.ok) {
        document.location.replace(`/profile/${users_name}`);
      } else {
        alert('Failed to sign up');
      }
    } catch (err) {
      console.error(err);
    }
  }
});