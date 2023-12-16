import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './constants/colors';
import pageNames from './constants/pageNames';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Workout from './screens/Workout';


const Tab = createBottomTabNavigator();

function handleRoute({route}: any) {
  return ({
    tabBarIcon: ({focused, color, size}: any) => {
      let iconName: any;
      let rn = route.name;

      if (rn === pageNames.home) {
        iconName = focused ? 'home' : 'home-outline';
      } else if (rn === pageNames.profile) {
        iconName = focused ? 'person' : 'person-outline';
      } else if (rn === pageNames.workout) {
        iconName = focused ? 'barbell' : 'barbell-outline';
      }
      
      return <Ionicons name={iconName} size={size} color={color} />
    },
    tabBarActiveTintColor: colors.grey,
    tabBarInactiveTintColor: colors.white,
    tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
    tabBarStyle: styles.container
  })
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={pageNames.home}
        screenOptions={handleRoute}>

        <Tab.Screen name={pageNames.profile} component={Profile}/>
        <Tab.Screen name={pageNames.home} component={Home}/>
        <Tab.Screen name={pageNames.workout} component={Workout}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 70,
    backgroundColor: colors.black
  },
});
