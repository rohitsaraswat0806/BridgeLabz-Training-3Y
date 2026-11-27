const API_URL = "http://localhost:3002/employees";
const employeeList = document.getElementById("employeeList");
const message = document.getElementById("message");

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const employees = JSON.parse(xhr.responseText);
            employeeList.innerHTML = "";

            employees.forEach(employee => {
                const row = document.createElement("div");
                row.className = "employee";

                const name = document.createElement("span");
                name.textContent = employee.name;

                const status = document.createElement("span");
                status.textContent = employee.status;
                status.className = employee.status;

                const button = document.createElement("button");
                button.textContent = "Toggle Status";
                button.addEventListener("click", () => toggleStatus(employee, status, button));

                row.append(name, status, button);
                employeeList.appendChild(row);
            });
        } else {
            employeeList.textContent = "Could not load employees.";
        }
    };

    xhr.onerror = function () {
        employeeList.textContent = "Network error. Check JSON Server.";
    };

    xhr.send();
}

function toggleStatus(employee, statusElement, button) {
    const oldStatus = employee.status;
    const newStatus = oldStatus === "active" ? "inactive" : "active";

    employee.status = newStatus;
    statusElement.textContent = newStatus;
    statusElement.className = newStatus;
    button.disabled = true;
    message.textContent = "";

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", API_URL + "/" + employee.id);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        button.disabled = false;

        if (xhr.status >= 200 && xhr.status < 300) {
            message.textContent = "Status updated successfully.";
        } else {
            employee.status = oldStatus;
            statusElement.textContent = oldStatus;
            statusElement.className = oldStatus;
            message.textContent = "Update failed. Previous status restored.";
        }
    };

    xhr.onerror = function () {
        button.disabled = false;
        employee.status = oldStatus;
        statusElement.textContent = oldStatus;
        statusElement.className = oldStatus;
        message.textContent = "Network error. Previous status restored.";
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

loadEmployees();
