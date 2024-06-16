async function fetchRoutines() {
  try {
    const response = await fetch("/api/routine"); // Adjust the URL if necessary
    const routines = await response.json();

    const cardContainer = document.getElementById("card-container");

    // First row with 4 cards
    routines.slice(0, 4).forEach((routine) => {
      const card = document.createElement("div");
      card.className = "bg-gray-100 p-4 rounded shadow";
      card.innerHTML = `
                  <h3 class="text-xl font-semibold">${routine.Exercise_name}</h3>
                  <p>Reps: ${routine.reps}</p>
              `;
      cardContainer.appendChild(card);
    });

    // Second row with 3 centered cards
    const secondRow = document.createElement("div");
    secondRow.className = "col-span-2 flex justify-center space-x-4";
    routines.slice(4, 7).forEach((routine) => {
      const card = document.createElement("div");
      card.className = "bg-gray-100 p-4 rounded shadow";
      card.innerHTML = `
                  <h3 class="text-xl font-semibold">${routine.Exercise_name}</h3>
                  <p>Reps: ${routine.reps}</p>
              `;
      secondRow.appendChild(card);
    });
    cardContainer.appendChild(secondRow);
  } catch (error) {
    console.error("Error fetching routines:", error);
  }
}

// Call the function to fetch routines and generate cards
fetchRoutines();

document.getElementById("routinePage").addEventListener("click", function () {
  window.location.href = "/routine";
});
