import { StyleSheet, Text, Pressable, View } from "react-native";

export const TertiaryButton = ({ text, onPress }) => {
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
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },

  primaryText: {
    color: "#000000",
    fontSize: 16,
  },

  buttons: {
    marginTop: 10,
    width: "100%",
  },
});
