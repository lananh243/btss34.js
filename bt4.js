const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", function() {
    text.classList.toggle("highlight");
});