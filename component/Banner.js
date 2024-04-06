import React from 'react';
import { View, Image, StyleSheet, } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/logofpoly.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default Banner;