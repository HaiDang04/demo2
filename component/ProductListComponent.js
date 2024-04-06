import React from 'react';
import { ScrollView, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const ProductListComponent = ({ data }) => {
  return (
    <FlatList
      data={data}
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
      contentContainerStyle={styles.productList}
    />
  );
};

export default ProductListComponent;

const styles = StyleSheet.create({
  productList: {
    paddingHorizontal: 10,
  },
  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  productBrand: {
    fontSize: 14,
    color: '#888888',
  },
});