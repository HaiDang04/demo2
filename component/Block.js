import React from 'react';
import { View, StyleSheet } from 'react-native';

const Block = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
  },
});

export default Block;