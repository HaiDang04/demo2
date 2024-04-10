import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import Block from '../component/Block';
import Banner from '../component/Banner';
import CustomTextInput from '../component/CustomTextInput';
import Button from '../component/Button';
import CustomPasswordInput from '../component/CustomPasswordInput';
import axios from 'axios';
import COMMON from '../COMMON';

const LoginScreen = ({ navigation }) => {
  const [tendangnhap, settendangnhap] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = () => {
    if (isEmpty(tendangnhap) || isEmpty(password)) {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    axios
      .get(`http://${COMMON.ipv4}:3000/nguoidung?tendangnhap=${tendangnhap}`)
      .then(response => {
        const red_login = response.data;
        if (red_login.length !== 1) {
          Alert.alert('Tên đăng nhập không đúng hoặc có lỗi.');
        } else {
          const objU = red_login[0];
          if (objU.password !== password) {
            Alert.alert('Mật khẩu không đúng.');
          } else {
            navigation.navigate('Main');
          }
        }
      })
      .catch(error => {
        console.log('Đăng nhập thất bại:', error);
      });
  };

  const handleRest = () => {
    navigation.navigate('RegisterScreen');
  };

  const isEmpty = value => {
    return value.trim() === '';
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Đăng Nhập</Text>
        <Banner />
        <Block>
          <CustomTextInput
            placeholder="Tên Đăng Nhập"
            value={tendangnhap}
            onChangeText={settendangnhap}
          />
          <CustomPasswordInput
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setpassword}
          />
          <Button title="Đăng Nhập" onPress={handleLogin} />

          <View>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
              <Text style={{ color: '#828282', fontWeight: '700' }}>Don't have account? Click </Text>
              <Text style={{ color: '#D17842', fontWeight: '700' }} onPress={handleRest}>Register</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 60, justifyContent: 'center' }}>
              <Text style={{ color: '#828282', fontWeight: '700' }}>Forget Password? Click  </Text>
              <Text style={{ color: '#D17842', fontWeight: '700' }} onPress={handleRest}>Reset</Text>
            </View>
          </View>
        </Block>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF0000',
  },
});

export default LoginScreen;