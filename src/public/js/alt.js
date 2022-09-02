/* Timestamp */

const ts = document.getElementById('timestamp');

if (ts) {

  ts.innerHTML = new Date;

}

// Scroll to top -------------------------------------------------------------/
const scr = document.getElementById('scr-btn');

function scrUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = () => { scrFunc(); };

// Show scroll-to-top button
function scrFunc() {
  if (
    // When user scrolls down more than 200px show scroll up button
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
  ) {
    scr.style.opacity = '1';
    scr.style.cursor = 'pointer';
  } else {
    scr.style.opacity = '0';
    scr.style.cursor = 'default';
  }
}
