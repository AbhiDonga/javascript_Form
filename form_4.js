
    
    document.getElementById('firstName').innerHTML = localStorage.getItem("firstName");
    document.getElementById('lastName').innerHTML = localStorage.getItem("lastName");
    document.getElementById('email').innerHTML = localStorage.getItem("email");
    document.getElementById('phoneNumber').innerHTML = localStorage.getItem("number");
    document.getElementById('datepicker').innerHTML = localStorage.getItem("datepicker");
    document.getElementById('gender').innerHTML = localStorage.getItem("gender");
    document.getElementById('setState').innerHTML = localStorage.getItem("setState");
    document.getElementById('ucountry').innerHTML = localStorage.getItem("ucountry");
    // document.getElementById('img').innerHTML = localStorage.getItem("img");

    
document.addEventListener("DOMContentLoaded",()=>{
    let recentImage = localStorage.getItem("img")
    if(recentImage){
        document.getElementById("img").setAttribute("src",recentImage)
    }
})