const today = new Date();

const year = today.getFullYear();
const month = today.toLocaleString('default', { month: 'long' });
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${month} ${day}, ${year}`;

let clock = document.getElementById('clock');
if (clock) {
  clock.innerHTML = formattedDate;
} else {
  console.error('Element with ID "clock" not found.');
}

