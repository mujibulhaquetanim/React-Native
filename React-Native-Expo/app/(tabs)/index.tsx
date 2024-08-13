import { HelloWave } from "@/components/HelloWave";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center text-lg font-bold">
      <HelloWave />
      <Text className="text-red-500 font-bold">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
