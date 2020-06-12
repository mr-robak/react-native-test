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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FlexBox from "./components/FlexBox";
import GameScreen from "./components/GameScreen";
import ShareExample from "./components/ ShareExample";
import HomeScreen from "./components/HomeScreen";

const styles = StyleSheet.create({
  dino: { fontSize: 20, fontWeight: "bold", color: "rebeccapurple" },
  share: {
    marginTop: 100,
  },
  screen: { marginBottom: 20 },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome!" }}
        />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.screen}>
    //  {/* <GameScreen /> */}
    //  {/* <View style={{ marginHorizontal: 10, marginVertical: 80 }}> */}
    //  {/* <FlexBox /> */}
    //  {/* <Gallery /> */}
    //  {/* <Text style={styles.dino}>Dinosaurs are cool</Text> */}
    //  {/* <Footer /> */}
    //  {/* </View> */}
    // </View>
  );
}
