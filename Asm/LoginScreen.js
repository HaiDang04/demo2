import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log('Đăng nhập:', username, password);
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Đăng Nhap</Text>
      <Image source={require('../img/logofpoly.jpg')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

    
      <View>
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', }}>
          <Text style={{ color: '#828282', fontWeight: 700 }}>Don't have account? Click </Text>
          <TouchableOpacity onPress={() =>{
            navigation.navigate('Singup');
          }}>
            <Text style={{ color: '#D17842', fontWeight: 700 }}>Register</Text>

          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 60, justifyContent: 'center', }}>
          <Text style={{ color: '#828282', fontWeight: 700 }}>Forget Password? Click  </Text>
          <Text style={{ color: '#D17842', fontWeight: 700 }}>Reset</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4287f5',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    color: '#4287f5',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;