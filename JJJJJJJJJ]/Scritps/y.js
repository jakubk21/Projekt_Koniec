const servicesList = document.getElementById("services-list");
const serviceDetails = document.getElementById("service-details");

servicesList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const details = event.target.dataset.details;
    serviceDetails.textContent = details;
    serviceDetails.style.display = "block";
  }
});