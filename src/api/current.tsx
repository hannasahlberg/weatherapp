import { CurrentWeatherData } from "../types/current";

const apiKey = process.env.EXPO_PUBLIC_API_KEY!;

export const getData = async (city: string): Promise<CurrentWeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data: CurrentWeatherData = await response.json();
  return data;
};