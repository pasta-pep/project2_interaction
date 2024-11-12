const today = new Date();

const year = today.getFullYear();
// const month= String(today.getMonth() +1).padStart(2,'0');
const month = today.toLocaleString('default', { month: 'long' });
const day = String(today.getDate()).padStart(2,'0');
const formattedDate = `${month}  ${day}, ${year}`;

let clock = document.getElementById('clock');
clock.innerHTML = formattedDate;
