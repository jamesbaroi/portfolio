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

// Change css III ------------------------------------------------------------/

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

// Cookie acceptor -----------------------------------------------------------/

// (1) Check cookie (if user previously accepted cookies)
// (2) Show policy (cookie) notice if not, otherwise do not show
// (3) Allow user to select cookies (form)
// (4) Save user selected cookies, reload and repeat
// (5) Show theme color selection option if cookies accepted

// Get theme and parent container
const thmP = document.getElementById('thmP');
const thm = document.getElementById('thm');

// Get cookie config (if user previously accepted)
const ckNec = localStorage.getItem('ckNec?');
const ckPer = localStorage.getItem('ckPer?');
const ckFun = localStorage.getItem('ckFun?');
const ckTar = localStorage.getItem('ckTar?'); 

// Check cookie acceptance and set config accordingly
// Necessary default must set
if (ckNec != 'ckNecY') {
  // Show cookie notice (user did not accept)
  document.getElementById('ntc').style.display = 'grid';
  // Hide and remove thm color selection button
  document.getElementById('thm').style.display = 'none';
  thm.remove(); // necessary to prevent dev tool manipulation
} else {
  // Remove notice (user did accept)
  document.getElementById('ntc').style.display = 'none';
  // Append and show thm color selection button
  thmP.append(thm);
  document.getElementById('thm').style.display = 'block';
  document.getElementById('thm').style.transition = '0.6s';
}

// Develop as needed...
if (ckPer != 'ckPerY') {
  // create logic...
}

if (ckFun != 'ckFunY') {
  // create logic...
}

if (ckTar != 'ckTarY') {
  // create logic...
}

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
  const ckFPer =
    document.forms['frm1']['ckPer'].checked;
  const ckFFun =
    document.forms['frm1']['ckFun'].checked;
  const ckFTar =
    document.forms['frm1']['ckTar'].checked;
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
  // Set Necessary cookies
  localStorage.setItem(
    'ckNec?',
    'ckNecY'
  );
}


