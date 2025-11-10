import "../styles.css";
import { getWeatherData, populateWeatherCard } from "./getData";

const weatherCard = document.querySelector(".weathercard");

const weatherForm = document.querySelector("#city--search");

const loader = document.querySelector(".loader");

weatherForm.addEventListener("submit", async (e) => {

	//hide the weather card when we submit the form
	weatherCard.classList.add("hidden");

	e.preventDefault();

	const inputField = document.querySelector("#city--input");
	const location = inputField.value;

	inputField.value = '';

	//TODO: Add the functionalty for the loader
	//Display the loading icon
	loader.classList.remove("hidden");

	try {
		const data = await getWeatherData(location);
		populateWeatherCard(data);
		loader.classList.add("hidden");

		if (weatherCard.classList.contains("hidden")) {
			weatherCard.classList.remove("hidden");
		}


	} catch (error) {
		throw new Error(error);

	} finally {
		//hide the loader
	}



	//Error handeling/check if the input string is valid > 2 and maybe if it doesn't go through we send
	//the user an error to try again

})
