import {Alert, StyleSheet, Text, TextInput, View, } from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Button from '../component/Button';

const Bai1 = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Đăng Nhập Thành Công');
      })
      .catch(err => {
        if (err.code === 'auth/wrong-password') {
          console.log('Sai mật khẩu');
        } else if (err.code === 'auth/user-not-found') {
          console.log('Không tìm thấy người dùng với email này');
        } else {
          console.error('Đăng nhập thất bại:', err);
        }
      });
  };
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('Đăng xuất thành công'));
  };
  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Tài khoản đã được tạo và đăng nhập');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email đã tồn tại');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('Email của bạn không hợp lệ');
        }
        console.error(error);
      });
  };
  if (!user) {
    return (
      <View>
        <TextInput
          placeholder="Mời nhập email"
          onChangeText={txt => setEmail(txt)}
        />
        <TextInput
          placeholder="Mời nhập mật khẩu"
          onChangeText={txt => setPassword(txt)}
        />
        <Button title="Đăng Nhập" onPress={handleSignIn} />
        <Button title="Đăng Ký" onPress={handleSignUp} />
      </View>
    );
  }
  return (
    <View>
      <Text>Xin chào {email}</Text>
      <Button title="Đăng Xuất" onPress={handleSignOut} />
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({});
