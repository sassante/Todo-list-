function addTask() {
    var taskInput = document.getElementById("newTaskInput").value;
    if (taskInput !== "") {
        var notesTable = document.getElementById("notes");

        var newRow = notesTable.insertRow(-1); 
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.onclick = function () {
            toggleCompleted(checkbox);
        };

        cell1.appendChild(checkbox);
        cell2.innerHTML = '<p>' + taskInput + '<span class="delete-icon" onclick="deleteTask(this)">&#128465;</span></p>';

        document.getElementById("newTaskInput").value = "";
    }
}

function deleteTask(deleteButton) {
    var row = deleteButton.closest("tr");
    row.parentNode.removeChild(row);
}

function toggleCompleted(checkbox) {
    var row = checkbox.closest("tr");
    if (checkbox.checked) {
        row.style.textDecoration = "line-through";
    } else {
        row.style.textDecoration = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the table and its rows
    var notesTable = document.getElementById('notes');
    var noteRows = notesTable.getElementsByClassName('note-item');

    // Create a new table for notes only
    var newTable = document.createElement('table');
    newTable.id = 'notes-only';

    // Iterate through each note row and add it to the new table
    for (var i = 0; i < noteRows.length; i++) {
        var newRow = document.createElement('tr');
        newRow.className = 'note-item';
        newRow.innerHTML = noteRows[i].innerHTML;
        newTable.appendChild(newRow);
    }

    // Replace the existing table with the new table
    notesTable.parentNode.replaceChild(newTable, notesTable);
});




