import { ForecastData } from "../src/types/forecast";
    
export const getData = async (city: string): Promise<ForecastData> =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=36fd3b52f4a6105009462efb76f61f1c&units=metric`);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data: ForecastData = await response.json();
        return data; 
};
    

