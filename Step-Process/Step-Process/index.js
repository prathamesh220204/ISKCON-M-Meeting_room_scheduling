const timeSlots = [
  { time: "3:00pm", status: "pending" },
  { time: "4:45pm", status: "booked" },
  { time: "5:30pm", status: "available" },
  { time: "6:30pm", status: "available" },
  { time: "7:15pm", status: "pending" },
  { time: "8:00pm", status: "booked" }
];

const next7Days = Array.from({ length: 9 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i - 1);
  return date;
});

const selectedDateElement = document.getElementById("selected-date");
const timeSlotsElement = document.getElementById("time-slots");
const dateButtonsElement = document.getElementById("date-buttons");

let selectedDate = new Date();

// Populate date buttons
function renderDates() {
  dateButtonsElement.innerHTML = "";
  next7Days.forEach((date) => {
    const button = document.createElement("button");
    button.className = `date-button ${date.toDateString() === selectedDate.toDateString() ? "selected" : ""
      }`;
    button.innerHTML = `
      <div class="date-content">
        <span>${date.toLocaleDateString("en-US", { weekday: "short" })}</span>
        <span class="date-number">${date.getDate()}</span>
      </div>
    `;
    button.onclick = () => selectDate(date);
    dateButtonsElement.appendChild(button);
  });
}

// Populate time slots
function renderTimeSlots() {
  timeSlotsElement.innerHTML = "";
  timeSlots.forEach((slot) => {
    const button = document.createElement("button");
    button.className = `time-slot ${slot.status === "booked"
      ? "time-slot-booked"
      : slot.status === "pending"
        ? "time-slot-pending"
        : "time-slot-available"
      }`;
    button.disabled = slot.status === "booked";
    button.innerHTML = `<span>${slot.time}</span> ▶`;

    // Add click listener for selecting a time slot
    button.onclick = () => handleSlotClick(slot);

    timeSlotsElement.appendChild(button);
  });
}

// Handle date selection
function selectDate(date) {
  selectedDate = date;
  renderDates();
  selectedDateElement.textContent = `Selected Date: ${date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })}`;
}

// Handle slot click
function handleSlotClick(slot) {
  // Update the booking time in the UI
  const bookingTimeElement = document.getElementById("booking-time");
  const timeSlotSpan = document.getElementById("time-slot-span");

  // Update the time slot display
  timeSlotSpan.textContent = `${slot.time} to ${getNextSlotTime(slot.time)}`;

  // You can also change the status of the time slot if needed
  alert(`You selected the ${slot.time} time slot for booking!`);
}

// Get the next slot's time (for example, calculate the range for the selected time)
function getNextSlotTime(time) {
  const timeMap = {
    "3:00pm": "4:30pm",
    "4:45pm": "6:15pm",
    "5:30pm": "7:00pm",
    "6:30pm": "8:00pm",
    "7:15pm": "8:45pm",
    "8:00pm": "9:30pm"
  };
  return timeMap[time] || "";
}

// Initialize
renderDates();
renderTimeSlots();

// Scroll dates (for future implementation)
function scrollDates(direction) {
  console.log(`Scrolling dates in direction: ${direction}`);
}

// Switch between Day View and Calendar View
function switchView(view) {
  document.getElementById("day-view").style.display =
    view === "day" ? "block" : "none";
  document.getElementById("calendar-view").style.display =
    view === "calendar" ? "block" : "none";

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  const activeTab = view === "day" ? tabs[0] : tabs[1];
  activeTab.classList.add("active");
}

// Close booking (placeholder)
function closeBooking() {
  alert("Closing the booking page!");
}

// Initialize
renderDates();
renderTimeSlots();

// Function to handle slot clicks 
/*
function handleSlotClick(event) {
  const slot = event.target;
  const slotStatus = slot.dataset.status;
  const slotTime = slot.dataset.time;


  if (slotStatus === "available" || slotStatus === "pending") {
    const cardSection = document.getElementById("card-section");

    if (document.querySelector(`[data-time="${slotTime}"]`)) {
      alert("This time slot is already added to the card section.");
      return;
    }

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <p>Time Slot: ${slotTime}</p>
    <button class="remove-card">Remove</button>
  `;
    card.dataset.time = slotTime;


    card.querySelector(".remove-card").addEventListener("click", () => {
      card.remove();
    });

    cardSection.appendChild(card);
  } else {
    // Show alert for red slots (booked)
    alert("This time slot is not allowed to be added.");
  }
}


document.querySelectorAll(".time-slot").forEach((slot) => {
  slot.addEventListener("click", handleSlotClick);
});

*/

function continueBooking() {
  const hallName = "Meeting Hall 101";
  const timeSlot = document.getElementById("time-slot-span").textContent
  const location = "Ground Floor, Building A";

  localStorage.setItem("hallName", hallName);
  localStorage.setItem("timeSlot", timeSlot);
  localStorage.setItem("location", location);

  window.location.href = '/ISKCON-M-Meeting_room_scheduling/services/Select_services.html';
}
