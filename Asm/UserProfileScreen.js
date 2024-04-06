import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../component/MyThemes';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useTheme(); // Lấy giá trị theme và hàm toggleTheme từ hook useTheme

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const handlePersonalInfoPress = (item) => {
    setRecentlyViewed([item, ...recentlyViewed]);
    navigation.navigate('ThongTinChiTiet');
    console.log('Personal Info Pressed');
  };

  const handlePhoneInfoPress = (item) => {
    setRecentlyViewed([item, ...recentlyViewed]);
    navigation.navigate('PhoneInfoScreen');
    console.log('Phone Info Pressed');
  };

  const handleChangePasswordPress = (item) => {
    setRecentlyViewed([item, ...recentlyViewed]);
    navigation.navigate('ChangePasswordScreen');
    console.log('Change Password Pressed');
  };

  const handleLogoutPress = (item) => {
    setRecentlyViewed([item, ...recentlyViewed]);
    navigation.navigate('LoginScreen');
    console.log('Logout Pressed');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#66FFFF' }]}>
      <ScrollView>
        <View style={[styles.header, { backgroundColor: theme === 'light' ? '#fff' : '#66FFFF' }]}>
          <Image source={require('../img/image.png')} style={styles.avatar} />
          <Text style={styles.headerText}>Admin</Text>
          <Text style={styles.emailText}>Admin@gmail.com</Text>
        </View>

        {/* Personal Info Option */}
        <TouchableOpacity style={styles.option} onPress={handlePersonalInfoPress}>
          <Image source={require('../img/user.png')} style={styles.icon} />
          <Text style={styles.optionText}>Thông tin cá nhân</Text>
        </TouchableOpacity>

        {/* Phone Info Option */}
        <TouchableOpacity style={styles.option} onPress={handlePhoneInfoPress}>
          <Image source={require('../img/phone.png')} style={styles.icon} />
          <Text style={styles.optionText}>Thông tin điện thoại</Text>
        </TouchableOpacity>

        {/* Change Theme Option */}
        <TouchableOpacity style={styles.option} onPress={toggleTheme}>
          <Image source={require('../img/theme.png')} style={styles.icon} />
          <Text style={styles.optionText}>Đổi theme</Text>
        </TouchableOpacity>

        {/* Change Password Option */}
        <TouchableOpacity style={styles.option} onPress={handleChangePasswordPress}>
          <Image source={require('../img/lock.png')} style={styles.icon} />
          <Text style={styles.optionText}>Đổi password</Text>
        </TouchableOpacity>

        {/* Logout Option */}
        <TouchableOpacity style={styles.option} onPress={handleLogoutPress}>
          <Image source={require('../img/logout.png')} style={styles.icon} />
          <Text style={styles.optionText}>Đăng xuất</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eee',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;