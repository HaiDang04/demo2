import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const SearchComponent = ({ searchText, setSearchText }) => {
  return (
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
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});