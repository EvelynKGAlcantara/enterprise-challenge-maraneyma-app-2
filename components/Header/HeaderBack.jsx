import { View, Text, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

export function HeaderBack({ title, onPress }) {
  const router = useRouter();
  const handlePress = onPress || router.back;

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <AntDesign
          name="arrow-left"
          size={40}
          color="#EB2F96"
          style={styles.backButton}
        />
      </Pressable>

      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 50,
    paddingBottom: 12,
  },

  headerTitle: {
    fontSize: 18,
    color: "#000000",

    fontFamily: "SofiaSans_800ExtraBold",
  },
});
