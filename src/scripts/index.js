import "../styles.css";
import { getWeatherData, populateWeatherCard} from "./getData";

const location = "kingstonontario"


const weatherCard = document.querySelector(".weathercard");


const weatherForm = document.querySelector("#city--search");

async function displayWeatherData(){

    
    const data = await getWeatherData(location);
    populateWeatherCard(data);
    

    if (weatherCard.classList.contains("hidden")){
        weatherCard.classList.remove("hidden");
    } 
}


weatherForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputField = document.querySelector("#city--input");
    const inputValue = inputField.value;

    inputField.value = '';

    displayWeatherData();

    //after this call we can do whatever we want while we wait for the async call to finish


    //Error handeling/check if the input string is valid > 2 and maybe if it doesn't go through we send
    //the user an error to try again

    alert(inputValue);
})