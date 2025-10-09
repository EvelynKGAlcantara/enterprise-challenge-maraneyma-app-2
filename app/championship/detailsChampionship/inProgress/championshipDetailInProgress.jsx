import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useState } from "react";

import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const mockChampionships = [
  {
    id: 1,
    status: "inProgress",
    category: "Campeonato de futebol / Feminino",
    title: "Jogos do Segundo Ano",
    schoolYear: "Segundo Colegial (Ensino Médio)",
    participatingTeams: "2",
    totalGames: 15,
    finishedGames: 5,
  },
];

const mockMatches = {
  faseA: [
    {
      id: 1,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 3,
      score2: 2,
      status: "finished",
      date: "02/10/2025",
      hour: "15:00",
      winner: "Equipe 1",
    },
  ],
  faseB: [
    {
      id: 2,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 0,
      score2: 0,
      status: "waiting",
    },
  ],
  final: [
    {
      id: 3,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 0,
      score2: 0,
      status: "waiting",
    },
  ],
};

// Componente para card de partida
const MatchCard = ({ match }) => {
  const isFinished = match.status === "finished";
  const isWaiting = match.status === "waiting";

  return (
    <View
      style={[
        styles.matchCard,
        isFinished && { borderColor: "#FFEB3B" },
        isWaiting && { borderColor: "#E0E0E0" },
      ]}
    >
      <Text style={styles.matchTitle}>Jogo {match.id}</Text>

      <View style={styles.teamsRow}>
        <Text style={styles.team}>{match.team1}</Text>
        <Text style={styles.vs}>X</Text>
        <Text style={styles.team}>{match.team2}</Text>
      </View>

      <View style={styles.scoreRow}>
        <Text style={styles.score}>{match.score1}</Text>
        <Text style={styles.score}>{match.score2}</Text>
      </View>

      {isFinished && (
        <>
          <Text style={styles.winner}>Vencedor: {match.winner}</Text>
          <Text style={styles.date}>
            Finalizado em {match.date} às {match.hour}
          </Text>
          <Pressable style={styles.detailsButton}>
            <Text style={styles.detailsText}>Detalhes</Text>
          </Pressable>
        </>
      )}

      {isWaiting && <Text style={styles.waitingText}>Aguardando início</Text>}
    </View>
  );
};

export default function ChampionshipDetails() {
  const [tab, setTab] = useState("championship");
  const router = useRouter();

  return (
    <View style={styles.safeArea}>
      <AntDesign
        name="arrow-left"
        size={40}
        color="#EB2F96"
        onPress={router.back}
        style={styles.backButton}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {mockChampionships.map((championship) => (
          <View key={championship.id}>
            <Text style={styles.category}>{championship.category}</Text>
            <Text style={styles.title}>{championship.title}</Text>
            <Text style={styles.subtitle}>
              <Text style={styles.subtitleBold}>ANO ESCOLAR: </Text>
              {championship.schoolYear}
            </Text>
            <Text style={styles.subtitleBold}>
              {championship.participatingTeams} <Text>equipes cadastradas</Text>
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>EM ANDAMENTO</Text>
            </View>

            <Text style={styles.progressText}>
              Serão {championship.totalGames} jogos no total (
              {championship.finishedGames} já ocorreram)
            </Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${
                      (championship.finishedGames / championship.totalGames) *
                      100
                    }%`,
                  },
                ]}
              />
            </View>
          </View>
        ))}

        {/* Tabs */}
        <View style={styles.tabs}>
          <Pressable
            style={[styles.tab, tab === "championship" && styles.activeTab]}
            onPress={() => setTab("championship")}
          >
            <Text
              style={
                tab === "championship" ? styles.activeText : styles.tabText
              }
            >
              Campeonato
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, tab === "team" && styles.activeTab]}
            onPress={() => setTab("team")}
          >
            <Text style={tab === "team" ? styles.activeText : styles.tabText}>
              Equipes
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, tab === "ranking" && styles.activeTab]}
            onPress={() => setTab("ranking")}
          >
            <Text
              style={tab === "ranking" ? styles.activeText : styles.tabText}
            >
              Classificação
            </Text>
          </Pressable>
        </View>

        {/* Conteúdo Campeonato */}
        {tab === "championship" && (
          <>
            {/* Fase A */}
            <Text style={styles.phaseTitle}>Fase A</Text>
            {mockMatches.faseA.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}

            {/* Fase B */}
            <Text style={styles.phaseTitle}>Fase B</Text>
            {mockMatches.faseB.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}

            {/* Final */}
            <Text style={styles.phaseTitle}>Final</Text>
            {mockMatches.final.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: { position: "absolute", top: 50, left: 16, zIndex: 10 },
  category: { fontSize: 14, fontWeight: "600", marginTop: 40, color: "#000" },
  title: {
    fontSize: 24,
    marginTop: 4,
    color: "#000",
    fontFamily: "SofiaSans_800ExtraBold",
  },
  subtitle: { fontSize: 12, color: "#555", marginTop: 4 },
  subtitleBold: { fontSize: 12, color: "#555", fontWeight: "700" },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor: "#FFF176",
  },
  badgeText: { fontSize: 12, fontWeight: "700", color: "#000" },
  progressText: { fontSize: 12, marginBottom: 8 },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 20,
  },
  progressFill: { height: "100%", backgroundColor: "#EB2F96", borderRadius: 4 },
  tabs: { flexDirection: "row", justifyContent: "center", marginVertical: 16 },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#f8f8f8",
  },
  tabText: { fontSize: 14, color: "#00000085" },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#EB2F96",
    backgroundColor: "#ffffff",
  },
  activeText: { color: "#EB2F96", fontWeight: "500" },
  phaseTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
  },

  // Match Card
  matchCard: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  matchTitle: { fontSize: 14, fontWeight: "700", marginBottom: 8 },
  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  team: { fontSize: 14, color: "#000", flex: 1, textAlign: "center" },
  vs: { fontSize: 14, fontWeight: "700", color: "#000" },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  score: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    flex: 1,
    textAlign: "center",
  },
  waitingText: {
    textAlign: "center",
    fontSize: 14,
    color: "#999",
    marginTop: 6,
  },
  winner: { fontSize: 12, fontWeight: "700", color: "#388E3C", marginTop: 4 },
  date: { fontSize: 11, color: "#555", marginTop: 4 },
  detailsButton: {
    marginTop: 6,
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#EB2F96",
  },
  detailsText: { fontSize: 12, color: "#EB2F96" },
});
