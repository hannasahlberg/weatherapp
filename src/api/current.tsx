import { CurrentWeatherData } from "../src/types/current";


export const getData = async (city: string): Promise<CurrentWeatherData> =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=36fd3b52f4a6105009462efb76f61f1c&units=metric&q=${city}`);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data: CurrentWeatherData = await response.json();
        return data; 
};
    