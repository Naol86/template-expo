import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return <GestureHandlerRootView style={{ flex: 1 }}>
  <Drawer />
</GestureHandlerRootView>
}
