import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TeamCardWin({ className, subtitle, variant = "first" }) {
  const renderRightIcon = () => {
    if (variant === "first") {
      return (
        <View style={styles.trophyContainer}>
          <Image
            source={require("../../assets/images/card-trophy.png")}
            width={10}
          />
        </View>
      );
    }

    if (variant === "second") {
      return (
        <View>
          <Image source={require("../../assets/images/card-flat-second.png")} />
        </View>
      );
    }
    if (variant === "third") {
      return (
        <View>
          <Image source={require("../../assets/images/card-flat-third.png")} />
        </View>
      );
    }

    return null;
  };

  return (
    <View
      style={[
        styles.card,
        variant === "first" && styles.cardWinner,
        variant === "second" && styles.cardSecond,
        variant === "third" && styles.cardThird,
      ]}
    >
      {variant === "first" ? <View></View> : null}
      <View style={styles.iconContainer}>
        <Feather name="flag" size={24} color="#6B6B6B" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.className}>{className}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.gradeContainer}>{renderRightIcon()}</View>
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
  cardWinner: {
    borderColor: "#EB2F96",
    borderWidth: 2,
  },

  tabCardWinner: {
    borderColor: "#EB2F96",
    borderTopWidth: 20,
  },
  cardSecond: {
    borderColor: "#EB2F96",
    borderWidth: 1.5,
  },
  cardThird: {
    borderColor: "#EB2F96",
    borderWidth: 1.5,
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
    alignItems: "center",
    justifyContent: "center",
  },
  trophyContainer: {
    backgroundColor: "#E91E63",
    borderRadius: 50,
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  medalContainer: {
    backgroundColor: "#E91E63",
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 40,
    height: 40,
  },
});
