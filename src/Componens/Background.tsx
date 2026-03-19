import { ImageBackground, StyleSheet, View } from "react-native"


const Background = ({ children }: {children: React.ReactNode}) => {
    return(
        <ImageBackground
                    style={styles.background}
                    source={require('../assets/blue_background_design-wallpaper-3840x2160.jpg')}
                    resizeMode="cover"
        >
            <View style={styles.container}>
                {children}
            </View>

        </ImageBackground>
    )
}
 export default Background;
const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1, 
        alignItems: "center", 
        marginTop: 100 
    }


})