function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInstructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bf9ao451t50522b2ac20521746033a31";
  let prompt = `User instructions: Generate a recipe about ${userInstructionsInput.value}`;
  let context =
    "You are an AI expert.Your mission is to write a 6 line recipe in basic HTML with a <br/>. Please follow the user instructions and do not write heading or title. Do not write quotation marks. Please sign the recipe with 'She Codes AI' at the end or bottom inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating"> ⏳Generating a Recipe for ${userInstructionsInput.value} </div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeGeneratorForm = document.querySelector("#recipe-generator-form");
recipeGeneratorForm.addEventListener("submit", generateRecipe);
