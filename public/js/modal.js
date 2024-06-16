const newRoutine = document.querySelector("#select-modal");
const choiceBtn = document.querySelectorAll(".choice-btn");
const nextBtn = document.querySelector("#next-btn");

const homeOrGym = document.querySelector("#home-or-gym");

const homeIntensity = document.querySelector("#home-intensity");
const gymStyle = document.querySelector("#gym-style");

const strengthModal = document.querySelector("#strength");
const hiitModal = document.querySelector("#hiit");

const homeRoutines = document.querySelector("#home-routines");
const gymRoutines = document.querySelector("#gym-routines");

const gymStrength = document.querySelector("#gym-strength");
const gymHiit = document.querySelector("#gym-hiit");

const homeBeginner = document.querySelector("#home-beginner");
const homeIntermediate = document.querySelector("#home-intermediate");
const homeAdvanced = document.querySelector("#home-advanced");

const strengthBeginner = document.querySelector("#strength-beginner");
const strengthIntermediate = document.querySelector("#strength-intermediate");

const hiitBeginner = document.querySelector("#hiit-beginner");
const hiitIntermediate = document.querySelector("#hiit-intermediate");

let routineId = '';
let selectedRoutineType = '';

// Function to show or hide modals
function showModal(modal) {
  modal.classList.remove("hidden");
}
function hideModal(modal) {
  modal.classList.add("hidden");
}

// Add event listener to the create routine button to show the first modal
newRoutine.addEventListener("click", () => {
    showModal(homeOrGym);
});

// Add event listener to each choice button insode the modals
choiceBtn.forEach(button => {
 button.addEventListener('click', function() {
 // Deselect all buttons
 choiceBtn.forEach(btn => {
    btn.classList.remove('selected'); // Remove selected class
    btn.setAttribute('aria-pressed', 'false'); // Update aria-pressed attribute for accessibility
 });
  // Select this button
  this.classList.add('selected');
  this.setAttribute('aria-pressed', 'true');
  
  // Handle the value of the selected button as needed
  const routineType = this.getAttribute('data-value');
  
  selectedRoutineType = routineType;
  console.log('routine Type:', selectedRoutineType);
  // You can now use selectedValue for further logic
});
}); 


// Add event listener to the next button to show the next modal (homeworkout routines or more options for gym workouts)
nextBtn.addEventListener("click", () => {
  if (selectedRoutineType === 'home') {
    showModal(homeIntensity);
  } else if (selectedRoutineType === 'gym') {
    showModal(gymStyle);
  }
  hideModal(homeOrGym);
});

// Add event listener to the next button to show the next modal (strength routines or hiit routines)
nextBtn.addEventListener("click", () => {
  if (selectedRoutineType === 'gym-strength') {
    showModal(strengthModal);
    hideModal(gymStyle);
  } else if (selectedRoutineType === 'gym-hiit') {
    showModal(hiitModal);
    hideModal(gymStyle);
  }
  return;
});

// Add event listener to the next button to route to the selected routine
nextBtn.addEventListener("click", () => {
    if (selectedRoutineType === 'home-beginner') {
      routineId = "1";
    } else if (selectedRoutineType === 'home-intermediate') {
      routineId = "2";
    } else if (selectedRoutineType === 'home-advanced') {
      routineId = "3";
    } else if (selectedRoutineType === 'hiit-beginner') {
      routineId = "4";
    } else if (selectedRoutineType === 'hiit-intermediate') {
      routineId = "5";
    } else if (selectedRoutineType === 'strength-beginner') {
      routineId = "6";
    } else if (selectedRoutineType === 'strength-intermediate') {
      routineId = "7";
    }
    console.log('routine Id:', routineId);
    if (routineId) {
      document.location.replace(`/api/routines/${routineId}`);
    }
    return;
});