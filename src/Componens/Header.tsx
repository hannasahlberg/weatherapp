import { View, Text } from "react-native";


const Header = ({text}: {text: string}) => {
    return(
        <View style= {{marginBottom: 30,}}>
            <Text style={{fontSize: 40, color: "white"}}>{text}</Text>
        </View>

    )
}
export default Header;