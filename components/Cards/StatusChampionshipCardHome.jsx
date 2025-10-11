import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const StatusChampionshipCardHome = ({
  status, // "inProgress" | "waiting" | "finished"
  category,
  title,
  schoolYear,
  participatingTeams,
  totalGames,
  finishedGames,
  onPress,
}) => {
  const renderStatus = () => {
    switch (status) {
      case "inProgress":
        return (
          <View style={[styles.badge, { backgroundColor: "#FFF176" }]}>
            <Text style={styles.badgeTextDark}>EM ANDAMENTO</Text>
          </View>
        );
      case "waiting":
        return (
          <View style={[styles.badge, { backgroundColor: "#E0E0E0" }]}>
            <Text style={styles.badgeTextDark}>AGUARDANDO INÍCIO</Text>
          </View>
        );
      case "finished":
        return (
          <View style={[styles.badge, { backgroundColor: "#BBDEFB" }]}>
            <Text style={styles.badgeTextDark}>FINALIZADO</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.card}>
      {renderStatus()}

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.category} numberOfLines={1} ellipsizeMode="tail">
          {category}
        </Text>

        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.info} numberOfLines={1} ellipsizeMode="tail">
          Ano escolar: {schoolYear}
        </Text>
        <Text style={styles.info} numberOfLines={1} ellipsizeMode="tail">
          {participatingTeams} equipes participantes
        </Text>
        {totalGames > 0 ? (
          <Text style={styles.info} numberOfLines={1} ellipsizeMode="tail">
            Serão {totalGames} jogos no total ({finishedGames} já ocorreram)
          </Text>
        ) : (
          <Text style={styles.info} numberOfLines={1} ellipsizeMode="tail">
            Falta cadastrar participantes
          </Text>
        )}
      </View>

      <Pressable onPress={onPress} style={styles.arrow} hitSlop={10}>
        <Ionicons name="chevron-forward" size={20} color="#EB2F96" />
      </Pressable>

      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 250,
    backgroundColor: "#f9f9f9ff",
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 12,
    marginBottom: 16,
    position: "relative",
    fontFamily: "SofiaSans_400Regular",
    overflow: "hidden",
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  badgeTextDark: {
    fontSize: 16,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#000",
  },
  category: {
    fontSize: 14,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#000",
    marginBottom: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#000",
    marginRight: 20,
  },
  info: {
    fontSize: 14,
    color: "#7B7B7B",
    marginBottom: 5,
    paddingRight: 20,
    fontFamily: "SofiaSans_400Regular",
  },
  arrow: {
    position: "absolute",
    right: 16,
    top: "60%",
    transform: [{ translateY: -10 }],
  },
  button: {
    borderWidth: 1,
    borderColor: "#EB2F96",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#EB2F96",
    fontWeight: "400",
  },
});
