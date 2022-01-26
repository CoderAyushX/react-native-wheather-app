import { View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function reload({load}) {
    const icon = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
  return (
    <View style={styles.container}>
    <Ionicons name={icon} size={30} color="#ff384f" onPress={load} />
  </View>
  );
}
const styles = StyleSheet.create({ 
    container: {
        position: 'absolute',
        top: 30,
        right: 10,
    }
}); 