import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../utils/index";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function Wheather({ currentWeather }) {
  const {
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather: [details],
    sys: { country, sunrise, sunset },
    wind: { speed, deg },
    clouds: { all },
    name,
  } = currentWeather;
  const {id,icon, main, description } = details;

  const images = {
    clear: 'https://i.postimg.cc/mgZKzsWZ/sun.png',
    storm: 'https://i.postimg.cc/43q0SH7n/storm.png',
    snow: 'https://i.postimg.cc/dVXnsPqx/snow.png',
    haze: 'https://i.postimg.cc/0QCpJLsx/foggy.png',
    cloud: 'https://i.postimg.cc/zXQTWC9L/clouds.png',
    rain: 'https://i.postimg.cc/KvxHw2z7/rainy-day.png',
  }
let iconUrl;
  if (id == 800) {
    iconUrl = images.clear;
  }

  else if (id >= 200 && id <= 232) {
    iconUrl = images.storm;
  }

  else if (id >= 600 && id <= 622) {
    iconUrl = images.snow;
  }

  else if (id >= 701 && id <= 781) {
    iconUrl = images.haze;
  }

  else if (id >= 801 && id <= 804) {
    iconUrl = images.cloud;
  }

  else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
    iconUrl = images.rain;
  }


  return (
    <View>
      <View style={styles.wheatherInfo}>
        <View style={styles.wheatherInfo1}>
          <Image style={styles.wheatherImg} source={{ uri: iconUrl }} />
          <Text style={styles.main}>{main}</Text>
        </View>
        <View style={styles.wheatherInfo2}>
          <Text style={styles.temp}>{temp} °C</Text>
          <Text style={styles.placeName}>{name + " " + country}</Text>
          <Text style={styles.desc}>{`Max ${temp_max}°C Min ${temp_min}°C`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wheatherInfo: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    marginTop: 75,
  },
  wheatherInfo1: {
    alignItems: "center",
  },
  wheatherInfo2: {
    justifyContent: 'center',
  },
  wheatherImg: {
    width: 100,
    height: 100,
  },
  placeName: {
    fontSize: 18,
    color: SECONDARY_COLOR,
    paddingTop: 10,
  },
  temp: {
    fontSize: 35,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
  desc: {
    fontSize: 12,
    color: SECONDARY_COLOR,
    fontWeight: "bold",
  },
  main: {
    fontSize: 18,
    color: SECONDARY_COLOR,
    fontWeight: "bold",
  },
});
