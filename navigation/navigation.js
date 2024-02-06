import { NavigationContainer } from "@react-navigation/native"
import Profile from "../screens/profile"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/home"
import { Ionicons } from "@expo/vector-icons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Workout from "../screens/workout"
import pageNames from "../constants/pageNames"
import colors from "../constants/colors"

const bottomTab = createBottomTabNavigator()
// Bottom tab
function TabGroup() {
    return (
        <bottomTab.Navigator
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, focused, size}) => {
                    let iconName;
                    if (route.name === "HomeStackGroup") {
                        iconName = (focused) ? "home" : "home-outline"
                    }
                    else if (route.name === pageNames.profile) {
                        iconName = (focused) ? "person" : "person-outline"
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: colors.red,
                headerShown: false
            })}
            initialRouteName="HomeStackGroup"
        >
            <bottomTab.Screen name={pageNames.profile} component={Profile}/>
            <bottomTab.Screen name="HomeStackGroup" component={HomeStackGroup} options={{headerShown: false, tabBarLabel: pageNames.home}}/>
        </bottomTab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator()

function HomeStackGroup() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={pageNames.home} component={Home}/>
            <HomeStack.Screen name={pageNames.workout} component={Workout}/>
        </HomeStack.Navigator>
    )
    
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}