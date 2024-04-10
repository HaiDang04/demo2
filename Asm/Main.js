import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';

import SearchComponent from '../component/SearchComponent';
import Slider from '../component/Slider';
import SPYeuThich from './SPYeuThich';
import UserProfileScreen from './UserProfileScreen';
import MainScreen from './MainScreen';
export default HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Home');

  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='#FFFFFF' />
      {activeTab === 'Home' && (
        <View style={styles.tabContent}>
         <MainScreen/>
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