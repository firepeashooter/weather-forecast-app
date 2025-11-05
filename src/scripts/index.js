import "../styles.css";
import { getWeatherData, populateWeatherCard} from "./getData";

const location = "kingstonontario"


const weatherCard = document.querySelector(".weathercard");


const weatherForm = document.querySelector("#city--search");


weatherForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const inputField = document.querySelector("#city--input");
    const inputValue = inputField.value;

    inputField.value = '';
    
    //Display the loading icon

    try {
        const data = await getWeatherData(location);
        populateWeatherCard(data);
 
        if (weatherCard.classList.contains("hidden")){
            weatherCard.classList.remove("hidden");
        } 

       
    } catch (error) {
       throw new Error(error); 

    } finally{
        //hide the loader
    }



    //Error handeling/check if the input string is valid > 2 and maybe if it doesn't go through we send
    //the user an error to try again

    alert(inputValue);
})