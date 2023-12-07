import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './constants/colors';

export default function App() {
  console.log('testing');
  let x = 1;
  return (
    <View style={styles.container}>
      <Text>Hello Bros 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
