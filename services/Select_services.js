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
  