const datePicker = document.getElementById("date-picker");
const slotsContainer = document.querySelector(".slots");

datePicker.addEventListener("change", fetchSlots);

function fetchSlots() {
    const selectedDate = datePicker.value;
    
    // You need to replace this with your API call to get available slots for the selected date.
    const apiURL = `https://syattendance.onrender.com/api/appointment/getslots`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => displaySlots(data))
        .catch(error => console.error("Error fetching slots:", error));
}

function displaySlots(slotsData) {
    slotsContainer.innerHTML = "";

    // Loop through the slotsData and create HTML elements to display the slots.
    for (const slot of slotsData) {
        const slotElement = document.createElement("div");
        slotElement.className = "slot";
        slotElement.textContent = slot.time; // Adjust this based on your API response structure.
        slotsContainer.appendChild(slotElement);
    }
}
