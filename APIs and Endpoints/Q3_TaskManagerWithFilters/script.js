const API_URL = "http://localhost:3003/tasks";

function loadTasks() {
    const selected = $("#filter").val();
    let query = "";

    if (selected === "completed") {
        query = "?completed=true";
    } else if (selected !== "all") {
        query = "?priority=" + encodeURIComponent(selected);
    }

    $("#taskList").text("Loading tasks...");

    $.ajax({
        url: API_URL + query,
        method: "GET",
        success: function (tasks) {
            $("#taskList").empty();

            if (tasks.length === 0) {
                $("#taskList").text("No tasks found.");
                return;
            }

            tasks.forEach(task => {
                const row = $("<div>").addClass("task");
                const checkbox = $("<input>", { type: "checkbox", checked: task.completed });
                const title = $("<span>").text(" " + task.title + " (" + task.priority + ")");

                if (task.completed) {
                    title.addClass("done");
                }

                checkbox.on("change", function () {
                    updateTask(task, this.checked, title);
                });

                row.append(checkbox, title);
                $("#taskList").append(row);
            });
        },
        error: function () {
            $("#taskList").text("Unable to load tasks.");
        }
    });
}

function updateTask(task, completed, titleElement) {
    $.ajax({
        url: API_URL + "/" + task.id,
        method: "PATCH",
        contentType: "application/json",
        data: JSON.stringify({ completed: completed }),
        success: function () {
            task.completed = completed;
            titleElement.toggleClass("done", completed);
            $("#message").text("Task updated.");
        },
        error: function () {
            $("#message").text("Could not update task. Reloading list.");
            loadTasks();
        }
    });
}

$("#filter").on("change", loadTasks);
loadTasks();
