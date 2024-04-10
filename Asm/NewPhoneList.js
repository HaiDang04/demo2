import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import COMMON from '../COMMON';

const NewPhoneList = () => {
  const navigation = useNavigation();
  const [newPhoneList, setNewPhoneList] = useState([]);

  useEffect(() => {
    fetchNewPhoneData();
  }, []);

  const fetchNewPhoneData = async () => {
    try {
      const response = await axios.get(`http://${COMMON.ipv4}:3000/sanphamnew`);
      setNewPhoneList(response.data);
    } catch (error) {
      console.log('Error fetching new phone data:', error);
    }
  };

  const handleChiTietSP = (item) => {
    navigation.navigate('ChiTietSanPham', { itemId: item.id });
  };

  const renderNewPhoneItem = ({ item }) => (
    <TouchableOpacity style={styles.newPhoneContainer} onPress={() => handleChiTietSP(item)}>
      <View style={styles.newPhoneItem}>
        <Image style={styles.newPhoneItemImage} source={item.image} />
        <Text style={styles.newPhoneItemTitle}>{item.name}</Text>
        <Text style={styles.newPhoneItemSubtitle}>{item.brand}</Text>
        <Text style={styles.newPhoneItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.sectionTitle}>Sản Phẩm mới</Text>
      <FlatList
        data={newPhoneList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNewPhoneItem}
      />
    </View>
  );
};

export default NewPhoneList;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  newPhoneContainer: {
    paddingHorizontal: 10,
  },
  newPhoneItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  newPhoneItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  newPhoneItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  newPhoneItemSubtitle: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 5,
  },
  newPhoneItemPrice: {
    fontSize: 14,
    color: '#FF0000',
    fontWeight: 'bold',
  },
});