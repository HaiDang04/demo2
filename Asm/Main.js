import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient';

export default HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Home');
  
  // Danh sách sản phẩm điện thoại
  const [phoneList, setPhoneList] = useState([
    { id: '1', name: 'Phone 1', price: '$999', brand: 'Brand 1', image: require('../img/dienthoai.jpg') },
    { id: '2', name: 'Phone 2', price: '$799', brand: 'Brand 2', image: require('../img/dienthoai.jpg') },
    // Thêm các sản phẩm khác vào đây
  ]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='#FFFFFF' />
      {activeTab === 'Home' && (
        <View style={styles.tabContent}>
          <View style={styles.bannerContainer}>
            <Image source={require('../img/banner-tgdd.jpg')} style={styles.bannerImage} />
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#FFFFFF"
              value={searchText}
              onChangeText={setSearchText}
            />
            <Image source={require('../img/search-normal.png')} style={styles.searchIcon} />
          </View>
          <ScrollView style={styles.productList}>
            <FlatList
              data={phoneList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.productItem}>
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <Text style={styles.productBrand}>{item.brand}</Text>
                </TouchableOpacity>
              )}
              numColumns={2}
            />
          </ScrollView>
        </View>
      )}

      {activeTab === 'Giohang' && (
        <View style={styles.tabContent}>
          {/* Add content for Giohang tab */}
        </View>
      )}

      {activeTab === 'YeuThich' && (
        <View style={styles.tabContent}>
          {/* Add content for YeuThich tab */}
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
          style={[styles.tab, activeTab === 'Giohang' && styles.activeTab]}
          onPress={() => setActiveTab('Giohang')}
        >
          <Image source={require('../img/group.png')} style={styles.iconImage} />
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
    },
    bannerContainer: {
      height: 220,
      marginBottom: 20,
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
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
    searchInput: {
      flex: 1,
      height: 40,
      color: '#000000',
    },
    searchIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      marginLeft: 10,
    },
    productList: {
      paddingHorizontal: 10,
    },
    productItem: {
      flex: 1,
      margin: 10,
      alignItems: 'center',
      borderWidth: 1, // Thêm viền cho mỗi sản phẩm
      borderColor: '#DDDDDD', // Màu viền
      borderRadius: 5, // Bo góc viền
      backgroundColor: '#FFFFFF', // Màu nền sản phẩm
    },
    productImage: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
      color: '#333333',
    },
    productPrice: {
      fontSize: 14,
      color: '#888888',
    },
    productBrand: {
      fontSize: 14,
      color: '#888888',
      marginTop: 5,
    },
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