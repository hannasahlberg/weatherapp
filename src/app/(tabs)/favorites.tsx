import { View, FlatList} from "react-native"
import { WeatherContext } from "../../Context/weatherContext"
import { useContext } from "react";
import { useRouter } from "expo-router";
import Background from "../../Componens/Background";
import WeatherCard from "../../Componens/WeatherCard";
import Header from "../../Componens/Header";

const favorites = () => {

    const { favoriteCities, setCurrentCity} = useContext(WeatherContext);
    const router = useRouter();

    return(
        <Background>
        <Header text="Favorites"/>
        <View style={{justifyContent: "center"}}>
        <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <WeatherCard 
            city={item.name}
            country={item.country}
            temp={item.temp}
            description={item.description}
            icon={item.icon}
            onPress={() => {
              setCurrentCity(item.name);
              router.push("/");
            }}
          />
        )}
      />

        </View>
        
        </Background>
    )
}

export default favorites;
