import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TeamCard({
  name,
  description,
  onPressData,
  onPressMembers,
  onPressDelete,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Feather name="flag" size={28} color="#2E2E2E" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      <View style={styles.buttonsRow}>
        <Pressable style={styles.button} onPress={onPressData}>
          <Text style={styles.buttonText}>Dados</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={onPressMembers}>
          <Text style={styles.buttonText}>Membros</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={onPressDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </Pressable>
      </View>
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
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    width: 50,
    height: 50,
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
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  button: {
    borderWidth: 1,
    borderColor: "#FF1493",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  buttonText: {
    color: "#FF1493",
    fontWeight: "500",
  },
});
