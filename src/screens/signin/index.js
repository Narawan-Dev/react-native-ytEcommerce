import { View, Image, StatusBar, Text } from 'react-native';
import React from 'react';
import RoundButtonComp from '../../components/RoundButtonComp';
import FullRoundButtonComp from '../../components/FullRoundButtonComp';
import {_signInWithGoogle} from '../../config/firebase/GoogleSignIn';

export default function SignInScreen({navigation}) {
  async function googleSignIn() {
    try {
      _signInWithGoogle().then((data) => {
        if (!data) {
          console.log("Google Sign-In failed: No Data");
        }
        console.log("Google Sign-In successful: ", data);
      });
    } catch (error) {
      console.log("Google Sign-In failed: ", error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff3e3" />
      <View style={{ flex: 0.5 }}>
        <Image
          source={require('../../assets/bg-login.jpg')}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View style={{ flex: 0.5, backgroundColor: '#fff3e3' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          Hello
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          Welcome to out Ecomerce App
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}
        >
          <RoundButtonComp label={'Login'} />
          <RoundButtonComp label={'Sign Up'} border={true} onPress={() => navigation.navigate('SignUp')} />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            paddingBottom: 20,
            justifyContent: 'flex-end',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            Or via social media account
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}
          >
            <FullRoundButtonComp
              image={require('../../assets/facebook-icon.png')}
              bg={'#2d75e8'}
            />
            <FullRoundButtonComp
              image={require('../../assets/google-icon.png')}
              bg={'#e54545'}
              onPress={() => googleSignIn()}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
