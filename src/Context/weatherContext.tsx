import { createContext, useState, ReactNode } from "react";

interface FavoriteCity {
  name: string;
  country: string;
  temp: number;
  description: string;
  icon: string;
}

type WeatherContextType = {
  currentCity: string;
  setCurrentCity: (city: string) => void;
  favoriteCities: FavoriteCity[];
  addFavorite: (city: FavoriteCity) => void;
};

export const WeatherContext = createContext<WeatherContextType>({
  currentCity: "Stockholm",
  setCurrentCity: () => {},
  favoriteCities: [],
  addFavorite: () => {},
});

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currentCity, setCurrentCity] = useState("Stockholm");
  const [favoriteCities, setFavoriteCities] = useState<FavoriteCity[]>([]);

  const addFavorite = (city: FavoriteCity) => {
    setFavoriteCities((prev) => {
      if (prev.find(c => c.name === city.name)) return prev;
      return [...prev, city];
    });
  };

  return (
    <WeatherContext.Provider value={{ currentCity, setCurrentCity, favoriteCities, addFavorite }}>
      {children}
    </WeatherContext.Provider>
  );
};