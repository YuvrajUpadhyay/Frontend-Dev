function bookTicket(name, email, seats) {
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const seatsRegex = /^[1-9]$|^10$/;

  if (nameRegex.test(name) && emailRegex.test(email) && seatsRegex.test(seats)) {
    const booking = { name, email, seats };
    console.log("Ticket booked:", booking);
  } else {
    console.log("Invalid input!");
  }
}

bookTicket("Alice", "alice@mail.com", 3);
