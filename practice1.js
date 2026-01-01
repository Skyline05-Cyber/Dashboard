// CLOCK
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    clock.innerText = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// THEME TOGGLE
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// QUOTES
const quotes = [
    "Discipline beats motivation.",
    "You are stronger than you think.",
    "Consistency creates monsters.",
    "No comfort, only growth.",
    "Build now. Relax later.",
    "I don't get lucky,I make my own luck.",
    "The Odds, Are Stacks Against Me, I am Who I am Thats what i did."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quote");

quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
});
