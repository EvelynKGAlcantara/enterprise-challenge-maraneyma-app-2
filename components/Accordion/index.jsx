import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);

    Animated.timing(rotateAnim, {
      toValue: expanded ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={toggleExpand}>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <AntDesign name="right" size={18} color="#000000" />
        </Animated.View>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 10,
    backgroundColor: "#d9d9d945",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    fontFamily: "Roboto",
  },
  content: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  contentText: {
    fontSize: 16,
    color: "#7B7B7B",
    lineHeight: 20,
    fontFamily: "SofiaSans_400Regular",
  },
});
