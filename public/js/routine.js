// Saving a template for the profile page from the routine pages Save Template button.

document
  .getElementById("save-routine")
  .addEventListener("click", async function () {
    const routine_name = document.getElementById("Exercise_name").textContent;
    const routine_description = document.getElementById(
      "routine-description"
    ).textContent;
    const routine_exercises = Array.from(
      document.querySelectorAll("#routine-exercises .exercise")
    ).map((exercise) => ({
      Exercise_name: exercise.querySelector(".exercise-name").textContent,
      reps: exercise.querySelector(".exercise-reps").textContent,
      description: exercise.querySelector(".exercise-description").textContent,
    }));

    const routine = {
      Routine_name: routine_name,
      description: routine_description,
      exercises: routine_exercises,
    };

    const response = await fetch("/api/routine", {
      method: "POST",
      body: JSON.stringify(routine),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to save routine");
    }
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
