import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../Global/mapStyle";
const SCREEN_WIDTH = Dimensions.get("window").width;

export class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView
          //   ref={_map}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          //   showsUserLocation={true}
          //   followsUserLocation={true}
          //   initialregion={{
          //     ...carsAround[0],
          //     latitudeDelta: 0.008,
          //     longitudeDelta: 0.008,
          //   }}
        >
          {/* //   {carsAround.map((item, index) => ( */}
          {/* //     <MapView.Marker coordinate={item} key={index.toString()}> */}
          {/* //       <Image */}
          {/* //         source={require("../../assets/carMarker.png")} */}
          {/* //         style={styles.carsAround} */}
          {/* //         resizeMode="cover" */}
          {/* //       /> */}
          {/* // </MapView.Marker> */}
          {/* //   ))} */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
  },
});

export default MapComponent;
