import "../styles.css";
import { getWeatherData } from "./getData";

const location = "kingstonontario"

const data = await getWeatherData(location);
console.log(data);

const weatherCard = document.querySelector(".weathercard");


const weatherForm = document.querySelector("#city--search");


weatherForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputField = document.querySelector("#city--input");
    const inputValue = inputField.value;

    inputField.value = '';

    if (weatherCard.classList.contains("hidden")){
        weatherCard.classList.remove("hidden");
    }



    //Error handeling/check if the input string is valid > 2 and maybe if it doesn't go through we send
    //the user an error to try again

    alert(inputValue);
})