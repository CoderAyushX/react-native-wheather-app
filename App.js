import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import Wheather from "./components/screens/Wheather";
import Wheatherdetails from "./components/screens/Wheatherdetails";
import Reload from "./components/screens/Reload";
import { colors } from "./utils/index";


const {BG_COLOR,PRIMARY_COLOR} = colors;
const WHEATHER_API_KEY = "1f04ba73b1e7f3d5ddab9a02a5cc382c";
const BASE = "http://api.openweathermap.org/data/2.5/weather?";


export default function App() {

  const [errorMessage, setErrorMesssage] = useState(null);
  const[currentWeather, setCurrentWheather] = useState(null);
  const[unit, setUnit] = useState('metric');
  useEffect(() => {
    load();
  }, []);
  async function load() {
    setCurrentWheather(null)
    setErrorMesssage(null)
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMesssage("Access to location is need to run this app!");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const WeatherUrl =`${BASE}lat=${latitude}&lon=${longitude}&units=${unit}&appid=${WHEATHER_API_KEY}`;

      const response = await fetch(WeatherUrl);

      const result = await response.json();
      
      if(response.ok){
        setCurrentWheather(result);
      }else{
        setErrorMesssage(result.message); 
      }
    } catch (error) {
      setErrorMesssage(error.message);
    }
  }
  if (currentWeather){
    const {main: {temp}} = currentWeather
  return (
    <View style={styles.container1}>
      <StatusBar style="auto" />
      <View style={styles.main}>
         <Wheather currentWeather={currentWeather}/>
         <Wheatherdetails currentWeather={currentWeather} />
         <Reload load={load} />
      </View>
    </View>
  )}else if(errorMessage){
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <Reload load={load} />
        <StatusBar style="auto" />
      </View>
    )
  }else{
    return(
    <View style={styles.container}>
      <ActivityIndicator size="large" color={PRIMARY_COLOR}  />
    <StatusBar style="auto" />
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: BG_COLOR,

  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
