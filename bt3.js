let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click", function(){
    text.innerText = "Text after change";
});