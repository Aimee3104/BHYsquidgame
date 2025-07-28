document.getElementById('yesBtn').addEventListener('click', () => {
  document.getElementById('container').innerHTML = `
    <h1>Great! 🎉</h1>
    <p>📍 <strong>30 Gordon Street, Allston, MA 02134</strong></p>
    <p>🕕 <strong>1st August at 6 PM</strong></p>
    <p>Fill out this form to RSVP:</p>
    <iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  `;
});

document.getElementById('noBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  document.getElementById('container').innerHTML = `
    <div id="logo">🔴 △ □</div>
  `;
});
