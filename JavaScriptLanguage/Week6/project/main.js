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

function deleteLog(index) {
    logs.splice(index, 1);
    updateLogList();
}

function updateLogList() {
    const logList = document.getElementById("logList");
    logList.innerHTML = "";

    logs.forEach(function (log, index) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(log));

        const deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.addEventListener("click", function () {
            deleteLog(index);
        });

        li.appendChild(deleteButton);
        logList.appendChild(li);
    });
}