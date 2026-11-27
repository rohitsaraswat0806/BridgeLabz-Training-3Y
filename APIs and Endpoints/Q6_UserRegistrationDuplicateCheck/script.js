const API_URL = "http://localhost:3006/users";
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    message.textContent = "Checking email...";

    try {
        const checkResponse = await axios.get(API_URL, {
            params: { email: email }
        });

        if (checkResponse.data.length > 0) {
            message.textContent = "Email already registered.";
            return;
        }

        await axios.post(API_URL, { name: name, email: email });
        message.textContent = "Registration successful.";
        form.reset();
    } catch (error) {
        message.textContent = "Registration failed. Check JSON Server and try again.";
    }
});
