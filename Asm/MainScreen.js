import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import SearchComponent from '../component/SearchComponent';
import Slider from '../component/Slider';
import { useNavigation } from '@react-navigation/native';
import NewPhoneList from './NewPhoneList';
import PhoneList from './PhoneList';

const MainScreen = () => {
  const navigation = useNavigation();
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const handleChiTietSP = (item) => {
    setRecentlyViewed([item, ...recentlyViewed]);
    navigation.navigate('ChiTietSanPham', { itemId: item.id });
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='#FFFFFF' />
      <View style={styles.bannerContainer}>
          <Slider style={styles.image} />
         
        </View>
        <SearchComponent />
     <ScrollView>
        <NewPhoneList />
        <PhoneList />
        <Text style={styles.sectionTitle}>Sản Phẩm Mới Xem Gần Đây</Text>
        <FlatList
          data={recentlyViewed}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleChiTietSP(item)}>
              <View style={styles.recentItemContainer}>
                <Image source={{ uri: item.image }} style={styles.recentItemImage} />
                <Text style={styles.recentItemName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bannerContainer: {
    height: 200,
    marginBottom: 10,
  },
  image: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
  },
  recentItemContainer: {
    marginRight: 10,
  },
  recentItemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  recentItemName: {
    marginTop: 5,
  },
});

export default MainScreen;