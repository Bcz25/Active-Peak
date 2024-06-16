document.getElementById('home-routines').addEventListener('click', function() {
  this.classList.toggle('active'); // Toggle a class to change appearance
  // Toggle the data-value attribute or handle the "checked" state in your script
  if (this.getAttribute('data-value') === 'home') {
    this.setAttribute('data-value', 'home-checked');
  } else {
    this.setAttribute('data-value', 'home');
  }
});