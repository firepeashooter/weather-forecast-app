

export async function formatWeatherData(data){
    

    const formattedData = {

        location: data.resolvedAddress,
        temp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        conditions: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
	
    };

    return formattedData;
}
