import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import { HeaderBack } from "../../../../../components/Header/HeaderBack";
import { Button } from "../../../../../components/Button/index";
import { ParticipantCardPoints } from "../../../../../components/Cards/ParticipantCardPoints";
import { ConfirmModal } from "../../../../../components/Modals/ConfirmModal";
import { useStudents } from "../../../../context/Context";

export const mockTeam1 = [
  {
    id: "team1-1",
    name: "Maria Silva",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
    points: 0,
  },
  {
    id: "team1-2",
    name: "João Santos",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team1-3",
    name: "Ana Costa",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
    points: 0,
  },
  {
    id: "team1-4",
    name: "Pedro Oliveira",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
    points: 0,
  },
  {
    id: "team1-5",
    name: "Carla Mendes",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
    points: 0,
  },
  {
    id: "team1-6",
    name: "Lucas Ferreira",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team1-7",
    name: "Juliana Rocha",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
    points: 0,
  },
  {
    id: "team1-8",
    name: "Rafael Alves",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
    points: 0,
  },
];

export const mockTeam2 = [
  {
    id: "team2-1",
    name: "Beatriz Nogueira",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
    points: 0,
  },
  {
    id: "team2-2",
    name: "Gabriel Martins",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team2-3",
    name: "Camila Pires",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
    points: 0,
  },
  {
    id: "team2-4",
    name: "Felipe Barbosa",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
    points: 0,
  },
  {
    id: "team2-5",
    name: "Mariana Duarte",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
    points: 0,
  },
  {
    id: "team2-6",
    name: "Thiago Ramos",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team2-7",
    name: "Larissa Carvalho",
    avatar: null,
    initialPoints: 0,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
    points: 0,
  },
  {
    id: "team2-8",
    name: "Mateus Lima",
    avatar: null,
    initialPoints: 0,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
    points: 0,
  },
];

export default function GameDetails() {
  const [team1, setTeam1] = useState(mockTeam1);
  const [team2, setTeam2] = useState(mockTeam2);
  const router = useRouter();
  const { selectedMatch, updateMatchStatus } = useStudents();
  const [modalVisible, setModalVisible] = useState(false);
  const [tab, setTab] = useState("team1");

  const updatePoints = (team, setTeam, id, newPoints) => {
    setTeam((prev) =>
      prev.map((p) => (p.id === id ? { ...p, points: newPoints } : p))
    );
  };

  // Soma total de cada equipe
  const team1Score =
    selectedMatch?.status === "finished"
      ? selectedMatch?.score1
      : team1.reduce((sum, p) => sum + p.points, 0);
  const team2Score =
    selectedMatch?.status === "finished"
      ? selectedMatch?.score2
      : team2.reduce((sum, p) => sum + p.points, 0);

  const handleFinalizedGame = () => {
    setModalVisible(true);
  };
  const handleConfirm = () => {
    // pega a data e hora atuais
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR"); // formato: 12/10/2025
    const hour = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }); // formato: 14:35

    // descobre o vencedor
    let winner = "Empate";
    if (team1Score > team2Score) {
      winner = selectedMatch?.team1;
    } else if (team2Score > team1Score) {
      winner = selectedMatch?.team2;
    }

    // atualiza no contexto
    updateMatchStatus(
      selectedMatch?.id,
      "finished",
      team1Score,
      team2Score,
      date,
      hour,
      winner
    );

    router.push("./sucessGameFinalized");
  };

  return (
    <View style={styles.container}>
      <HeaderBack title={"Detalhe do Jogo"} />
      <View style={styles.container}>
        <Text style={styles.category}>Campeonato de futebol / Feminino</Text>
        <Text style={styles.title}>Jogos do Segundo Ano</Text>
        <Text style={styles.subtitle}>
          <Text style={styles.subtitleBold}>ANO ESCOLAR: </Text>
          Segundo Colegial (Ensino Médio)
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Jogo 1</Text>
        </View>

        <View style={styles.teamsRow}>
          <View style={styles.teamContainer}>
            <Text style={styles.team}>Equipe 1</Text>
            <Text style={styles.score}>{team1Score}</Text>
          </View>

          <Text style={styles.x}>X</Text>

          <View style={styles.teamContainer}>
            <Text style={styles.team}>Equipe 2</Text>
            <Text style={styles.score}>{team2Score}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.textBody}>
        Indique a quantidade de pontos de cada jogador que o placar é atualizado
        automaticamente
      </Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, tab === "team1" && styles.activeTab]}
          onPress={() => setTab("team1")}
        >
          <Text style={tab === "team1" ? styles.activeText : styles.tabText}>
            Time Sala 1
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, tab === "team2" && styles.activeTab]}
          onPress={() => setTab("team2")}
        >
          <Text style={tab === "team2" ? styles.activeText : styles.tabText}>
            Time Sala 2
          </Text>
        </Pressable>
      </View>

      {/* Conteúdo das tabs */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {tab === "team1" &&
          team1.map((participant) => (
            <ParticipantCardPoints
              key={participant.id}
              avatar={participant.avatar}
              editable={true}
              initialPoints={participant.initialPoints}
              name={participant.name}
              points={participant.points}
              gender={participant.gender}
              schoolYear={participant.schoolYear}
              onPointsChange={(newPoints) =>
                updatePoints(team1, setTeam1, participant.id, newPoints)
              }
            />
          ))}
        {tab === "team2" &&
          team2.map((participant) => (
            <ParticipantCardPoints
              key={participant.id}
              avatar={participant.avatar}
              editable={true}
              initialPoints={participant.initialPoints}
              name={participant.name}
              gender={participant.gender}
              schoolYear={participant.schoolYear}
              points={participant.points}
              onPointsChange={(newPoints) =>
                updatePoints(team2, setTeam2, participant.id, newPoints)
              }
            />
          ))}
      </ScrollView>

      <View style={styles.footerButton}>
        {selectedMatch?.status === "waiting" && (
          <Button text={"Finalizar Jogo"} onPress={handleFinalizedGame} />
        )}
      </View>

      <ConfirmModal
        visible={modalVisible}
        description={"Tem certeza que deseja"}
        descriptionBold={" finalizar "}
        descriptionContinue={"esta partida?"}
        textButton={"Retornar a tela anterior"}
        textSecondaryButton={"Sim, finalizar partida"}
        title={"Finalizar jogo"}
        component={
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Jogo 12</Text>
            </View>
            <View style={styles.teamsRow}>
              <View style={styles.teamContainer}>
                <Text style={styles.team}>Equipe 1</Text>
                <Text style={styles.score}>3</Text>
              </View>
              <Text style={styles.x}>X</Text>
              <View style={styles.teamContainer}>
                <Text style={styles.team}>Equipe 2</Text>
                <Text style={styles.score}>5</Text>
                <View style={styles.winnerTag}>
                  <Text style={styles.winnerTagText}>VENCEDOR</Text>
                </View>
              </View>
            </View>
          </View>
        }
        onConfirm={handleConfirm}
        onClose={() => setModalVisible(false)}
        navigate={() => setModalVisible(false)}
        insertComponent={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
    paddingHorizontal: 24,
  },
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
    backgroundColor: "#FFF59D",
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
  tabs: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "#F0F0F0",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 40,
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
  footerButton: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  scroll: {
    paddingBottom: 120,
  },
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
  subtitle: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
  subtitleBold: {
    fontSize: 12,
    color: "#555",
    marginVertical: 4,
    fontFamily: "SofiaSans_800ExtraBold",
  },
  textBody: {
    marginVertical: 14,
    fontSize: 14,
    color: "#7B7B7B",
    fontFamily: "SofiaSans_400Regular",
  },
});
