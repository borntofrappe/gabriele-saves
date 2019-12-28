const body = document.querySelector('body');
const checkbox = document.querySelector('input');
let isDark = true;
const toggleSun = document.querySelector('#toggle--sun');
const toggleMoon = document.querySelector('#toggle--moon');

// toggle the boolean and assign a different set of colors for the two custom property
function toggleTheme() {
  isDark = !isDark;
  body.style.setProperty(`--background`, isDark ? 'hsl(245, 25%, 5%)' : 'hsl(35, 45%, 95%)');
  body.style.setProperty(`--color`, isDark ? 'hsl(230, 15%, 75%)' : 'hsl(40, 40%, 20%)');

  // animate the chosen groups to highlight the different icons
  anime({
    targets: toggleMoon,
    transform: isDark ? 'scale(0)' : 'scale(1)',
    duration: 600,
    easing: 'easeInOutBack',
  });
  anime({
    targets: toggleSun,
    transform: isDark ? 'scale(1)' : 'scale(0)',
    duration: 600,
    easing: 'easeInOutBack',
  });
}

checkbox.addEventListener('input', toggleTheme);
