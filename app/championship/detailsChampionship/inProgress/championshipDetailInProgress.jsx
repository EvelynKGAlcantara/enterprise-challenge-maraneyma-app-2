import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { MatchCard } from "../../../../components/Cards/GameCard";
import { TeamCardInProgress } from "../../../../components/Cards/TeamCardInProgress";
import { Filter } from "../../../../components/Filters/Filter";

import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ParticipantCardPoints } from "../../../../components/Cards/ParticipantCardPoints";
import { TeamCardRanking } from "../../../../components/Cards/TeamCardRanking";
import { useStudents } from "../../../context/Context";
import { TeamCardWin } from "../../../../components/Cards/TeamCardWin";

const renderStatus = (status) => {
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

const mockChampionships = [
  {
    id: 1,
    status: "inProgress",
    category: "Campeonato de futebol / Feminino",
    title: "Jogos do Segundo Ano",
    schoolYear: "Segundo Colegial (Ensino Médio)",
    participatingTeams: "2",
    totalGames: 15,
    finishedGames: 0,
  },
];

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

const mockParticipants = [
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

export default function ChampionshipDetailsProgress() {
  const {
    setSelectedMatch,
    matches: mockMatches,
    finishedSelectedChampionship,
  } = useStudents();
  const [tab, setTab] = useState("championship");
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  // junta todos os jogos
  const allMatches = [
    ...mockMatches.faseA,
    ...mockMatches.faseB,
    ...mockMatches.final,
  ];
  const allFinished = allMatches.every((m) => m.status === "finished");
  const [finishDate] = useState(new Date().toLocaleDateString("pt-BR"));

  useEffect(() => {
    if (allFinished) {
      finishedSelectedChampionship();
    }
  }, [allFinished, finishedSelectedChampionship]);

  const handleTeamDetail = () => {
    router.push("./teamDetails");
  };
  const handleGameDetail = (match) => {
    setSelectedMatch(match);
    router.push("./championshipDetails/gameDetails");
  };
  const handleStartGame = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.safeArea}>
      <AntDesign
        name="arrow-left"
        size={40}
        color="#EB2F96"
        onPress={() => router.push("../../../(tabs)/championship")}
        style={styles.backButton}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {mockChampionships.map((championship) => (
          <View key={championship.id} style={styles.container}>
            <Text style={styles.category}>{championship.category}</Text>
            <Text style={styles.title}>{championship.title}</Text>
            <Text style={styles.subtitle}>
              <Text style={styles.subtitleBold}>ANO ESCOLAR: </Text>
              {championship.schoolYear}{" "}
            </Text>
            <Text style={styles.subtitleBold}>
              {championship.participatingTeams} <Text>equipes cadastradas</Text>
            </Text>

            {allFinished ? (
              <>
                <Text style={styles.subtitleFinalized}>
                  Finalizado em: {finishDate}
                </Text>
                <View style={[styles.badge, { backgroundColor: "#BAE7FF" }]}>
                  <Text style={styles.badgeTextDark}>FINALIZADO</Text>
                </View>
              </>
            ) : (
              renderStatus(championship.status)
            )}
          </View>
        ))}

        {/* abas */}
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

        {/* aba campeonato */}
        {tab === "championship" && (
          <>
            {mockChampionships.map((championship) => (
              <View key={championship.id} style={styles.container}>
                {!allFinished && (
                  <View>
                    <Text style={styles.progressText}>
                      Serão {allMatches.length} jogos no total
                      {allMatches.filter((m) => m.status === "finished")
                        .length === 0
                        ? " (0 já ocorreram)"
                        : `(${
                            allMatches.filter((m) => m.status === "finished")
                              .length
                          } já ocorreram)`}
                    </Text>
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          {
                            width: `${
                              (allMatches.filter((m) => m.status === "finished")
                                .length /
                                allMatches.length) *
                              100
                            }%`,
                          },
                        ]}
                      />
                    </View>
                  </View>
                )}
              </View>
            ))}

            <View>
              <Filter
                FirstItem={"Jogos futuros"}
                SecondItem={"Jogos Passados"}
              />
            </View>

            {/* Fase A */}
            <View style={styles.container}>
              <View style={styles.phase}>
                <Text style={styles.phaseTitle}>Fase A</Text>
                <Text style={styles.games}>2 jogos</Text>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tutorialList}
              >
                {mockMatches.faseA.map((match) => (
                  <View key={match.id} style={styles.cardWrapper}>
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
                      handleDetails={() => handleGameDetail(match)}
                      handleStart={() => handleGameDetail(match)}
                    />
                  </View>
                ))}
              </ScrollView>

              {/* Fase B */}
              <View style={styles.phase}>
                <Text style={styles.phaseTitle}>Fase B</Text>
                <Text style={styles.games}>2 jogos</Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tutorialList}
              >
                {mockMatches.faseB.map((match) => (
                  <View key={match.id} style={styles.cardWrapper}>
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
                      handleDetails={() => handleGameDetail(match)}
                      handleStart={() => handleGameDetail(match)}
                    />
                  </View>
                ))}
              </ScrollView>

              {/* Final */}
              <View style={styles.phase}>
                <Text style={styles.phaseTitle}>Final</Text>
                <Text style={styles.games}>2 jogos</Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tutorialList}
              >
                {mockMatches.final.map((match) => (
                  <View key={match.id} style={styles.cardWrapper}>
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
                      handleDetails={() => handleGameDetail(match)}
                      handleStart={() => handleGameDetail(match)}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          </>
        )}

        {/* aba team */}
        {tab === "team" && (
          <>
            {mockTeams.map((team) => (
              <View key={team.id} style={styles.container}>
                <TeamCardInProgress
                  onPressDetails={handleTeamDetail}
                  name={team.name}
                  description={team.description}
                />
              </View>
            ))}
          </>
        )}

        {/* aba ranking */}
        {tab === "ranking" && (
          <>
            {allFinished ? (
              <>
                <View style={styles.container}>
                  <Text style={styles.phaseTitle}>Classificação Final</Text>
                  <View>
                    <TeamCardWin
                      variant="first"
                      className={"Time Sala 5"}
                      subtitle={"Primeiro Colegial (Ensino Médio)"}
                    />
                    <TeamCardWin
                      variant="second"
                      className={"Time Sala 4"}
                      subtitle={"Primeiro Colegial (Ensino Médio)"}
                    />
                    <TeamCardWin
                      variant="third"
                      className={"Time Sala 2"}
                      subtitle={"Primeiro Colegial (Ensino Médio)"}
                    />
                  </View>
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
                  <View style={styles.tagFinalized}>
                    <Text style={styles.textTagFinalized}>
                      ARTILHEIRO(A) DO CAMPEONATO
                    </Text>
                  </View>
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
                </View>
              </>
            ) : (
              <>
                {mockChampionships.map((championship) => (
                  <View key={championship.id} style={styles.container}>
                    <Text style={styles.progressText}>
                      Serão {allMatches.length} jogos no total
                      {allMatches.filter((m) => m.status === "finished")
                        .length === 0
                        ? " (0 já ocorreram)"
                        : `(${
                            allMatches.filter((m) => m.status === "finished")
                              .length
                          } já ocorreram)`}
                    </Text>

                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          {
                            width: `${
                              (allMatches.filter((m) => m.status === "finished")
                                .length /
                                allMatches.length) *
                              100
                            }%`,
                          },
                        ]}
                      />
                    </View>
                  </View>
                ))}
                <View style={styles.container}>
                  <Text style={styles.phaseTitleResult}>Resultado Parcial</Text>
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
                        pointsParticipant={false}
                        initialPoints={participant.initialPoints}
                        name={participant.name}
                        key={participant.id}
                        description={true}
                        gender={participant.gender}
                        schoolYear={participant.schoolYear}
                      />
                    ))}
                  </View>
                </View>
              </>
            )}
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
    paddingTop: 60,
  },
  container: {
    paddingHorizontal: 24,
  },
  phase: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: { position: "absolute", top: 50, left: 16, zIndex: 10 },
  category: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 40,
    color: "#000",
  },
  tutorialList: {
    paddingLeft: 4,
    paddingRight: 16,
  },
  cardWrapper: {
    marginRight: 12,
    width: 290,
  },
  title: {
    fontSize: 26,
    marginVertical: 4,
    color: "#000",
    fontFamily: "SofiaSans_800ExtraBold",
  },
  games: {
    fontSize: 16,
    color: "#000",
    fontFamily: "SofiaSans_400Regular",
  },
  subtitle: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
  subtitleFinalized: {
    fontSize: 12,
    color: "#555",
  },
  subtitleBold: {
    fontSize: 12,
    color: "#555",
    marginVertical: 4,
    fontFamily: "SofiaSans_800ExtraBold",
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 24,
  },
  badgeTextDark: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
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
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
  },
  phaseTitleResult: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 2,
    marginBottom: 10,
    color: "#000",
  },
  tag: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#EB2F96",
    marginVertical: 8,
    alignItems: "center",
  },
  textTag: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  tagFinalized: {
    backgroundColor: "#EB2F96",
    padding: 8,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  textTagFinalized: {
    color: "#FFFFFF",
    fontSize: 12,
    alignSelf: "center",
    fontWeight: "700",
  },
});
