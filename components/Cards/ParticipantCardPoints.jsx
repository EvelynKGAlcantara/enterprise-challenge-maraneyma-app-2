import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export const ParticipantCardPoints = ({
  name,
  points,
  initialPoints,
  editable,
  avatar,
  description,
  gender,
  schoolYear,
  onPointsChange,
  pointsParticipant,
}) => {
  const [editablePoints] = useState(editable ?? true);

  const increment = () => {
    if (editablePoints) onPointsChange(points + 1);
  };

  const decrement = () => {
    if (editablePoints && points > 0) onPointsChange(points - 1);
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          avatar
            ? { uri: avatar }
            : require("../../assets/images/profile-circle.png")
        }
        style={styles.avatar}
      />

      <Text style={styles.name}>{name}</Text>

      {editablePoints ? (
        <View style={styles.counterContainer}>
          <Pressable style={styles.button} onPress={increment}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>

          <Text style={styles.points}>
            {points?.toString()?.padStart(2, "0")}
          </Text>

          <Pressable style={styles.button} onPress={decrement}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.disabledContainer}>
          <Text style={styles.disabledPoints}>
            {pointsParticipant ? (
              <Text> {points?.toString()?.padStart(2, "0")}</Text>
            ) : (
              <Text>{initialPoints}</Text>
            )}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBottomColor: "#D3D3D3",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontFamily: "SofiaSans_400Regular",
    color: "#000",
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: "SofiaSans_400Regular",
    color: "#9CA3AF",
    marginTop: 2,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 4,
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderColor: "#D1D5DB",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
  },
  points: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    minWidth: 40,
    textAlign: "center",
  },
  disabledContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledPoints: {
    fontSize: 16,
    fontWeight: "400",
    color: "#9CA3AF",
  },
  disabledContainerWithDescription: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
    minWidth: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledPointsLarge: {
    fontSize: 24,
    fontFamily: "SofiaSans_400Regular",
    color: "#D1D5DB",
  },
});
