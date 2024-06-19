// The const variables are for selecting the elements by id.
const getInstructions = document.querySelectorAll(".get-instructions");
const instructionModal = document.querySelector("#instruction-modal");
const modalGif = document.querySelector("#exercise-gif");
const modalInstructions = document.querySelector("#exercise-instructions");
const closeBtn = document.querySelector("#close-modal");
const modalTitle = document.querySelector("#exercise-name");

// This method adds an event listener to the document to listen for the DOMContentLoaded event.
document.addEventListener("DOMContentLoaded", function () {
  // When the DOMContentLoaded event takes place the getInstructions variable is looped through and an event listener is added to each element.
  getInstructions.forEach((button) => {
    // This method adds an event listener to the button to listen for the click event.
    button.addEventListener("click", function (event) {
      // This constant variable stores the value of the data-value attribute of the button that was clicked.
      const exerciseName = event.currentTarget.getAttribute("data-value");
      fetchExerciseInstructions(exerciseName);
    });
  });
});

// This function fetches the exercise instructions from the API.
function fetchExerciseInstructions(exerciseName) {
  // The method fetch here takes the data from the API and sends it to the server.
  fetch(`/api/exercises/instructions?name=${encodeURIComponent(exerciseName)}`)
    // This is a promise chain that takes the response from the server and converts it to JSON.
    .then((response) => response.json())
    .then((data) => {
      populateAndShowModal(data[0]);
    })
    .catch((error) => console.error("Error:", error));
}
// This function populates the modal with the data from the API and shows the modal.
function populateAndShowModal(data) {
  // The textContent property sets or returns the text content of the specified node, and all its descendants.
  modalTitle.textContent = data.name;
  modalGif.src = data.gifUrl;
  modalInstructions.textContent = data.instructions;
  // Show the modal.
  instructionModal.classList.remove("hidden");
}
