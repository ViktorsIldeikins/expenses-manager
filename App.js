import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MainView} from "./components/MainView";

export default function App() {


  return (
    <View style={styles.container}>
      <MainView/>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
