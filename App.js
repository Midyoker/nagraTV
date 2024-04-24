import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import SignInScreens from './src/screens/SignInScreens';
import SignUpScreens from './src/screens/SignUpScreens';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
  return (
    <View style={styles.container}>
      <ConfirmEmailScreen/>
      <Text style={styles.text}>Happy Exploring!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,  
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,  
  },
});
