import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
import Navigation from './navigation/navigation';
import colors from './constants/colors';

export default function App() {
  return (
    <Navigation></Navigation>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 70,
    backgroundColor: colors.black
  },
});
