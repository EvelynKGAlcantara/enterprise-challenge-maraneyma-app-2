import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const PhotoInput = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image source={require("../../assets/images/profile-circle.png")} />
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Tirar foto</Text>
      </TouchableOpacity>

      <Text style={styles.optional}>(opcional)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 54,

    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e91e63",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "#e91e63",
    fontSize: 14,
    fontWeight: "500",
  },
  optional: {
    marginLeft: 8,
    fontSize: 14,
    color: "#9e9e9e",
    fontFamily: "SofiaSans_400Regular",
  },
});
