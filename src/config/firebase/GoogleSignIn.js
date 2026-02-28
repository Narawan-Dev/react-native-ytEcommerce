import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// เรียกครั้งเดียว (ไว้นอกฟังก์ชัน)
GoogleSignin.configure({
  webClientId: '572192369209-l6hlmbmr0bejl82atpsbu6f63hpplqu5.apps.googleusercontent.com',
  offlineAccess: true,
  scopes: ['profile', 'email'],
});

export const _signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // แนะนำ: clear state ก่อน กัน stuck
    await GoogleSignin.signOut().catch(() => {});
    await GoogleSignin.signIn();

    const { idToken, accessToken } = await GoogleSignin.getTokens();
    console.log('TOKENS =>', { hasIdToken: !!idToken, hasAccessToken: !!accessToken });

    if (!idToken && !accessToken) {
      throw new Error('No idToken/accessToken from GoogleSignin.getTokens()');
    }

    const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);
    const result = await auth().signInWithCredential(credential);

    return result;
  } catch (e) {
    console.log('Google Sign-In error:', e);
    return null;
  }
};