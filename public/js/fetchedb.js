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
        console.log(exerciseName);
        fetchExerciseInstructions(exerciseName);
      });
    });
});


function fetchExerciseInstructions(exerciseName) {
    fetch(`/api/exercises/instructions?name=${encodeURIComponent(exerciseName)}`)
       .then(response => response.json())
       .then(data => {
        populateAndShowModal(data[0]);
       })
       .catch(error => console.error('Error:', error));
};

function populateAndShowModal(data) {
  console.log(data);
    modalTitle.textContent = data.name;
    modalGif.src = data.gifUrl;
    modalInstructions.textContent = data.instructions
  
    // Show the modal
    instructionModal.classList.remove('hidden');
};