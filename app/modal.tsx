import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

export default function Modal() {
  return (
    <Animated.View
      // entering={FadeIn}
      className="items-center justify-end bg-[rgba(0,0,0,0.23)] grow"
    >
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        // entering={SlideInDown}
        className="pt-5 px-2 w-[100%] h-[80%] bg-white  rounded-t-3xl"
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Modal Screen
        </Text>
        <Link href="/">
          <Text>← Go back</Text>
        </Link>
      </Animated.View>
    </Animated.View>
  );
}
