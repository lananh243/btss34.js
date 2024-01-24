let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
let list = document.getElementById("list");
for(let i=0; i<names.length; i++){
    let li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
}