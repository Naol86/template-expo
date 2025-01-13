import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="items-center justify-center grow">
      <Text className="text-3xl text-red-600">Index</Text>
      <Link href="(tabs)/home">go to tabs</Link>
      <Link href="modal">open modal</Link>
    </View>
  );
}
