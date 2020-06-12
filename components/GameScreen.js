import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { DeviceMotion } from "expo-sensors";
import ShareExample from "./ ShareExample";
import MyButton from "./MyButton";

export default function GameScreen({ route, navigation }) {
  const [color, set_color] = useState("white");
  const [paused, set_paused] = useState(false);

  const { count } = route.params;

  useEffect(() => {
    DeviceMotion.setUpdateInterval(50);

    const subscription = DeviceMotion.addListener((data) => {
      // from 0 to 360 (the color wheel)
      const hue = Math.max(0, Math.round(150 + 150 * data.rotation.beta) % 360);

      // from 0% to 100% (from gray/black to fully saturated color)
      const saturation = Math.max(
        0,
        Math.round(30 + 60 * data.rotation.beta) % 100
      );

      set_color(`hsl(${hue}, ${saturation}%, 50%)`);
      if (!paused) {
        set_color(`hsl(${hue}, ${saturation}%, 50%)`);
      }
    });

    // cleanup on unmount
    return () => subscription.remove();
  }, [set_color, paused]);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: color,
      }}
    >
      <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: "bold" }}>
        Choose your color!
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Times i've been here: {count}
        </Text>

        <MyButton
          title={paused ? "Restart" : "Pause"}
          onPress={() => {
            set_paused(!paused);
          }}
        />
      </View>
      <ShareExample color={color} />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { count: count + 1 })}
      />
    </View>
  );
}
