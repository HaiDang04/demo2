import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Block from '../component/Block';
import Banner from '../component/Banner';
import CustomTextInput from '../component/CustomTextInput';
import Button from '../component/Button';
import CustomPasswordInput from '../component/CustomPasswordInput';

const LoginScreen = ({navigation}) => {
  const [tendangnhap, settendangnhap] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = () => {
    if (isEmpty(tendangnhap) || isEmpty(password) ) {
      console.log('Vui lòng điền đầy đủ thông tin');
      return;
    }
    console.log('Đăng nhập:', tendangnhap, password);
    navigation.navigate('Main');
  };
  const handleRest = () =>{
    navigation.navigate('RegisterScreen');
  }
  const isEmpty = (value) => {
    // Kiểm tra xem giá trị có rỗng hay không
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
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', }}>
              <Text style={{ color: '#828282', fontWeight: 700 }}>Don't have account? Click </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 60, justifyContent: 'center', }}>
              <Text style={{ color: '#828282', fontWeight: 700 }}>Forget Password? Click  </Text>
              <Text style={{ color: '#D17842', fontWeight: 700 }} onPress={handleRest}>Reset</Text>
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
    color: '#FF0000'
  },
});

export default LoginScreen;