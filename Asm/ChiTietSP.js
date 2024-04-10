import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import COMMON from '../COMMON';

export default function ChiTietSanPham({ route }) {
  const { itemId } = route.params;
  const [product, setProduct] = useState(null);
  const [soLuong, setSoLuong] = useState(1);
  const [giaTien, setGiaTien] = useState(); 
  const [yeuThich, setYeuThich] = useState();
  const [binhLuan, setBinhLuan] = useState("");

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`http://${COMMON.ipv4}:3000/sanpham`);
      const productData = response.data.find(item => item.id === itemId);
      setProduct(productData);
      setGiaTien(productData.price);
      setYeuThich(productData.status);
    } catch (error) {
      console.log('Error fetching product data:', error);
    }
  };

  if (!product) {
    return <Text>Sản phẩm không tồn tại.</Text>;
  }

  const tangSoLuong = () => {
    const newSoLuong = soLuong + 1;
    setSoLuong(newSoLuong);
    setGiaTien(giaTien * newSoLuong); // Giả sử giá tiền cố định là 100 cho mỗi đơn vị
  };

  const giamSoLuong = () => {
    if (soLuong > 1) {
      const newSoLuong = soLuong - 1;
      setSoLuong(newSoLuong);
      setGiaTien(giaTien * newSoLuong);
    }
  };

  const muaSanPham = () => {
    // Xử lý logic khi nhấn nút "Mua"
    console.log("Mua sản phẩm");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }} // Đường dẫn đến ảnh sản phẩm
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.yeuThichButton}
            onPress={() => setYeuThich(product.status === 1)}
          >
            <Image
              source={yeuThich ? require('../img/tym.png') : require('../img/tymdo.png')}
              style={styles.heartIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Tên điện thoại: {product.name}</Text>
          <Text style={styles.details}>Hãng điện thoại: {product.brand}</Text>
          <Text style={styles.details}>Giá tiền: {product.price}</Text>
          <Text style={styles.details}>Chi tiết sản phẩm:</Text>
          <Text style={styles.longDetails}>{product.detail}</Text>
          <TextInput
            style={styles.binhLuanInput}
            value={binhLuan}
            onChangeText={setBinhLuan}
            placeholder="Thêm bình luận..."
          />
        </View>
      </ScrollView>

      <View style={styles.muahang}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Giá tiền:</Text>
          <Text style={styles.price}>{giaTien} đ</Text>
        </View>

        <View style={styles.soLuongContainer}>
          <TouchableOpacity onPress={giamSoLuong} style={styles.soLuongButton}>
            <Text style={styles.soLuongButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.soLuongInput}
            value={soLuong.toString()}  
            keyboardType="numeric"
            editable={false} // Người dùng không thể chỉnh sửa trực tiếp số lượng từ bàn phím
          />
          <TouchableOpacity onPress={tangSoLuong} style={styles.soLuongButton}>
            <Text style={styles.soLuongButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={muaSanPham} style={styles.muaButton}>
          <Text style={styles.muaButtonText}>Mua Ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 500,
  },
  yeuThichButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  heartIcon: {
    width: 30,
    height: 30,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    marginBottom: 4,
  },
  longDetails: {
    marginBottom: 8,
  },
  binhLuanInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  soLuongContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  soLuongButton: {
    backgroundColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  soLuongButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  soLuongInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    width: 50,
    textAlign: 'center',
  },
  muahang: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  muaButton: {
    backgroundColor: 'green',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  muaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});