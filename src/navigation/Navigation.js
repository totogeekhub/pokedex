import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Image} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteNavigation from "./FavoriteNavigation"
import PokedexNavigation from "./PokedexNavigation"
import AccountNavigation from "./AccountNavigation"


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({color, size}) => <Icon name="heart" color={color} size={size} />,
      }}/>
    <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: () => renderPokeBall(),
    }}/>
    <Tab.Screen 
        name="Account" 
        component={AccountNavigation} 
        options={{tabBarLabel: "Mi cuenta", tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
    ),}}/>
    </Tab.Navigator>
  )
}

function renderPokeBall() {
    return (
        <Image 
            source={require('../assets/pokeball.png')}
            style={{ width: 80, height: 80, top: -15}}
        />
    )
}