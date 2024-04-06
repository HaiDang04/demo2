import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const FavoriteProducts = () => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      name: "Điện thoại A",
      price: "1,000,000 VND",
      image: require("../img/dienthoai.jpg"),
      isFavorite: false,
    },
    {
      id: 2,
      name: "Điện thoại B",
      price: "2,500,000 VND",
      image: require("../img/dienthoai.jpg"),
      isFavorite: false,
    },
    {
      id: 3,
      name: "Điện thoại C",
      price: "3,200,000 VND",
      image: require("../img/dienthoai.jpg"),
      isFavorite: false,
    },
    {
      id: 4,
      name: "Điện thoại A",
      price: "1,000,000 VND",
      image: require("../img/dienthoai.jpg"),
      isFavorite: false,
    },
    {
      id: 5,
      name: "Điện thoại B",
      price: "2,500,000 VND",
      image: require("../img/dienthoai.jpg"),
      isFavorite: false,
    },
    {
      id: 6,
      name: "Điện thoại C",
      price: "3,200,000 VND",
      image: require("../img/dienthoai.jpg"),
      isFavorite: false,
    },
    // ...
  ]);

  const toggleFavorite = (productId) => {
    const updatedData = productData.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          isFavorite: !item.isFavorite,
        };
      }
      return item;
    });
    setProductData(updatedData);
  };

  const removeFromFavorites = () => {
    const updatedData = productData.filter((item) => !item.isFavorite);
    setProductData(updatedData);
  };

  const renderItem = ({ item }) => {
    const heartIcon = item.isFavorite ? require("../img/tym.png") : require("../img/tymdo.png");
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
          <Image source={heartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sản Phẩm Yêu Thích</Text>
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity onPress={removeFromFavorites} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Xóa khỏi danh sách</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    width: "100%",
    height: 110,
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  removeButton: {
    backgroundColor: "red",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FavoriteProducts;