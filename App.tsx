import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapArea } from './src/components/geo';

export default function App() {
  return (
    <View style={styles.container}>
      <MapArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
