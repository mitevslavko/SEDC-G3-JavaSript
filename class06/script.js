function generateTable() {
    
    let rowsInput = document.getElementById('insertRows').value;
    
    let columnInput = document.getElementById('insertColumns').value;

    let table = document.createElement('table');

    for (let i = 0; i < rowsInput; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columnInput; j++) {
            let td = document.createElement('td');
            let text = document.createTextNode('Row ' + (i+1) + ', Column ' + (j+1));
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    
    document.getElementById('tableArea').innerHTML = '';
    document.getElementById('tableArea').appendChild(table);
    table.style.border = "2px solid black";
}

document.getElementById('genButton').addEventListener('click', generateTable);
