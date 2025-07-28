document.getElementById('yesBtn').addEventListener('click', () => {
  document.getElementById('container').innerHTML = `
    <h1>Great! 🎉</h1>
    <p>📍 <strong>30 Gordon Street, Allston, MA 02134</strong></p>
    <p>🕕 <strong>1st August at 6 PM</strong></p>
  `;
});

document.getElementById('noBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  document.getElementById('container').innerHTML = `
    <div style="font-size: 5em;">🔴 🔺 ◻️</div>
  `;
});
