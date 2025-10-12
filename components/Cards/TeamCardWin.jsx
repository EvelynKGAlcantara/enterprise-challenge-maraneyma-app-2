import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TeamCardWin({ className, subtitle, variant = "first" }) {
  const renderRightIcon = () => {
    if (variant === "first") {
      return (
        <View style={styles.trophyCircle}>
          <Image
            source={require("../../assets/images/card-trophy.png")}
            style={styles.trophy}
            resizeMode="contain"
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
      {/* Faixa do Campeão */}
      {variant === "first" && (
        <View style={styles.header}>
          <Text style={styles.headerText}>CAMPEÃO DO CAMPEONATO</Text>
        </View>
      )}

      {/* Conteúdo interno */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Feather name="flag" size={24} color="#6B6B6B" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.className}>{className}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={styles.gradeContainer}>{renderRightIcon()}</View>
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
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 10,
    overflow: "hidden", // garante que a faixa respeite borda arredondada
  },
  cardWinner: {
    borderColor: "#EB2F96",
    borderWidth: 2,
  },
  cardSecond: {
    borderColor: "#EB2F96",
    borderWidth: 1.5,
  },
  cardThird: {
    borderColor: "#EB2F96",
    borderWidth: 1.5,
  },

  header: {
    backgroundColor: "#E91E63",
    paddingVertical: 6,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
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

  trophyCircle: {
    borderRadius: 50,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  trophy: {
    width: 60,
    height: 60,
  },
});
