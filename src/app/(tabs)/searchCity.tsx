import { View, TextInput, StyleSheet, Pressable, Text} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState, useContext} from "react";
import { getData } from "../../api/current";
import { CurrentWeatherData } from "../../types/current";
import { WeatherContext } from "../../Context/weatherContext";
import { useRouter} from "expo-router";
import Header from "../../Componens/Header";
import Spinner from "../../Componens/Spinner";
import Background from "../../Componens/Background";
import WeatherCard from "../../Componens/WeatherCard";


const SearchCity = () => {

    const [search, setSearch] = useState("")
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData | null>(null)
    const { setCurrentCity, addFavorite } = useContext(WeatherContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    
    const handleSearch = async () => {
        if (!search) return;
        setLoading(true);
        setError(null);
        try{
            const data = await getData(search);
            setCurrentWeather(data);
        } catch(error){
            console.log("Error fetching weather:", error)
            setError("Kunde inte hämta väderdata, prova igen senare.")
        }finally{
            setLoading(false);
        }
    }

    if (loading) return <Spinner/>

    if(error) {
        return (
            <Background>
                <Text style={{ color: "white", textAlign: "center", marginTop: 150, fontSize: 20 }}>
                    {error}
                </Text>
            </Background>
        )
    }

    return(
        <Background>
            <Header text={"Search cities"}/>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 30}}>
            <TextInput
            value= {search}
            placeholder= "Sök stad"
            style= {styles.input}
            onChangeText={setSearch}/>
            <Pressable 
            style={styles.button}
            onPress={handleSearch}>
                <Feather name="search" size={24} color="white" />
            </Pressable>
            </View>
            {currentWeather && (
                <WeatherCard
                variant= "default"
                city={currentWeather.name}
                country= {currentWeather.sys.country}
                temp={currentWeather.main.temp}
                description = {currentWeather.weather[0].description}
                icon={currentWeather.weather[0].icon}
                onPress={() => {
                    setCurrentCity(search)
                    router.push("/")
                }}
                onFavoritePress={() => {
                    addFavorite({
                      name: currentWeather.name,
                      country: currentWeather.sys.country,
                      temp: currentWeather.main.temp,
                      description: currentWeather.weather[0].description,
                      icon: currentWeather.weather[0].icon
                    });
                    router.push("/favorites");
                  }}/>
            )}
            
        </Background>
        
        
    )
}
export default SearchCity;

const styles= StyleSheet.create({
    input: {
        padding: 10,
        fontSize: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        color: "white",
        width: 300,
        textAlign: "center",
        marginBottom: 20,
    },

    button: {
        marginLeft: 10,
        marginBottom: 20,

    },
})