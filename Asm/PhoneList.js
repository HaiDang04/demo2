import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import COMMON from '../COMMON';

const PhoneList = () => {
  const navigation = useNavigation();
  const [phoneList, setPhoneList] = useState([]);

  useEffect(() => {
    fetchPhoneData();
  }, []);

  const fetchPhoneData = async () => {
    try {
      const response = await axios.get(`http://${COMMON.ipv4}:3000/sanpham`);
      setPhoneList(response.data);
    } catch (error) {
      console.log('Error fetching phone data:', error);
    }
  };

  const handleChiTietSP = (item) => {
    navigation.navigate('ChiTietSanPham', { itemId: item.id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.quizContainer} onPress={() => handleChiTietSP(item)}>
      <View style={styles.quizItem}>
        <Image style={styles.quizItemImage} source={item.image} />
        <Text style={styles.quizItemTitle}>{item.name}</Text>
        <Text style={styles.quizItemSubtitle}>{item.brand}</Text>
        <Text style={styles.quizItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.sectionTitle}>Danh Sách Điện Thoại</Text>
      <FlatList
        data={phoneList}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PhoneList;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  quizContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  quizItem: {
    alignItems: "center",
    padding: 10,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
  },
  quizItemImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  quizItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quizItemSubtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  quizItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
});