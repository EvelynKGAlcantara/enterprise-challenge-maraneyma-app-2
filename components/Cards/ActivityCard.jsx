import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SportCard({ title, description, onPress, shortly }) {
  return (
    <View style={styles.card}>
      <View style={{ paddingRight: 24 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <Pressable onPress={onPress} style={styles.arrow} hitSlop={10}>
        <Ionicons name="chevron-forward" size={20} color="#EB2F96" />
      </Pressable>
      {shortly ? (
        <View style={styles.highlighted}>
          <Text style={styles.textHighlighted}>EM BREVE</Text>
        </View>
      ) : (
        <Pressable onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Ver detalhes</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#f9f9f9ff",
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 12,
    marginBottom: 16,
    position: "relative",
    fontFamily: "SofiaSans_400Regular",
  },
  title: {
    fontSize: 18,

    marginBottom: 6,
    fontFamily: "SofiaSans_800ExtraBold",
  },
  description: {
    fontSize: 14,
    color: "#7B7B7B",
    marginBottom: 10,
    paddingRight: 20,
    fontFamily: "SofiaSans_400Regular",
  },
  arrow: {
    position: "absolute",
    right: 16,
    top: "70%",
    transform: [{ translateY: -10 }],
  },
  button: {
    borderWidth: 1,
    borderColor: "#EB2F96",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#EB2F96",
    fontWeight: "400",
  },
  highlighted: {
    backgroundColor: "#FFFB8F",
    padding: 8,
    width: 90,
  },
  textHighlighted: {
    fontWeight: "800",
  },
});
