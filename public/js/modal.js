const modalButton = document.querySelector('#modal-button');
const homeOrGym = document.querySelector('#home-or-gym');

const homeIntensity = document.querySelector('#home-intensity');
const gymStyle = document.querySelector('#gym-style');
const strength = document.querySelector('#strength');
const hiit = document.querySelector('#hiit');

const homeRoutines = document.querySelector('#home-routines');
const gymRoutines = document.querySelector('#gym-routines');

const homeBeginner = document.querySelector('#home-beginner');
const homeIntermediate = document.querySelector('#home-intermediate');
const homeAdvanced = document.querySelector('#home-advanced');

const gymStrength = document.querySelector('#gym-strength');
const gymHiit = document.querySelector('#gym-hiit');

const strengthBeginner = document.querySelector('#strength-beginner');
const strengthIntermediate = document.querySelector('#strength-intermediate');

const hiitBeginner = document.querySelector('#hiit-beginner');
const hiitIntermediate = document.querySelector('#hiit-intermediate');
let routineId = '';


function showModal (modal){
    modal.classList.add('is-active');
}

modalButton.addEventListener('click', () => {
    showModal('homeOrGym');
});

homeOrGym.addEventListener('click', () => {
    if (homeRoutines.checked){
        homeIntensity.classList.add('is-active');
        homeOrGym.classList.remove('is-active');
    } else if (gymRoutines.checked){
        gymStyle.classList.add('is-active');
        homeOrGym.classList.remove('is-active');
    }
    return;
});

homeIntensity.addEventListener('click', () => {
    if (homeBeginner.checked){
        routineId = '1';
    } else if (homeIntermediate.checked){
        routineId = '2';
    } else if (homeAdvanced.checked){
        routineId = '3';
    }
    if (routineId){
        document.location.replace(`/api/routine/${routineId}`);
    }
    return;
});


