import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';

export default function Home() {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
