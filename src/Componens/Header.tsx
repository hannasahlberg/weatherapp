import { View, Text } from "react-native";

interface HeaderProps {
    text: string;
} 

const Header = ({text}: HeaderProps) => {
    return(
        <View style= {{marginBottom: 30,}}>
            <Text style={{fontSize: 40, color: "white"}}>{text}</Text>
        </View>

    )
}
export default Header;