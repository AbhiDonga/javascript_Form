// Select all input elements for varification
const form = document.getElementById('form');
const setState = document.getElementById('setState');
const ucountry = document.getElementById('ucountry');

// function for form varification
// function formValidation() {
  
//   // checking country
//   if (language.value === "Default") {
//     alert("Select your country from the list");
// ucountry.focus();
//     return false;
//   } 1

//   return true;
// }

form.addEventListener('submit', () => {
    // e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
  const setStateValue = setState.value.trim();
  const ucountryValue = ucountry.value.trim();

  // Set Item
  localStorage.setItem("setState", setStateValue);
  localStorage.setItem("ucountry", ucountryValue);
}