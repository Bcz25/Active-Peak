document.getElementById("save-routine").addEventListener("click", async function () {
  
    const routineNameEl = document.getElementById("routineSaveName")
    const routine_name = routineNameEl.value || routineNameEl.dataset.defaultName;
    const routine_id = routineNameEl.dataset.routineId;
  console.log(routine_id, routine_name)
    try {
      const response = await fetch("/api/routines/saveRoutine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ routine_id: routine_id, custom_routine_name: routine_name }),
      });
      if (response.ok) {
        alert("Routine saved successfully!");
      } else {
        alert("Failed to save routine");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the routine.");
    }
  });
  
//   document.querySelectorAll(".load-routine").forEach(button => {
//     button.addEventListener("click", async function (event) {
//       const routineId = event.target.getAttribute("data-id");
//       try {
//         const response = await fetch(`/api/routine/${routineId}`);
//         if (response.ok) {
//           const routine = await response.json();
//           // Populate the routine page with the fetched routine data
//           document.getElementById("Exercise_name").textContent = routine.Routine_name;
//           document.getElementById("routine-description").textContent = routine.description;
//           const routineExercisesContainer = document.getElementById("routine-exercises");
//           routineExercisesContainer.innerHTML = "";
//           routine.exercises.forEach(exercise => {
//             const exerciseDiv = document.createElement("div");
//             exerciseDiv.classList.add("exercise");
//             exerciseDiv.innerHTML = `
//               <h3 class="text-xl font-semibold exercise-name">${exercise.Exercise_name}</h3>
//               <p class="exercise-reps">${exercise.reps} reps</p>
//               <p class="exercise-description">${exercise.description}</p>
//             `;
//             routineExercisesContainer.appendChild(exerciseDiv);
//           });
//         } else {
//           alert("Failed to load routine");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred while loading the routine.");
//       }
//     });
//   });

// Close gif modal button
const closeGifBtn = document.getElementById("close-gif-btn");
closeGifBtn.addEventListener("click", function () {
    instructionModal.classList.add("hidden");
});

// Fetching exercise data from external API using axios and displaying it on the routine page.

// document.getElementById("exercise-form").addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const exercise_name = document.getElementById("exercise-name").value;
//     const response = await fetch(`/api/routine/instructions?name=${exercise_name}`);
//     if (response.ok) {
//         const data = await response.json();
//         document.getElementById("exercise-instructions").textContent = data[0].description;
//     } else {
//         alert("Failed to fetch exercise data");
//     }
// }
// );
