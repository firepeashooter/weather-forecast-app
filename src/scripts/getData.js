import { formatWeatherData } from "./formatData";

export async function getWeatherData(location) {

	let vcKey = "YNK7LTYXNBZKEY3NKXCKEYN54"

	let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=" + vcKey;

	try {
		const response = await fetch(url);
		const weatherData = await response.json();
		const data = await formatWeatherData(weatherData);
		return data;

	} catch (error) {
		alert("Error Retrieving data from API:  " + error);
	}


}


export function populateWeatherCard(data) {
	//this is where we update the data to the card

	const locationHeader = document.querySelector("#location");
	const conditionHeader = document.querySelector("#condition");
	const tempHeader = document.querySelector("#temp");
	const feelsHeader = document.querySelector("#feels--like");
	const humidityHeader = document.querySelector("#humidity");
	const windSpeedHeader = document.querySelector("#wind--speed");



	//TODO: WE WANT TO FORMAT ALL OF THIS INFORMATION SO IT'S MORE PLEASING
	conditionHeader.textContent = "Current Conditions: " + data.conditions;
	locationHeader.textContent = data.location;
	tempHeader.innerHTML = farenheitToCelicius(data.temp) + " &deg;C";
	feelsHeader.innerHTML = "Feels Like: " + farenheitToCelicius(data.feelsLike) + " &deg;C";
	humidityHeader.textContent = "Humidity: " + data.humidity + "%";
	windSpeedHeader.textContent = "Wind Speed: " + data.windSpeed + " km/h";
}


function farenheitToCelicius(temp) {

	const celc = (temp - 32) * (5 / 9);

	return celc.toFixed(0);
}



