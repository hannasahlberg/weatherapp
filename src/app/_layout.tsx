import { Stack } from "expo-router";
import { WeatherProvider } from "../Context/weatherContext";

const Layout = () => {
  return (
    <WeatherProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      </Stack>
    </WeatherProvider>
  );
};

export default Layout;