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
} from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const randomNum = useRef(Math.random()).current;

  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <FlatList
        ListHeaderComponent={Header}
        data={[0, 1, 2, 3, 4]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
            >
              <Image
                source={{
                  uri: `https://picsum.photos/500/300?random=${
                    randomNum + item
                  }`,
                }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => String(item)}
        ListFooterComponent={Footer}
      />
    </View>
  );
}
