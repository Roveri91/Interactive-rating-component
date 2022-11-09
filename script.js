const rating = document.querySelector(".rating");
const thank = document.querySelector(".thanks");
const submitButton = document.getElementById("submit");
const rates = document.querySelectorAll(".btn");
const value = document.getElementById("value");


 submitButton.addEventListener("click", () => {
    
        rating.classList.add("hide");
        thank.classList.remove("hide");  
     
 });


 rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rates.forEach((button) => {
         button.classList.remove("clicked");
        });
        rate.classList.add("clicked"); 
        value.innerHTML = rate.innerHTML;
        clicked = 1;
    });
 });