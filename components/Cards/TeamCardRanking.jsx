import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TeamCardRanking({ className, subtitle, grade }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Feather name="flag" size={24} color="#6B6B6B" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.className}>{className}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.gradeContainer}>
        <Text style={styles.grade}>{grade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 14,
  },
  className: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    color: "#ABABAB",
  },
  gradeContainer: {
    marginLeft: "auto",
  },
  grade: {
    fontSize: 28,
    fontWeight: "300",
    color: "#2E2E2E",
    letterSpacing: -0.5,
  },
});
