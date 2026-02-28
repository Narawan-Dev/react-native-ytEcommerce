import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('SignIn');
  }, 2000); // 2000 milliseconds = 2 seconds
  return (
    <ImageBackground source={require('../../assets/bg-splash.jpg')}
    resizeMode="cover"
    style={{ flex: 1}}>
    <Text style={{
        color: 'white', 
        fontSize: 24, 
        fontWeight: 'bold', 
        textAlign: 'center',
        marginTop: 50}}>
        Welcome to My App!
    </Text>
    </ImageBackground>
  );
}