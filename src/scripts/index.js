import "../styles.css";
import { getWeatherData } from "./getData";

const location = "kingstonontario"

const data = await getWeatherData(location);
console.log(data);