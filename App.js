import { StyleSheet } from 'react-native';
import { WebView } from "react-native-webview";
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync()
.then(result => console.log(`conseguido prevenir ${result}`))
.catch(console.warn)
export default function App() {

  setTimeout(() => {
    SplashScreen.hideAsync()
  }, 1000);

  return (
    <WebView
      source={{ uri: 'http://gnu.org' }}
      style={styles.container}

    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
