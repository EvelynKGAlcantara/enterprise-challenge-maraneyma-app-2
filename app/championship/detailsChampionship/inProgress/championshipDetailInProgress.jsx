import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { MatchCard } from "../../../../components/Cards/GameCard";
import { TeamCardInProgress } from "../../../../components/Cards/TeamCardInProgress";
import { Filter } from "../../../../components/Filters/Filter";

import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ParticipantCardPoints } from "../../../../components/Cards/ParticipantCardPoints";
import { TeamCardRanking } from "../../../../components/Cards/TeamCardRanking";

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
      score2: 5,
      status: "finished",
      date: "02/10/2025",
      hour: "15:00",
      winner: "Equipe 2",
    },
    {
      id: 2,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 8,
      score2: 2,
      status: "finished",
      date: "02/10/2025",
      hour: "15:00",
      winner: "Equipe 1",
    },
  ],
  faseB: [
    {
      id: 3,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 0,
      score2: 0,
      status: "waiting",
    },
    {
      id: 4,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 0,
      score2: 0,
      status: "waiting",
    },
  ],
  final: [
    {
      id: 5,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 0,
      score2: 0,
      status: "waiting",
    },
    {
      id: 6,
      team1: "Equipe 1",
      team2: "Equipe 2",
      score1: 0,
      score2: 0,
      status: "waiting",
    },
  ],
};
const mockTeams = [
  {
    id: "1",
    name: "Time Sala 1",
    description: "Primeiro Colegial (Ensino Médio)",
    grade: "8º",
  },
  {
    id: "2",
    name: "Time Sala 2",
    description: "Segundo Colegial (Ensino Médio)",
    grade: "7º",
  },
  {
    id: "3",
    name: "Time Sala 3",
    description: "Terceiro Colegial (Ensino Médio)",
    grade: "6º",
  },
];

export const mockParticipants = [
  {
    id: 1,
    name: "Maria Silva",
    avatar: null,
    initialPoints: 5,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
  },
  {
    id: 2,
    name: "João Santos",
    avatar: null,
    initialPoints: 8,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
  },
  {
    id: 3,
    name: "Ana Costa",
    avatar: null,
    initialPoints: 12,
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    avatar: null,
    initialPoints: 3,
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
  },
  {
    id: 5,
    name: "Carla Mendes",
    avatar: null,
    initialPoints: 15,
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    avatar: null,
    initialPoints: 7,
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
  },
  {
    id: 7,
    name: "Juliana Rocha",
    avatar: null,
    initialPoints: 10,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
  },
  {
    id: 8,
    name: "Rafael Alves",
    avatar: null,
    initialPoints: 6,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
  },
];

export default function ChampionshipDetails() {
  const [tab, setTab] = useState("championship");
  const router = useRouter();
  const handleTeamDetail = () => {
    router.push("./teamDetails");
  };
  const handleGameDetail = () => {
    router.push("./championshioDetails/gameDetails");
  };
  const handleStartGame = () => {
    router.push("./championshioDetails/gameDetails");
  };
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
          </View>
        ))}

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

        {tab === "championship" && (
          <>
            {mockChampionships.map((championship) => (
              <View key={championship.id}>
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
                          (championship.finishedGames /
                            championship.totalGames) *
                          100
                        }%`,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}

            <View style={styles.filter}>
              <Filter
                FirstItem={"Jogos futuros"}
                SecondItem={"Jogos Passados"}
              />
            </View>

            {/* Fase A */}
            <Text style={styles.phaseTitle}>Fase A</Text>
            {mockMatches.faseA.map((match) => (
              <MatchCard
                key={match.id}
                score1={match.score1}
                score2={match.score2}
                team1={match.team1}
                team2={match.team2}
                status={match.status}
                id={match.id}
                date={match.date}
                hour={match.hour}
                winner={match.winner}
                handleDetails={handleGameDetail}
                handleStart={handleStartGame}
              />
            ))}

            {/* Fase B */}
            <Text style={styles.phaseTitle}>Fase B</Text>
            {mockMatches.faseB.map((match) => (
              <MatchCard
                key={match.id}
                score1={match.score1}
                score2={match.score2}
                team1={match.team1}
                team2={match.team2}
                status={match.status}
                id={match.id}
                date={match.date}
                hour={match.hour}
                winner={match.winner}
              />
            ))}

            <Text style={styles.phaseTitle}>Final</Text>
            {mockMatches.final.map((match) => (
              <MatchCard
                key={match.id}
                score1={match.score1}
                score2={match.score2}
                team1={match.team1}
                team2={match.team2}
                status={match.status}
                id={match.id}
                date={match.date}
                hour={match.hour}
                winner={match.winner}
              />
            ))}
          </>
        )}
        {tab === "team" && (
          <>
            {mockTeams.map((team) => (
              <View key={team.id}>
                <TeamCardInProgress
                  onPressDetails={handleTeamDetail}
                  name={team.name}
                  description={team.description}
                />
              </View>
            ))}
          </>
        )}

        {tab === "ranking" && (
          <>
            {mockChampionships.map((championship) => (
              <View key={championship.id}>
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
                          (championship.finishedGames /
                            championship.totalGames) *
                          100
                        }%`,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}

            <Text style={styles.phaseTitle}>Resultado Parcial</Text>
            <View>
              {mockTeams.map((team) => (
                <TeamCardRanking
                  key={team.id}
                  className={team.name}
                  subtitle={team.description}
                  grade={team.grade}
                />
              ))}
            </View>
            <Text style={styles.phaseTitle}>Pontuação por jogadores</Text>
            <View>
              {mockParticipants.map((participant) => (
                <ParticipantCardPoints
                  avatar={participant.avatar}
                  editable={false}
                  initialPoints={participant.initialPoints}
                  name={participant.name}
                  key={participant.id}
                  description={true}
                  gender={participant.gender}
                  schoolYear={participant.schoolYear}
                />
              ))}
            </View>
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
  progressText: { fontSize: 14, marginBottom: 8, color: "#7B7B7B" },
  progressBar: {
    width: "100%",
    height: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 100,
    marginBottom: 20,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#EB2F96",
    borderRadius: 100,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#F0F0F0",
    gap: 5,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#f8f8f8",
  },
  tabText: {
    fontSize: 14,
    color: "#00000085",
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#EB2F96",
    backgroundColor: "#ffffff",
  },
  activeText: {
    color: "#EB2F96",
    fontWeight: "500",
  },
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
  filter: {
    marginHorizontal: -16,
  },
});
