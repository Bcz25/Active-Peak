const modalButton = document.querySelector("#modal-button");
const homeOrGym = document.querySelector("#home-or-gym");

const homeIntensity = document.querySelector("#home-intensity");
const gymStyle = document.querySelector("#gym-style");

const strengthModal = document.querySelector("#strength");
const hiitModal = document.querySelector("#hiit");

const homeRoutines = document.querySelector("#home-routines");
const gymRoutines = document.querySelector("#gym-routines");

const homeBeginner = document.querySelector("#home-beginner");
const homeIntermediate = document.querySelector("#home-intermediate");
const homeAdvanced = document.querySelector("#home-advanced");

const gymStrength = document.querySelector("#gym-strength");
const gymHiit = document.querySelector("#gym-hiit");

const strengthBeginner = document.querySelector("#strength-beginner");
const strengthIntermediate = document.querySelector("#strength-intermediate");

const hiitBeginner = document.querySelector("#hiit-beginner");
const hiitIntermediate = document.querySelector("#hiit-intermediate");
let routineId = "";

function showModal(modal) {
  modal.classList.remove("hidden");
}

function hideModal(modal) {
  modal.classList.add("hidden");
}

modalButton.addEventListener("click", () => {
  showModal("homeOrGym");
});

homeOrGym.addEventListener("click", () => {
  if (homeRoutines.checked) {
    showModal(homeIntensity);
  } else if (gymRoutines.checked) {
    showModal(gymStyle);
  }
  hideModal(homeOrGym);
  return;
});

homeIntensity.addEventListener("click", () => {
  if (homeBeginner.checked) {
    routineId = "1";
  } else if (homeIntermediate.checked) {
    routineId = "2";
  } else if (homeAdvanced.checked) {
    routineId = "3";
  }
  if (routineId) {
    document.location.replace(`/api/routines/${routineId}`);
  }
  return;
});

gymStyle.addEventListener("click", () => {
  if (gymStrength.checked) {
    showModal(strengthModal);
  } else if (gymHiit.checked) {
    showModal(hiitModal);
  }
  hideModal(gymStyle);
  return;
});

hiitModal.addEventListener("click", () => {
  if (hiitBeginner.checked) {
    routineId = "4";
  } else if (hiitIntermediate.checked) {
    routineId = "5";
  }
  if (routineId) {
    document.location.replace(`/api/routines/${routineId}`);
  }
  return;
});

strengthModal.addEventListener("click", () => {
  if (strengthBeginner.checked) {
    routineId = "6";
  } else if (strengthIntermediate.checked) {
    routineId = "7";
  }
  if (routineId) {
    document.location.replace(`/api/routines/${routineId}`);
  }
  return;
});
