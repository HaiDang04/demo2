import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ChiTietSanPham() {
  const [soLuong, setSoLuong] = useState(1);
  const [giaTien, setGiaTien] = useState(100); // Giá tiền mặc định là 100
  const [yeuThich, setYeuThich] = useState(false);
  const [binhLuan, setBinhLuan] = useState("");

  const tangSoLuong = () => {
    const newSoLuong = soLuong + 1;
    setSoLuong(newSoLuong);
    setGiaTien(100 * newSoLuong); // Giả sử giá tiền cố định là 100 cho mỗi đơn vị
  };

  const giamSoLuong = () => {
    if (soLuong > 1) {
      const newSoLuong = soLuong - 1;
      setSoLuong(newSoLuong);
      setGiaTien(100 * newSoLuong);
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
            source={require('../img/dienthoai.jpg')} // Đường dẫn đến ảnh sản phẩm
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.yeuThichButton}
            onPress={() => setYeuThich(!yeuThich)}
          >
            <Image
              source={yeuThich ? require('../img/tym.png') : require('../img/tymdo.png')}
              style={styles.heartIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Tên điện thoại: Samsung Galaxy S21</Text>
          <Text style={styles.details}>Hãng điện thoại: Samsung</Text>
          <Text style={styles.details}>Giá tiền: 99999 đ</Text>
          <Text style={styles.details}>Chi tiết sản phẩm:</Text>
          <Text style={styles.longDetails}>
            Điện thoại Samsung Galaxy S21 là một sản phẩm công nghệ hàng đầu với nhiều tính năng vượt trội. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
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