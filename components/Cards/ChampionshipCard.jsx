import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const CardSelect = ({ title, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <AntDesign name="right" size={12} color="#EB2F96" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "SofiaSans_600SemiBold",
    color: "#333",
  },
  subtitle: {
    fontSize: 12,
    color: "#999",
    fontFamily: "SofiaSans_400Regular",
  },
});
