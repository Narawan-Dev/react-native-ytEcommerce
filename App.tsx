import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/screens/signin';
import SignUpScreen from './src/screens/signup';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }} // ลองไม่ใส่ และลองใส่ true
          />
          <stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }} // ลองไม่ใส่ และลองใส่ true
          />
          <stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
