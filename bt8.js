let deleteBtn = document.getElementsByClassName("deleteBtn");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function() {
    let row = this.parentNode.parentNode;
    let table = row.parentNode;
    let rowIndex = row.rowIndex;
    table.deleteRow(rowIndex);
  });
}