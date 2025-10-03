import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const RadioButton = ({ options, selected, onSelect }) => {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioContainer}
          onPress={() => onSelect(option.value)}
        >
          <View style={styles.outerCircle}>
            {selected === option.value && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#EB2F96",
    borderColor: "#EB2F96",
  },
  label: {
    marginLeft: 10,
    fontSize: 14,
    color: "#000000",
  },
});
