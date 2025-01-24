window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const logo = document.querySelector('header img'); 
  const isLargeScreen = window.innerWidth >= 1024; 

  if (isLargeScreen) {
    if (window.scrollY > 0) {
      // Update header height for large screens
      header.classList.add('scrolled');
      header.classList.remove('lg:h-28');
      header.classList.add('lg:h-20');

      // Update logo size for large screens
      logo.classList.remove('w-28', 'h-24');
      logo.classList.add('w-20', 'h-20'); 
    } else {
      // Reset header height
      header.classList.remove('scrolled', 'lg:h-20');
      header.classList.add('lg:h-28');

      // Reset logo size
      logo.classList.remove('w-20', 'h-20');
      logo.classList.add('w-28', 'h-24'); 
    }
  }
});
