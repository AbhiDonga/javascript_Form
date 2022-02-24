const form = document.getElementById('form');
const img = document.getElementById('img');

function readURL(input) { 
    if (input.files && input.files[0]) {
    
      var reader = new FileReader();
      reader.onload = function (e) { 
        localStorage.setItem("img", e.target.result);

        document.querySelector("img").setAttribute("src",e.target.result);
      };

      reader.readAsDataURL(input.files[0]); 
    }
  }

form.addEventListener('submit', () => {
    // e.preventDefault();

    validateInputs();
});
