// fetches from exercise db api.
const getInstructions = document.querySelectorAll(".get-instructions");
const apiURL = `https://v2.exercisedb.io/exercises/exercise/${exercise_name}`;
const instructionModal = document.querySelector("#instruction-modal");
const modalGif = document.querySelector("#exercise-gif");
const modalInstructions = document.querySelector("#exercise-instructions");
const closeBtn = document.querySelector("#close-modal");
const modalTitle = document.querySelector("#exercise-name");
const DB_API_KEY = "01c81b62eamshd09f8aaffb6c9b3p14d7e1jsn50d4824f9512"
getInstructions.forEach((button) => {
    button.addEventListener("click", async (event) => {
        const exercise_name = event.target.getAttribute("data-value");
        try {
            const options = {
                method: "GET",
                url: apiURL,
                params: { limit: "1", offset: "0" },
                headers: {
                    accept: "application/json",
                    'x-rapidapi-key': DB_API_KEY,
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                 },
              };
            const response = await axios.request(options);
            const data = response.data;
            const instructions = data.instructions;
            const gifUrl = data.gifUrl;
            modalGif.setAttribute("src", gifUrl);
            modalTitle.textContent = exercise_name;
            modalInstructions.textContent = instructions;

            instructionModal.classList.remove("hidden");
        } catch (error) {
            console.error("There was an error fetching the exercise data:", error);
            // Handle the error appropriately
        }
    });
});