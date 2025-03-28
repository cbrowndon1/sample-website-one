// Handle Reservation Form
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Validate inputs (basic example)
    if (name === "" || email === "" || date === "" || time === "") {
        alert("Please fill in all the fields for the reservation.");
        return;
    }

    // Simulate successful reservation
    alert(Reservation Successful!\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time});
    // Clear form
    document.getElementById("reservationForm").reset();
});

// Handle Delivery Form
document.getElementById("deliveryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const deliveryAddress = document.getElementById("deliveryAddress").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    // Validate inputs (basic example)
    if (deliveryAddress === "" || deliveryDate === "") {
        alert("Please fill in both the address and delivery date.");
        return;
    }

    // Simulate successful order
    alert(Order Placed!\nDelivery Address: ${deliveryAddress}\nDelivery Date: ${deliveryDate});
    // Clear form
    document.getElementById("deliveryForm").reset();
});

// Handle Payment Form
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Validate inputs (basic example)
    if (cardNumber === "" || expiryDate === "" || cvv === "") {
        alert("Please fill in all the payment details.");
        return;
    }

    // Simple credit card validation (basic length check, doesn't cover real card validation)
    if (cardNumber.length < 16 || cardNumber.length > 19) {
        alert("Please enter a valid card number.");
        return;
    }

    if (cvv.length !== 3 && cvv.length !== 4) {
        alert("Please enter a valid CVV.");
        return;
    }

    // Simulate payment processing
    alert("Payment Successful! Your order has been processed.");
    // Clear form
    document.getElementById("paymentForm").reset();
});

