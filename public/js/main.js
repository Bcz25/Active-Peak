window.onload = function() {
    // Select the dropdown menus
    var dropdownMenus = document.querySelectorAll('.absolute.right-0.z-10.mt-2.w-48.origin-top-right.rounded-md.bg-white.py-1.shadow-lg.ring-1.ring-black.ring-opacity-5.focus\\:outline-none');
    var mobileMenu = document.getElementById('mobile-menu');
  
    // Add a CSS class to hide the menus
    for (var i = 0; i < dropdownMenus.length; i++) {
      dropdownMenus[i].classList.add('hidden');
    }
  
    // Hide the mobile menu
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  }

  