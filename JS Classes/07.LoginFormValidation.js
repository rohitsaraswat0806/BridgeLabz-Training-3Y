document.body.innerHTML = `
<h2>Login Form</h2>
<form id="loginForm">
<input id="username" placeholder="Username" required><br><br>
<input id="password" type="password" placeholder="Password" required><br><br>
<button type="submit">Login</button>
</form><p id="message"></p>`;
document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errors = [];
    if (!/^.{5,}$/.test(username)) errors.push("Username must be at least 5 characters.");
    if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/.test(password)) {
        errors.push("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
    }
    const message = document.getElementById("message");
    message.textContent = errors.length ? errors.join(" ") : "Login validation successful!";
    message.style.color = errors.length ? "red" : "green";
});
