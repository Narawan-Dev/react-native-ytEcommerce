import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#fff3e3" barStyle="dark-content" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Create your account</Text>
        </View>

        {/* Form Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#9a9a9a"
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#9a9a9a"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#9a9a9a"
            secureTextEntry
            style={styles.input}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm your password"
            placeholderTextColor="#9a9a9a"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity activeOpacity={0.85} style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Create account</Text>
          </TouchableOpacity>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.link} > Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.note}>
          By continuing, you agree to our Terms & Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff3e3',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  header: {
    marginTop: 6,
    marginBottom: 14,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
  },
  label: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#111',
  },
  primaryBtn: {
    marginTop: 18,
    height: 50,
    backgroundColor: '#034ef7',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
  },
  footerText: {
    color: '#444',
  },
  link: {
    color: '#034ef7',
    fontWeight: '800',
  },
  note: {
    textAlign: 'center',
    marginTop: 14,
    fontSize: 12,
    color: '#666',
  },
});