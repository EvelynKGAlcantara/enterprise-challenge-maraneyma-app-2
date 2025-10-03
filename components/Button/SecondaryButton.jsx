import { StyleSheet, Text, Pressable, View } from "react-native";

export const SecondaryButton = ({ text, onPress }) => {
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
    borderColor: "#EB2F96",
  },

  primaryText: {
    color: "#EB2F96",
    fontSize: 16,
  },

  buttons: {
    marginTop: 10,
  },
});
