import { StyleSheet, View, ViewStyle} from "react-native";
import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { StyleProp } from "react-native";


interface BlurContainerProps{
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const BlurContainer = ({children, style}: BlurContainerProps) => {
    return(
        <View style = {styles.shadowContainer}>
        <BlurView style={[styles.blurContainer, style]} intensity={90} tint="light">
            {children}
        </BlurView>
        </View>
    )
}
export default BlurContainer;

const styles = StyleSheet.create({
    shadowContainer: {
        shadowColor: "#166fe9",
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 1.84,

    },
    
    blurContainer : {
        borderRadius: 40,
        overflow: "hidden",

    }
})