const hours = new Date().getHours();
const greeting = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";
document.querySelector('p').textContent = `${greeting} I'm a Web Developer`;
