import { ForecastData } from "../types/forecast";
    
const apiKey = process.env.EXPO_PUBLIC_API_KEY!;

export const getData = async (city: string): Promise<ForecastData> =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data: ForecastData = await response.json();
        return data; 
};
    

