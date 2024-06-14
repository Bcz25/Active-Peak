document.querySelector("#signup-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const users_name = document.querySelector('#users_name').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && users_name && password) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, users_name, password }),
      });
      console.log(users_name);

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