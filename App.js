import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FlexBox from "./components/FlexBox";
import GameScreen from "./components/GameScreen";
import ShareExample from "./components/ ShareExample";

const styles = StyleSheet.create({
  dino: { fontSize: 20, fontWeight: "bold", color: "rebeccapurple" },
  share: {
    marginTop: 100,
  },
  screen: { marginBottom: 20 },
});

export default function App() {
  return (
    <View style={styles.screen}>
      <GameScreen />
      {/* <View style={{ marginHorizontal: 10, marginVertical: 80 }}> */}
      {/* <FlexBox /> */}
      {/* <Gallery /> */}
      {/* <Text style={styles.dino}>Dinosaurs are cool</Text> */}
      {/* <Footer /> */}
      {/* </View> */}
    </View>
  );
}
