import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Button from '../component/Button';

const Bai2 = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null); // Changed initial value to null
  const [email, setEmail] = useState(null); // State to store email

  function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      setEmail(user.email); // Set email if user is logged in
    }
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;

  }, []);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '894100433524-44b535lfncaon4rjft7rt44lbso3jum5.apps.googleusercontent.com',
      androidClientId: '894100433524-bp6qt0nr0efllp5bngcibkdukteiqdbo.apps.googleusercontent.com',
    
    });
    const checkPlayServices = async () => {
      try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      } catch (error) {
        console.error('Google Play Services are not available:', error);

      }
    };

    checkPlayServices();

  }, []);
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  const signUpWithGoogle = () => {
    onGoogleButtonPress()
      .then(() => console.log('Đăng nhập thành công'))
      .catch(err => {
        console.log('Lỗi', err);
      });
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('Đăng xuất thành công'));
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Button title="Đăng nhập với Google" onPress={signUpWithGoogle} />
      </View>
    );
  }

  return (
    <View>
      <Text>Xin chào {email}</Text>
      <CustomButton title="Đăng Xuất" onPress={handleSignOut} />
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({});
