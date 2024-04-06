import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';

import SearchComponent from '../component/SearchComponent';
import Slider from '../component/Slider';
import SPYeuThich from './SPYeuThich';
import UserProfileScreen from './UserProfileScreen';

export default HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Home');

  const [phoneList, setPhoneList] = useState([
    { id: '1', name: 'Phone 1', price: '$999', brand: 'Brand 1', image: require('../img/dienthoai.jpg') },
    { id: '2', name: 'Phone 2', price: '$799', brand: 'Brand 2', image: require('../img/dienthoai.jpg') },
    { id: '3', name: 'Phone 1', price: '$999', brand: 'Brand 1', image: require('../img/dienthoai.jpg') },
    { id: '4', name: 'Phone 2', price: '$799', brand: 'Brand 2', image: require('../img/dienthoai.jpg') },
    { id: '5', name: 'Phone 1', price: '$999', brand: 'Brand 1', image: require('../img/dienthoai.jpg') },
    { id: '8', name: 'Phone 2', price: '$799', brand: 'Brand 2', image: require('../img/dienthoai.jpg') },
    { id: '6', name: 'Phone 1', price: '$999', brand: 'Brand 1', image: require('../img/dienthoai.jpg') },
    { id: '7', name: 'Phone 2', price: '$799', brand: 'Brand 2', image: require('../img/dienthoai.jpg') },
    // Thêm các sản phẩm khác vào đây
  ]);

  const [newPhoneList, setNewPhoneList] = useState([
    { id: '8', name: 'New Phone 1', price: '$1299', brand: 'Brand 3', image: require('../img/dienthoai.jpg') },
    { id: '9', name: 'New Phone 2', price: '$999', brand: 'Brand 4', image: require('../img/dienthoai.jpg') },
    { id: '10', name: 'New Phone 3', price: '$899', brand: 'Brand 5', image: require('../img/dienthoai.jpg') },
    { id: '11', name: 'New Phone 1', price: '$1299', brand: 'Brand 3', image: require('../img/dienthoai.jpg') },
    { id: '12', name: 'New Phone 2', price: '$999', brand: 'Brand 4', image: require('../img/dienthoai.jpg') },
    { id: '13', name: 'New Phone 3', price: '$899', brand: 'Brand 5', image: require('../img/dienthoai.jpg') },
    // Thêm các sản phẩm mới khác vào đây
  ]);

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const handleChiTietSP = (item) => {
    setRecentlyViewed([item, ...recentlyViewed]);
    navigation.navigate('ChiTietSP');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.quizContainer} onPress={() => handleChiTietSP(item)}>
      <View style={styles.quizItem} >
        <Image style={styles.quizItemImage} source={item.image} />
        <Text style={styles.quizItemTitle}>{item.name}</Text>
        <Text style={styles.quizItemSubtitle}>{item.brand}</Text>
        <Text style={styles.quizItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

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
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='#FFFFFF' />
      {activeTab === 'Home' && (
        <View style={styles.tabContent}>
          <StatusBar translucent backgroundColor='#FFFFFF' />

          <View style={styles.bannerContainer}>
            {/* <Image source={require('../img/banner-tgdd.jpg')} style={styles.image} /> */}
            <Slider style={styles.image} />
            <SearchComponent />
          </View>

          <ScrollView>
            <Text style={styles.sectionTitle}>Sản Phẩm mới </Text>
            <FlatList
              data={newPhoneList}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderNewPhoneItem}
            />

            <Text style={styles.sectionTitle}>Danh Sách Điện Thoại</Text>
            <FlatList
              data={phoneList}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />

            <Text style={styles.sectionTitle}>Sản Phẩm Mới Xem Gần Đây</Text>
            <FlatList
              data={recentlyViewed}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          </ScrollView>
        </View>
      )}

      {activeTab === 'YeuThich' && (
        <View style={styles.tabContent}>
          {/* Add content for YeuThich tab */}
          <SPYeuThich />

        </View>
      )}
      {activeTab === 'ThongBao' && (
        <View style={styles.tabContent}>
          {/* Add content for YeuThich tab */}
          <UserProfileScreen />

        </View>
      )}


      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
          onPress={() => setActiveTab('Home')}
        >
          <Image source={require('../img/home.png')} style={styles.iconImage} />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'YeuThich' && styles.activeTab]}
          onPress={() => setActiveTab('YeuThich')}
        >
          <Image source={require('../img/heart.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'ThongBao' && styles.activeTab]}
          onPress={() => setActiveTab('ThongBao')}
        >
          <Image source={require('../img/notification.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDD',
    justifyContent: 'flex-end',
  },
  tabContent: {
    flex: 1,
    padding: 10
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    padding: 5,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#EEEEEE',
    borderColor: '#FF9900',
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
  },

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
    width: "90%", // Thay đổi kích thước chiều rộng của item
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  quizItemImage: {
    width: 150, // Thay đổi kích thước hình ảnh
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
  newPhoneContainer: {
    paddingHorizontal: 10,
  },
  newPhoneItem: {
    alignItems: 'center',
    marginHorizontal: 5,
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

  //
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#EC692D',
    elevation: 4,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
  },
  iconImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});