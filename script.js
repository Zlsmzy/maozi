const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

const words = [
  "你点尼马呢"
];

btn.addEventListener("click", () => {
  const random = words[Math.floor(Math.random() * words.length)];
  msg.textContent = random;
});