const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};
document.body.innerHTML = `
<h2>Edit User Details</h2>
<form id="userForm">
<input id="name" placeholder="Name" required><br><br>
<input id="email" type="email" placeholder="Email" required><br><br>
<input id="age" type="number" placeholder="Age" required><br><br>
<button type="submit">Update</button>
</form><h3>Updated User</h3><pre id="userDetails"></pre>`;
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;
function displayUser() {
    document.getElementById("userDetails").textContent = JSON.stringify(user, null, 2);
}
document.getElementById("userForm").addEventListener("submit", event => {
    event.preventDefault();
    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);
    displayUser();
});
displayUser();
