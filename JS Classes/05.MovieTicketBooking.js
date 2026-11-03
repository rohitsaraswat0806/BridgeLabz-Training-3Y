document.body.innerHTML = `
<h2>Movie Ticket Booking</h2>
<form id="bookingForm">
<input id="name" placeholder="Name" required><br><br>
<input id="email" type="email" placeholder="Email" required><br><br>
<input id="seats" type="number" placeholder="Seats (1-10)" min="1" max="10" required><br><br>
<button type="submit">Book Tickets</button>
</form><div id="ticketDetails"></div>`;
document.getElementById("bookingForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);
    if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(name)) return alert("Name must contain alphabets only.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Enter a valid email address.");
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) return alert("Seats must be between 1 and 10.");
    const booking = { name, email, seats };
    document.getElementById("ticketDetails").innerHTML =
        `<h3>Booking Confirmed</h3><p>Name: ${booking.name}</p><p>Email: ${booking.email}</p><p>Seats: ${booking.seats}</p>`;
});
