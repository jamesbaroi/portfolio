// Use this file with index.hbs and main.css / main.scss for completeness

// Change css (I) ------------------------------------------------------------/

// (1) Toggle hamburger menu bars to x and back (#mnu-btn)
// (2) Toggle menu display (#mnu)

function clk1() {
  document.body.classList.toggle('clk1');
}

// Change css (II) -----------------------------------------------------------/

// (1) Toggle policy notice (#ntc)
// (2) Toggle policy notice form (#frm1)

function clk2() {
  document.body.classList.toggle('clk2');
}

// Change css (III) ----------------------------------------------------------/

// (1) Toggle necessary cookie select
// (2) Toggle performance cookie select
// (3) Toggle functional cookie select
// (4) Toggle targeting cookie select

function iNec() {
  document.body.classList.toggle('clk-iNec');
}

function iPer() {
  document.body.classList.toggle('clk-iPer');
}

function iFun() {
  document.body.classList.toggle('clk-iFun');
}

function iTar() {
  document.body.classList.toggle('clk-iTar');
}

// Accept cookies / toggle theme ---------------------------------------------/
// Consturct these together since theme uses local storage (privacy liability!)

// I. Toggle user theme selection
// (1) Check theme (if user previously selected theme) and set selection
// (2) If not then default to light theme, otherwise default to dark
// (3) Toggle theme on user selection
// (4) Set theme cookie to persist selection

// II. Accept user cookie agreement
// (1) Check cookie (if user previously accepted cookies) and set selection
// (2) Show policy (cookie) notice if not, otherwise do not show
// (3) Allow user to select cookies (form)
// (4) Save user selected cookies, reload and repeat
// (5) Show theme color selection option if cookies accepted

// Get theme and parent container
const thmP = document.getElementById('thmP');
const thm = document.getElementById('thm');

// I. Toggle theme
// Get selected theme if any
const thmS = localStorage.getItem('theme');

// Set defaults
if (thmS == 'dark') {
  document.body.classList.toggle('dark-theme');
  document.getElementById('thm').innerHTML = 's u n s h i n e';
} else {
  // Set light default if no cookies accepted
  document.body.classList.toggle('light-theme');
  document.getElementById('thm').innerHTML = 'm o o n l i g h t';
}

// Toggle theme on click and set cookie accordingly
thm.addEventListener('click', () => {

  // (1) Toggle theme
  // (2) Set selected theme cookie

  // Match media query for dark theme
  const dark = window.matchMedia('screen and (prefers-color-scheme: dark)');

  if (dark.matches) {

    // If dark and user clicks then:
    // (1) Change css to light
    // (2) Set light cookie
    // (3) Set theme icon to dark (to switch back to dark from light)

    document.body.classList.toggle('light-theme');
    var theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark';

    var thmIcn = document.body.classList.contains('light-theme')
      ? 'm o o n l i g h t'
      : 's u n s h i n e';

    document.getElementById('thm').innerHTML = thmIcn;

  } else {

    // If light and user clicks then:
    // (1) Change css to dark
    // (2) Set dark cookie
    // (3) Set theme icon to light (to switch back to light from dark)

    document.body.classList.toggle('dark-theme');
    var theme = document.body.classList.contains('dark-theme')
      ? 'dark'
      : 'light';

    var thmIcn = document.body.classList.contains('dark-theme')
      ? 's u n s h i n e'
      : 'm o o n l i g h t';

    document.getElementById('thm').innerHTML = thmIcn;
  }

  localStorage.setItem('theme', theme);
});

// II. Accept cookies
// Get cookie config (if user previously accepted)
const ckNec = localStorage.getItem('ckNec?');
const ckPer = localStorage.getItem('ckPer?');
const ckFun = localStorage.getItem('ckFun?');
const ckTar = localStorage.getItem('ckTar?'); 

// Check user cookies
if (ckNec != 'ckNecY') {

  // User did not set cookie so:
  // (1) Show cookie notice (user did not accept)
  // (2) Hide and remove thm color selection button

  document.getElementById('ntc').style.display = 'grid';
  document.getElementById('thm').style.display = 'none';
  thm.remove(); // necessary to prevent dev tool manipulation

} else {

  // User set cookies so:
  // (1) Remove notice (user did accept)
  // (2) Append and show thm color selection button

  document.getElementById('ntc').style.display = 'none';
  thmP.append(thm);
}

// Develop as needed...
if (ckPer != 'ckPerY') { /* create logic... */ }
if (ckFun != 'ckFunY') { /* create logic... */ }
if (ckTar != 'ckTarY') { /* create logic... */ }

// Accept all cookies
function sbm1() {
  // Set all cookies
  localStorage.setItem(
    'ckNec?',
    'ckNecY'
  );

  localStorage.setItem(
    'ckPer?',
    'ckPerY'
  );

  localStorage.setItem(
    'ckFun?',
    'ckFunY'
  );

  localStorage.setItem(
    'ckTar?',
    'ckTarY'
  );

  thmP.append(thm); // add thm toggle
  location.reload(false); // reload page
}

// Confirm cookie choices (form submit)
function sbm2() {
  // Get form data
  const ckFPer = document.forms['frm1']['ckPer'].checked;
  const ckFFun = document.forms['frm1']['ckFun'].checked;
  const ckFTar = document.forms['frm1']['ckTar'].checked;

  // Set cookies accordingly
  if (ckFPer) {
    localStorage.setItem(
      'ckPer?',
      'ckPerY'
    );
  }

  if (ckFFun) {
    localStorage.setItem(
      'ckFun?',
      'ckFunY'
    );
  }

  if (ckFTar) {
    localStorage.setItem(
      'ckTar?',
      'ckTarY'
    );
  }

  // Unconditional
  localStorage.setItem(
    'ckNec?',
    'ckNecY'
  );
}