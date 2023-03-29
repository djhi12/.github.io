const logs = [];

function addLog() {
    const logInput = document.getElementById("logInput");
    const log = logInput.value.trim();

    if (log) {
        logs.push(log);
        logInput.value = "";
        updateLogList();
    }
}

// Delete log
function deleteLog(index) {
    logs.splice(index, 1);
    updateLogList();
}

// Update log 
function updateLogList() {
    const logList = document.getElementById("logList");
    logList.innerHTML = "";

    logs.forEach(function (log, index) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(log));

        // Delete
        const deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this log?")) {
                deleteLog(index);
            }
        });

        // Edit
        const editButton = document.createElement("button");
        editButton.appendChild(document.createTextNode("Edit"));
        editButton.addEventListener("click", function () {
            const newLog = prompt("Enter new log:", log);
            if (newLog !== null) {
                logs[index] = newLog.trim();
                updateLogList();
            }
        });
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        logList.appendChild(li);
        deleteButton.classList.add("delete-button");
        editButton.classList.add("edit-button");
    });
}
