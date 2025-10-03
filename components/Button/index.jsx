import { StyleSheet, Text, Pressable, View } from "react-native";

export const Button = ({ text, onPress }) => {
  return (
    <View style={styles.buttons}>
      <Pressable style={styles.primaryButton} onPress={onPress}>
        <Text style={styles.primaryText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#EB2F96",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
  },

  primaryText: {
    color: "#fff",
    fontSize: 16,
  },

  buttons: {
    marginTop: 10,
    marginBottom: 16,
  },
});
