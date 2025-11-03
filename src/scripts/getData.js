import { formatWeatherData } from "./formatData";

export async function getWeatherData(location){

    let vcKey = "YNK7LTYXNBZKEY3NKXCKEYN54"

    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location +"?key=" + vcKey;

    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        const data = await formatWeatherData(weatherData);
        return data;

    } catch (error) {
        alert("Error Retrieving data from API:  " + error);
    }
 

}


   
