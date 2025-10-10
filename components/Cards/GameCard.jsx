import { View, Text, StyleSheet, Pressable } from "react-native";

export const MatchCard = ({
  score1,
  score2,
  team1,
  team2,
  status,
  id,
  date,
  hour,
  winner,
  handleDetails,
  handleStart,
}) => {
  const isFinished = status === "finished";
  const isWaiting = status === "waiting";

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.header,
          isFinished && { backgroundColor: "#FFF59D" },
          isWaiting && { backgroundColor: "#91D5FF" },
        ]}
      >
        <Text style={styles.headerText}>Jogo {id}</Text>
      </View>

      <View style={styles.teamsRow}>
        <View style={styles.teamContainer}>
          <Text style={styles.team}>{team1}</Text>
          <Text style={styles.score}>{score1}</Text>
          {isFinished && winner === team1 && (
            <View style={styles.winnerTag}>
              <Text style={styles.winnerTagText}>VENCEDOR</Text>
            </View>
          )}
        </View>

        <Text style={styles.x}>X</Text>

        <View style={styles.teamContainer}>
          <Text style={styles.team}>{team2}</Text>
          <Text style={styles.score}>{score2}</Text>
          {isFinished && winner === team2 && (
            <View style={styles.winnerTag}>
              <Text style={styles.winnerTagText}>VENCEDOR</Text>
            </View>
          )}
        </View>
      </View>

      {isFinished && (
        <View style={styles.footer}>
          <Text style={styles.date}>
            Finalizado em: {"\n"} {date} às {hour}
          </Text>
          <Pressable style={styles.button} onPress={handleDetails}>
            <Text style={styles.buttonText}>Detalhes</Text>
          </Pressable>
        </View>
      )}

      {isWaiting && (
        <View style={styles.footer}>
          <Pressable style={styles.buttonWaiting} onPress={handleStart}>
            <Text style={styles.buttonText}>Aguardando Início</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 6,
    alignItems: "center",
  },
  headerText: {
    fontSize: 13,
    fontWeight: "700",
  },
  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  teamContainer: {
    flex: 1,
    alignItems: "center",
  },
  team: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  score: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },
  x: {
    fontSize: 50,
    fontWeight: "100",
    color: "#BEBEBE",
    marginHorizontal: 8,
  },
  winnerTag: {
    backgroundColor: "#FFEB3B",
    borderRadius: 4,
    marginTop: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  winnerTagText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#7B7B7B",
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: "#EB2F96",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  detailsText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#EB2F96",
  },
  footerWaiting: {
    borderWidth: 1,
    borderColor: "#dadadaff",
  },
  waitingText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#EB2F96",
  },
  button: {
    borderWidth: 1,
    borderColor: "#EB2F96",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  buttonWaiting: {
    borderWidth: 1,
    borderColor: "#EB2F96",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "center",
    width: "100%",
  },
  buttonText: {
    color: "#EB2F96",
    fontWeight: "400",
    textAlign: "center",
  },
});
