import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import MainContainer from './Navigation/MainContainer';


import Button from './Components/Button';
import ImageViewer from './Components/ImageViewer'; 

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label={"Choice 1"}/>
        <Button label={"Choice 2"}/>
      </View>
      <StatusBar style="auto" />
      <MainContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingTop: 30,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 70,
    top: 50,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    top: 50,
  },
  footerContainer: {
    flex: 1 / 3, 
    alignItems: 'center', 
  },
});
