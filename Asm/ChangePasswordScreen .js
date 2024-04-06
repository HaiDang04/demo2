import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ChangePasswordScreen = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (name, value) => {
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = () => {
    // Thêm logic kiểm tra mật khẩu ở đây
    if (passwords.newPassword !== passwords.confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu mới và mật khẩu xác nhận không khớp.');
    } else {
      // Gửi yêu cầu đổi mật khẩu
      Alert.alert('Thành công', 'Mật khẩu đã được thay đổi.');
      // Điều hướng người dùng về màn hình trước, hoặc xử lý khác
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đổi Mật Khẩu</Text>
      
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Mật khẩu hiện tại"
        value={passwords.currentPassword}
        onChangeText={(text) => handlePasswordChange('currentPassword', text)}
      />
      
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Mật khẩu mới"
        value={passwords.newPassword}
        onChangeText={(text) => handlePasswordChange('newPassword', text)}
      />
      
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Xác nhận mật khẩu mới"
        value={passwords.confirmPassword}
        onChangeText={(text) => handlePasswordChange('confirmPassword', text)}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Đổi Mật Khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0066ff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
