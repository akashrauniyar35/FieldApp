import { StyleSheet, Platform, StatusBar } from "react-native";

const colorOne = '#01151A';

export default StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: colorOne,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});