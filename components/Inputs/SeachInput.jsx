import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SearchInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || "Filtre os resultados"}
        placeholderTextColor="#aaa"
      />
      <View style={styles.divider}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  icon: {
    marginLeft: 8,
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: "#D9D9D9",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
  },
});
