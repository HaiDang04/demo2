import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Block from '../component/Block';
import Banner from '../component/Banner';
import CustomTextInput from '../component/CustomTextInput';
import Button from '../component/Button';
import CustomPasswordInput from '../component/CustomPasswordInput';
import COMMON from '../COMMON';

const RegisterScreen = ({ navigation }) => {
  const [tendangnhap, settendangnhap] = useState('');
  const [email, setEmail] = useState('');
  const [sodienthoai, setSoDienThoai] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (isEmpty(tendangnhap) || isEmpty(email) || isEmpty(sodienthoai) || isEmpty(password) || isEmpty(confirmPassword)) {
      console.log('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (!isValidEmail(email)) {
      console.log('Email không hợp lệ');
      return;
    }

    if (!isValidPhoneNumber(sodienthoai)) {
      console.log('Số điện thoại không hợp lệ');
      return;
    }

    if (password !== confirmPassword) {
      console.log('Xác nhận mật khẩu không khớp');
      return;
    }

    // Gửi dữ liệu đăng ký lên server
    const data = {
      tendangnhap,
      email,
      sodienthoai,
      password,
    };

    fetch(`http://${COMMON.ipv4}:3000/nguoidung`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Đăng ký thành công:', responseData);
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        console.log('Lỗi khi đăng ký:', error);
      });
  };

  const isEmpty = (value) => {
    // Kiểm tra xem giá trị có rỗng hay không
    return value.trim() === '';
  };

  const isValidEmail = (email) => {
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Kiểm tra định dạng số điện thoại
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Đăng Ký</Text>
        <Banner />
        <Block>
          <CustomTextInput
            placeholder="Tên Đăng Nhập"
            value={tendangnhap}
            onChangeText={settendangnhap}
          />
          <CustomTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            placeholder="Số Điện Thoại"
            value={sodienthoai}
            onChangeText={setSoDienThoai}
            keyboardType="numeric"
          />
          <CustomPasswordInput
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setpassword}
          />
          <CustomPasswordInput
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Button title="Đăng Ký" onPress={handleRegister} />

          <View>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
              <Text style={{ color: '#828282', fontWeight: '700' }}>Already have an account? Click </Text>
              <Text style={{ color: '#D17842', fontWeight: '700' }} onPress={handleLogin}>Đăng Nhập</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 60, justifyContent: 'center' }}>
              <Text style={{ color: '#828282', fontWeight: '700' }}>Forget Password? Click  </Text><Text style={{ color: '#D17842', fontWeight: '700' }}>Reset</Text>
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

export default RegisterScreen;