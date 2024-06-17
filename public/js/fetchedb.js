// fetches from exercise db api.
const getInstructions = document.querySelectorAll(".get-instructions");
const instructionModal = document.querySelector("#instruction-modal");
const modalGif = document.querySelector("#exercise-gif");
const modalInstructions = document.querySelector("#exercise-instructions");
const closeBtn = document.querySelector("#close-modal");
const modalTitle = document.querySelector("#exercise-name");



document.addEventListener('DOMContentLoaded', function() {
    getInstructions.forEach(button => {
      button.addEventListener('click', function(event) {
        const exerciseName = event.currentTarget.getAttribute('data-value');
        fetchExerciseInstructions(exerciseName);
      });
    });
});


function fetchExerciseInstructions(exerciseName) {
    fetch(`/exercise/instructions?name=${encodeURIComponent(exerciseName)}`)
       .then(response => response.json())
       .then(data => {
        populateAndShowModal(data);
       })
       .catch(error => console.error('Error:', error));
};

function populateAndShowModal(data) {
    modalTitle.textContent = data.name;
    modalGif.src = data.gifUrl;
    modalInstructions.textContent = data.instructions
  
    // Show the modal
    instructionModal.classList.remove('hidden');
};