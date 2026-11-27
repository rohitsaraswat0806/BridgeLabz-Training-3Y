const API_URL = "http://localhost:3005/timetable";
const daySelect = document.getElementById("day");
const timetable = document.getElementById("timetable");

function loadTimetable() {
    const selectedDay = daySelect.value;
    timetable.textContent = "Loading timetable...";

    fetch(API_URL + "?day=" + encodeURIComponent(selectedDay))
        .then(response => {
            if (!response.ok) {
                throw new Error("Request failed");
            }
            return response.json();
        })
        .then(classes => {
            timetable.innerHTML = "";

            if (classes.length === 0) {
                timetable.textContent = "No classes today.";
                return;
            }

            classes.forEach(item => {
                const row = document.createElement("div");
                row.className = "class-row";

                const subject = document.createElement("h3");
                subject.textContent = item.subject;

                const faculty = document.createElement("p");
                faculty.textContent = "Faculty: " + item.faculty;

                const time = document.createElement("p");
                time.textContent = "Time: " + item.time;

                row.append(subject, faculty, time);
                timetable.appendChild(row);
            });
        })
        .catch(() => {
            timetable.textContent = "Unable to load timetable. Check JSON Server.";
        });
}

daySelect.addEventListener("change", loadTimetable);
loadTimetable();
