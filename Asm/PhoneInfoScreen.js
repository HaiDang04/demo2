import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PhoneInfoScreen = () => {
  const phoneDetails = {
    modelName: 'Galaxy S21',
    phoneNumber: '+123 456 7890',
    ram: '8GB',
    chip: 'Exynos 2100',
    storage: '128GB',
    // Thêm các thông tin khác của điện thoại nếu muốn
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../img/chip.jpg')} style={styles.icon} />
        <Text style={styles.headerText}>Thông Tin Điện Thoại</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Tên điện thoại:</Text>
        <Text style={styles.infoContent}>{phoneDetails.modelName}</Text>

        <Text style={styles.infoTitle}>Số điện thoại:</Text>
        <Text style={styles.infoContent}>{phoneDetails.phoneNumber}</Text>

        <Text style={styles.infoTitle}>RAM:</Text>
        <Text style={styles.infoContent}>{phoneDetails.ram}</Text>

        <Text style={styles.infoTitle}>Chip:</Text>
        <Text style={styles.infoContent}>{phoneDetails.chip}</Text>

        <Text style={styles.infoTitle}>Bộ nhớ trong:</Text>
        <Text style={styles.infoContent}>{phoneDetails.storage}</Text>
        {/* Thêm các dòng khác tương tự cho thông tin khác */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Một màu nền nhẹ cho header
  },
  icon: {
    width: 150,
    height: 150, // Kích thước cho ảnh biểu tượng chip
    marginTop: 30
  },
  headerText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContent: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 15,
    color: '#333', // Màu cho nội dung thông tin
  },
});

export default PhoneInfoScreen;
