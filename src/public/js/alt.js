/**Timestamp */

const ts = document.getElementById('timestamp');

if (ts) {

  ts.innerHTML = new Date;

}

/**Scroll up */
function scrUp() {

  /**For Safari */
  document.body.scrollTop = 0;

  /**For Chrome, Firefox, IE and Opera */
  document.documentElement.scrollTop = 0;

}
