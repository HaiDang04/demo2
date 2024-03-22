import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const NewProductList = ({ productList }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Danh sách sản phẩm mới</Text>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productBrand}>{item.brand}</Text>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

export default NewProductList;