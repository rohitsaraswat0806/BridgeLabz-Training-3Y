document.body.innerHTML = `
<h2>Student Registration Form</h2>
<form id="studentForm">
<input id="name" placeholder="Name" required><span id="nameError"></span><br><br>
<input id="email" placeholder="Email" required><span id="emailError"></span><br><br>
<input id="phone" placeholder="Phone" required><span id="phoneError"></span><br><br>
<input id="password" type="password" placeholder="Password" required><span id="passwordError"></span><br><br>
<button type="submit">Register</button>
</form><p id="message"></p>`;
const patterns = {
    name: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};
document.getElementById("studentForm").addEventListener("submit", event => {
    event.preventDefault();
    let isValid = true;
    ["name", "email", "phone", "password"].forEach(field => {
        const input = document.getElementById(field);
        const valid = patterns[field].test(input.value.trim());
        input.style.border = valid ? "2px solid green" : "2px solid red";
        document.getElementById(field + "Error").textContent = valid ? "" : " Invalid " + field;
        document.getElementById(field + "Error").style.color = "red";
        if (!valid) isValid = false;
    });
    const message = document.getElementById("message");
    message.textContent = isValid ? "Registration successful!" : "Please correct the invalid fields.";
    message.style.color = isValid ? "green" : "red";
});
