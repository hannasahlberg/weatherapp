import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Layout() {
  return (
    <Tabs   
    screenOptions={{
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "black",
    tabBarStyle: {
      backgroundColor: "transparent",
      borderTopWidth: 0,
      position: 'absolute', 
    }
  }}>
    <Tabs.Screen
    name="index"
    options={{
        title: 'Forecast',
        headerTransparent: true,
        headerTitle: "",
        tabBarIcon: ({ color, size}) => 
          <AntDesign name="cloud" size={size} color={color} />

      }}
    />

<Tabs.Screen
    name="favorites"
    options={{
        title: 'Favorites',
        headerTransparent: true,
        headerTitle: "",

        tabBarIcon: ({ color, size}) => (
          <AntDesign name="heart" size={size} color={color}/>
        ),
      }}
    />
    <Tabs.Screen
    name="searchCity"
    options={{
        title: 'Search',
        headerTransparent: true,
        headerTitle: "",
        tabBarIcon: ({ color, size}) => (
          <AntDesign name="search" size={size} color={color} />
        ),

      }}
    />
  </Tabs>
  )
  
}

