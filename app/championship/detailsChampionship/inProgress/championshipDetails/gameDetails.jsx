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
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
    points: 0,
  },
  {
    id: "team1-2",
    name: "João Santos",
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team1-3",
    name: "Ana Costa",
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
    points: 0,
  },
  {
    id: "team1-4",
    name: "Pedro Oliveira",
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
    points: 0,
  },
  {
    id: "team1-5",
    name: "Carla Mendes",
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
    points: 0,
  },
  {
    id: "team1-6",
    name: "Lucas Ferreira",
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team1-7",
    name: "Juliana Rocha",
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
    points: 0,
  },
  {
    id: "team1-8",
    name: "Rafael Alves",
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
    points: 0,
  },
];

export const mockTeam2 = [
  {
    id: "team2-1",
    name: "Beatriz Nogueira",
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
    points: 0,
  },
  {
    id: "team2-2",
    name: "Gabriel Martins",
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team2-3",
    name: "Camila Pires",
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
    points: 0,
  },
  {
    id: "team2-4",
    name: "Felipe Barbosa",
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
    points: 0,
  },
  {
    id: "team2-5",
    name: "Mariana Duarte",
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
    points: 0,
  },
  {
    id: "team2-6",
    name: "Thiago Ramos",
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
    points: 0,
  },
  {
    id: "team2-7",
    name: "Larissa Carvalho",
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
    points: 0,
  },
  {
    id: "team2-8",
    name: "Mateus Lima",
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
    points: 0,
  },
];

export default function GameDetails() {
  const [team1, setTeam1] = useState(mockTeam1);
  const [team2, setTeam2] = useState(mockTeam2);
  const [tab, setTab] = useState("team1");
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();
  const { selectedMatch, updateMatchStatus } = useStudents();

  const updatePoints = (team, setTeam, id, newPoints) => {
    setTeam((prev) =>
      prev.map((p) => (p.id === id ? { ...p, points: newPoints } : p))
    );
  };

  const team1Score =
    selectedMatch?.status === "finished"
      ? selectedMatch?.score1
      : team1.reduce((sum, p) => sum + p.points, 0);

  const team2Score =
    selectedMatch?.status === "finished"
      ? selectedMatch?.score2
      : team2.reduce((sum, p) => sum + p.points, 0);

  const handleFinalizedGame = () => setModalVisible(true);

  const handleConfirm = () => {
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR");
    const hour = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    let winner = "Empate";
    if (team1Score > team2Score) winner = selectedMatch?.team1;
    else if (team2Score > team1Score) winner = selectedMatch?.team2;

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
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderBack title="Detalhe do Jogo" />
        <View style={styles.containerHeader}>
          <Text style={styles.category}>Campeonato de futebol / Feminino</Text>
          <Text style={styles.title}>Jogos do Segundo Ano</Text>
          <Text style={styles.subtitle}>
            <Text style={styles.subtitleBold}>ANO ESCOLAR: </Text>Segundo
            Colegial (Ensino Médio)
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

              {selectedMatch?.status === "finished" &&
                team1Score > team2Score && (
                  <View style={styles.winnerTag}>
                    <Text style={styles.winnerTagText}>VENCEDOR</Text>
                  </View>
                )}
            </View>

            <Text style={styles.x}>X</Text>

            <View style={styles.teamContainer}>
              <Text style={styles.team}>Equipe 2</Text>
              <Text style={styles.score}>{team2Score}</Text>
              {selectedMatch?.status === "finished" &&
                team2Score > team1Score && (
                  <View style={styles.winnerTag}>
                    <Text style={styles.winnerTagText}>VENCEDOR</Text>
                  </View>
                )}
            </View>
          </View>
        </View>

        <Text style={styles.textBody}>
          Indique a quantidade de pontos de cada jogador que o placar é
          atualizado automaticamente
        </Text>

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
                editable={selectedMatch?.status !== "finished"}
                name={participant.name}
                points={participant.points}
                initialPoints={participant.points}
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
                editable={selectedMatch?.status !== "finished"}
                name={participant.name}
                points={participant.points}
                initialPoints={participant.points}
                gender={participant.gender}
                schoolYear={participant.schoolYear}
                onPointsChange={(newPoints) =>
                  updatePoints(team2, setTeam2, participant.id, newPoints)
                }
              />
            ))}
        </ScrollView>
      </View>

      {selectedMatch?.status === "waiting" && (
        <View style={styles.footerButton}>
          <Button
            text="Finalizar Jogo"
            onPress={handleFinalizedGame}
            style={{ width: "100%" }}
          />
        </View>
      )}

      {/* Modal de confirmação */}
      <ConfirmModal
        visible={modalVisible}
        title="Finalizar jogo"
        description="Tem certeza que deseja"
        descriptionBold=" finalizar "
        descriptionContinue="esta partida?"
        textButton="Retornar a tela anterior"
        textSecondatyButton="Sim, finalizar partida"
        onConfirm={handleConfirm}
        onClose={() => setModalVisible(false)}
        navigate={() => setModalVisible(false)}
        insertComponent
        component={
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Jogo 1</Text>
            </View>
            <View style={styles.teamsRow}>
              <View style={styles.teamContainer}>
                <Text style={styles.team}>Equipe 1</Text>
                <Text style={styles.score}>{team1Score}</Text>
                {team1Score > team2Score && (
                  <View style={styles.winnerTag}>
                    <Text style={styles.winnerTagText}>VENCEDOR</Text>
                  </View>
                )}
              </View>

              <Text style={styles.x}>X</Text>

              <View style={styles.teamContainer}>
                <Text style={styles.team}>Equipe 2</Text>
                <Text style={styles.score}>{team2Score}</Text>
                {team2Score > team1Score && (
                  <View style={styles.winnerTag}>
                    <Text style={styles.winnerTagText}>VENCEDOR</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  containerHeader: {
    marginTop: 10,
    marginBottom: 14,
  },
  category: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
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
    fontFamily: "SofiaSans_800ExtraBold",
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
    borderColor: "#F0F0F0",
    marginBottom: 16,
    width: "100%",
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
  textBody: {
    marginVertical: 14,
    fontSize: 14,
    color: "#7B7B7B",
    fontFamily: "SofiaSans_400Regular",
  },
  scroll: {
    // paddingBottom: 80,
  },
  footerButton: {
    position: "absolute",
    paddingHorizontal: 24,
    bottom: 12,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
});
