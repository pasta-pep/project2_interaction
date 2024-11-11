// function myFunction() {
//     alert("Your journal is saved :)");
// }


// const today = new Date();

// const year = today.getFullYear();
// const month = today.toLocaleString('default', { month: 'long' });
// const day = String(today.getDate()).padStart(2,'0');
// const formattedDate = `${month}  ${day}, ${year}`;

// let clock = document.getElementById('clock');
// clock.innerHTML = formattedDate;


const today = new Date();

const year = today.getFullYear();
const month = today.toLocaleString('default', { month: 'long' });
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${month} ${day}, ${year}`;  // Fixed the spacing here

let clock = document.getElementById('clock');
clock.innerHTML = formattedDate;
