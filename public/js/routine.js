// This method grabs the element by id and adds an event listener to it.
document
  .getElementById("save-routine")
  .addEventListener("click", async function () {
    // These constant variables grab the element by id and store the value of the element or the default value of the element.
    const routineNameEl = document.getElementById("routineSaveName");
    const routine_name =
      routineNameEl.value || routineNameEl.dataset.defaultName;
    const routine_id = routineNameEl.dataset.routineId;
    // This try/catch block is used to fetch the data from the API and send the data to the server.
    try {
      const response = await fetch("/api/routines/saveRoutine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // This line of code is used to convert the data to a JSON string.
        body: JSON.stringify({
          routine_id: routine_id,
          custom_routine_name: routine_name,
        }),
      });
      // This if/else statement is used to check if the response is ok or not.
      if (response.ok) {
        window.location.href = "/profile";
      } else {
        alert("Failed to save routine");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the routine.");
    }
  });

// Close gif modal button.
const closeGifBtn = document.getElementById("close-gif-btn");
closeGifBtn.addEventListener("click", function () {
  instructionModal.classList.add("hidden");
});
