import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native';

const PersonalInfoScreen = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Nguyễn Văn A',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    email: 'nguyenvana@gmail.com',
    phone: '0909123456',
    age: '30',
  });

  const handleAvatarChange = () => {
    // Xử lý thay đổi avatar ở đây
    console.log('Avatar change handler');
    // Ví dụ: mở gallery hoặc camera để người dùng chọn ảnh mới
  };

  const handleSaveChanges = () => {
    // Xử lý lưu thông tin cá nhân ở đây
    console.log('Save changes handler');
    // Thông báo cho người dùng rằng thông tin đã được cập nhật
    Alert.alert('Thông báo', 'Thông tin cá nhân đã được cập nhật.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../img/image.png')} // Thay thế bằng đường dẫn đến ảnh avatar thực tế
          style={styles.avatar}
        />
        <Button title="Thay đổi ảnh đại diện" onPress={handleAvatarChange} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Họ tên"
        value={personalInfo.fullName}
        onChangeText={(text) => setPersonalInfo({...personalInfo, fullName: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ"
        value={personalInfo.address}
        onChangeText={(text) => setPersonalInfo({...personalInfo, address: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={personalInfo.email}
        onChangeText={(text) => setPersonalInfo({...personalInfo, email: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={personalInfo.phone}
        onChangeText={(text) => setPersonalInfo({...personalInfo, phone: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Tuổi"
        value={personalInfo.age}
        onChangeText={(text) => setPersonalInfo({...personalInfo, age: text})}
        keyboardType="numeric"
      />

      <Button
        title="Lưu Thay Đổi"
        onPress={handleSaveChanges}
        color="#0066ff" // Thay đổi màu nút nếu bạn muốn
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});

export default PersonalInfoScreen;
