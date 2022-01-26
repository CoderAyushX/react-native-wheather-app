import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function wheatherdetails({ currentWeather }) {
  const {
    main: { pressure, humidity },
    sys: { country, sunrise, sunset },
    wind: { speed, deg },
    clouds: { all },
    name,
  } = currentWeather;
  const images = {
    wind: "https://i.postimg.cc/YqqBgF4v/wind.png",
    pressure: "https://i.postimg.cc/Y9bbwvtP/meter.png",
    humid: "https://i.postimg.cc/K8P721N5/drop.png",
    cloud: "https://i.postimg.cc/cHbwmwxd/cloud.png",
  };
  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/HLbBkPzG/wave.png" }}
      style={styles.bg}
    >
      <View style={styles.mainBox}>
        <View style={styles.boxx}>
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: images.wind }} />
            <Text style={styles.text}> {`Wind ${speed}m/s`}</Text>
          </View>
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: images.humid }} />
            <Text style={styles.text}> {`Humidity ${humidity}%`}</Text>
          </View>
        </View>

        <View style={styles.boxx}>
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: images.pressure }} />
            <Text style={styles.text}> {`Pressure ${pressure}hpa`}</Text>
          </View>
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: images.cloud }} />
            <Text style={styles.text}> {`Clouds ${all}%`}</Text>
          </View>
        </View>

      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bg: {
    height: 500,
    width: '100%',
  },
  mainBox: {
    position: "absolute",
    bottom: 100,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderWidth: 0.4,
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  boxx:{
    flexDirection: "row",
    justifyContent: 'space-around',
    width: 300,
    marginBottom: 10,
  },
});
