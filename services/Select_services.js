document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button-group .button:not(.arrow)");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add the active class to the clicked button
      button.classList.add("active");
    });
  });
});


window.onload = function () {
  const hallName = localStorage.getItem("hallName");
  const timeSlot = localStorage.getItem("timeSlot");
  const location = localStorage.getItem("location");

  if (hallName && timeSlot && location) {
    const cardHTML = `
        <div class="container3">
          <img src="https://www.architectandinteriorsindia.com/cloud/2022/11/23/Vurve-Alwarpet-by-RSDA-3.jpg" alt="logo" height="100px" width="200px">
          <p>${hallName}</p>
          <div class="divider"></div>
          <p>${timeSlot} - ${location}</p>
          <div class="divider"></div>
          <button style="padding: 10px 70px 10px 70px;" class="button">Continue</button>
        </div>
      `;

    document.querySelector('body').insertAdjacentHTML('beforeend', cardHTML);
  }
}
