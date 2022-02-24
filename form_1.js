const form = document.getElementById('form');
const datepicker = document.getElementById('datepicker');
const gender = document.getElementById('gender');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datepicker").setAttribute("max", today);

form.addEventListener('submit', () => {
    // e.preventDefault();

    validateInputs();
});

function validate(form)
{
    var genderM=form.gender_male.value;
    var genderF=form.gender_female.value;

    if(genderM.checked==false && genderF.checked==false )
       {
            alert("You must select male or female");
            return false;
       }   
 }    

const validateInputs = () => {
  const datepickerValue = datepicker.value.trim();
  const genderValue = gender.value.trim();

  // Set Item
  localStorage.setItem("datepicker", datepickerValue);
  localStorage.setItem("gender", genderValue);
}

