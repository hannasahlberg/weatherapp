import { getData } from "../../api/forecast";
import { View, Text, StyleSheet, Image} from "react-native";
import { ForecastData } from "../../types/forecast";
import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../Context/weatherContext";
import BlurContainer from "../../Componens/BlurContainer";
import Spinner from "../../Componens/Spinner";
import Background from "../../Componens/Background";
import Header from "../../Componens/Header";
import WeatherCard from "../../Componens/WeatherCard";



const Homepage = () => {

    const [weatherData, setWeatherData] = useState<ForecastData | null>(null);
    const { currentCity} = useContext(WeatherContext);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const loadWeather = async () => {
            setLoading(true);
            try{
                const data = await getData(currentCity);
            setWeatherData(data);

            }catch(error){
                console.log("Error fetching weather data:", error)
            }finally{
                setLoading(false);
            }
    };
    loadWeather();
}, [currentCity]);

    if (loading) return <Spinner/>


    return(
        <Background>
            <Header text={currentCity}/>
            <View style={styles.container}>
                {weatherData && (
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image
                        source={{ uri: `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png` }}
                        style={{ width: 300, height: 300 }}
                        />
                <Text style={{fontSize: 40, color: "white"}}> {Math.round(weatherData.list[0].main.temp)}°</Text>
                <Text style={{fontSize: 20, color: "white"}}>{weatherData.list[0].weather[0].description}</Text>
                </View>

                )}
                
            </View>

            <BlurContainer style={{ marginBottom: 110, height: 200, marginTop: 60, margin: 10,}}>    
                <View style={styles.titleRow}>
                <Text style={{color: "black", fontSize: 30}}>Today</Text>
                {weatherData && (
                    <View>
                    <Text style={{color: "black", marginRight: 20,}}>{weatherData.city.name} {weatherData.city.country}</Text>
                    
                    </View>
                )}
                </View>

                <View>
                <View style= {styles.cardContainer}>
            {weatherData?.list
            .slice(0,5)
            .map((item) => {
                const time = item.dt_txt?.split(" ")[1].slice(0, 5); 
                return(
                    <WeatherCard
                    key={item.dt}
                    variant = "hourly"
                    hour={time}
                    temp={item.main.temp}
                    icon={item.weather[0].icon}
                    />
                    )
                })}
            </View>     
                </View>
            </BlurContainer>
            </Background>
    )
}


export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    titleRow: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },

    cardContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        padding: 10,
    },

    card: {
        justifyContent: "center",
        padding: 7,
        alignItems: "center",
    },
});