import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";

import { theme } from "../../theme";

export const MapArea = () => (
  // pointerEvents - to prevent interaction with the map
  <View style={styles.container} pointerEvents='none'>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 51.5285578,
        longitude: -0.2420242,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}>
      <Circle
        key={("51.5285578" + "-0.2420242").toString()}
        center={{ latitude: 51.5285578, longitude: -0.2420242 }}
        radius={100}
        strokeWidth={3}
        strokeColor={theme.blue}
        fillColor={theme.blueTrans}
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
