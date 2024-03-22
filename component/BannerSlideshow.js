import React from 'react';
import { View, Image } from 'react-native';

const BannerSlideshow = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image source={require('../img/banner-tgdd.jpg')} style={styles.bannerImage} />
    </View>
  );
};

export default BannerSlideshow;