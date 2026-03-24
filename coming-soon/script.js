const releaseDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 10);
const countdownEl = document.getElementById('countdown');
const form = document.getElementById('notify-form');
const message = document.getElementById('message');

function updateCountdown() {
  const now = new Date();
  const diff = releaseDate - now;
  if (diff <= 0) {
    countdownEl.textContent = 'We are live!';
    clearInterval(timer);
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60))%24);
  const mins = Math.floor((diff/(1000*60))%60);
  const secs = Math.floor((diff/1000)%60);
  countdownEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return;
  message.textContent = 'Thanks! You will be notified.';
  form.reset();
});
