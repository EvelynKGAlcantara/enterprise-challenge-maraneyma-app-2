import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TeamCardInProgress({ name, description, onPressDetails }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Feather name="flag" size={24} color="#2E2E2E" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={onPressDetails}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    padding: 14,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  description: {
    fontSize: 13,
    color: "#9A9A9A",
    marginTop: 2,
  },
  button: {
    borderWidth: 1,
    borderColor: "#FF1493",
    borderRadius: 4,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FF1493",
    fontWeight: "500",
  },
});
