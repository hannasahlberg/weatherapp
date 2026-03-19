
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import BlurContainer from "./BlurContainer";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


interface WeatherCardProps {
  city?: string;
  country?: string;
  hour?: string;
  temp: number;
  description?: string;
  icon?: string;
  onPress?: () => void;
  onFavoritePress?: () => void;
  variant?: "default" | "hourly"
}

const WeatherCard = ({ variant = "default", city, country, hour, temp, description, icon, onPress, onFavoritePress } : WeatherCardProps) => {


  return (
    <Pressable onPress={onPress}>
      <BlurContainer style={variant === "hourly" ? styles.hourlyCard : styles.card}>
        {variant === "hourly" ? (
          <View style={{alignItems: "center"}}>
          <Text>{hour}</Text>
          {icon && (
            <Image
              source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
              style={{ width: 50, height: 50 }}
            />
          )}
          <Text>{Math.round(temp)}°C</Text>
          </View>
      ) : (
        
      <View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <Text style={styles.cityText}>
            {city} {country || ""}
          </Text>
          {icon && (
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
            style={{ width: 50, height: 50 }}
          />
        )}
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 10,}}>
          <View>
          <Text style={styles.tempDescText}>{Math.round(temp)}°C</Text>
          {description && <Text style={styles.tempDescText}>{description}</Text>}
          </View>
        {onFavoritePress && (
          <Pressable style={styles.favButton} onPress={onFavoritePress}>
            <FontAwesome6 name="add" size={24} color="black" />
          </Pressable>
        )}
        </View>
        </View>
        )}

      </BlurContainer>
    </Pressable>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({

  hourlyCard: {
    justifyContent: "center",
    padding: 7,
    alignItems: "center",
  },

  card: {
    padding: 20,
    width: 390,
    marginBottom: 20,

  },
  cityText: { 
    fontSize: 24, 
    color: "white" 
  },
  tempDescText: { 
    fontSize: 18, 
    color: "white" 
  },

  favButton: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 40,
    backgroundColor: "white",
  },
});