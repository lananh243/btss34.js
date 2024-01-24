let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let table = document.getElementById("tab");
    let rowCount = table.rows.length;
    let newRow = table.insertRow();
      
    let cell1 = newRow.insertCell();
    cell1.innerHTML = "Cell 1 row " + (rowCount + 1);
    let cell2 = newRow.insertCell();
    cell2.innerHTML = "Cell 2 row " + (rowCount + 1);
    let cell3 = newRow.insertCell();
    cell3.innerHTML = "Cell 3 row " + (rowCount + 1);
});