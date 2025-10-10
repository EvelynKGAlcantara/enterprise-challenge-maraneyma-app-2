import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

import { HeaderBack } from "../../../../../components/Header/HeaderBack";
import { Button } from "../../../../../components/Button/index";
import { ParticipantCardPoints } from "../../../../../components/Cards/ParticipantCardPoints";
import { ConfirmModal } from "../../../../../components/Modals/ConfirmModal";

export const mockTeam1 = [
  {
    id: 1,
    name: "Maria Silva",
    avatar: null,
    initialPoints: 5,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
    points: 2,
  },
  {
    id: 2,
    name: "João Santos",
    avatar: null,
    initialPoints: 8,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
    points: 1,
  },
  {
    id: 3,
    name: "Ana Costa",
    avatar: null,
    initialPoints: 12,
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
    points: 0,
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    avatar: null,
    initialPoints: 3,
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
    points: 0,
  },
  {
    id: 5,
    name: "Carla Mendes",
    avatar: null,
    initialPoints: 15,
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
    points: 0,
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    avatar: null,
    initialPoints: 7,
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
    points: 0,
  },
  {
    id: 7,
    name: "Juliana Rocha",
    avatar: null,
    initialPoints: 10,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
    points: 0,
  },
  {
    id: 8,
    name: "Rafael Alves",
    avatar: null,
    initialPoints: 6,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
    points: 0,
  },
];

export const mockTeam2 = [
  {
    id: 1,
    name: "Ana Braga",
    avatar: null,
    initialPoints: 5,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
    points: 2,
  },
  {
    id: 2,
    name: "João Santos",
    avatar: null,
    initialPoints: 8,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
    points: 0,
  },
  {
    id: 3,
    name: "Ana Costa",
    avatar: null,
    initialPoints: 12,
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
    points: 0,
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    avatar: null,
    initialPoints: 3,
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
    points: 0,
  },
  {
    id: 5,
    name: "Carla Mendes",
    avatar: null,
    initialPoints: 15,
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
    points: 0,
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    avatar: null,
    initialPoints: 7,
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
    points: 0,
  },
  {
    id: 7,
    name: "Juliana Rocha",
    avatar: null,
    initialPoints: 10,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
    points: 0,
  },
  {
    id: 8,
    name: "Rafael Alves",
    avatar: null,
    initialPoints: 6,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
    points: 0,
  },
];

export default function GameDetails() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [tab, setTab] = useState("team1");

  const handleFinalizedGame = () => {
    setModalVisible(true);
  };
  const handleConfirm = () => {
    router.push("./sucessGameFinalized");
  };

  return (
    <View style={styles.container}>
      <HeaderBack title={"Detalhe do Jogo"} />
      <View>
        <Text>Campeonato de futebol / Femininoo</Text>
        <Text>Jogos do Segundo Ano</Text>
        <Text>
          <Text style={styles.label}>Ano Escolar: </Text>
          <Text>Segundo Colegial (Ensino Médio)</Text>
        </Text>
      </View>
      <View>
        <View style={styles.card}>
          <View style={[styles.header]}>
            <Text style={styles.headerText}>Jogo 1</Text>
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
            </View>
          </View>
        </View>
        <View>
          <Text>
            Indique a quantidade de pontos de cada jogar que o placar é
            atualizado automaticamente
          </Text>
        </View>
        <View>
          <View style={styles.tabs}>
            <Pressable
              style={[styles.tab, tab === "team1" && styles.activeTab]}
              onPress={() => setTab("team1")}
            >
              <Text
                style={tab === "team1" ? styles.activeText : styles.tabText}
              >
                Time Sala 1
              </Text>
            </Pressable>
            <Pressable
              style={[styles.tab, tab === "team2" && styles.activeTab]}
              onPress={() => setTab("team2")}
            >
              <Text
                style={tab === "team2" ? styles.activeText : styles.tabText}
              >
                Time Sala 2
              </Text>
            </Pressable>
          </View>
          <View style={styles.footerButton}>
            <Button text={"Finalizar Jogo"} onPress={handleFinalizedGame} />
          </View>
        </View>
        {/* Conteúdo das tabs */}
        <ScrollView contentContainerStyle={styles.scroll}>
          <View>
            {tab === "team1" && (
              <>
                <View>
                  {mockTeam1.map((participant) => (
                    <ParticipantCardPoints
                      avatar={participant.avatar}
                      editable={true}
                      initialPoints={participant.initialPoints}
                      name={participant.name}
                      key={participant.id}
                      description={false}
                      gender={participant.gender}
                      schoolYear={participant.schoolYear}
                    />
                  ))}
                </View>
              </>
            )}
            {tab === "team2" && (
              <>
                <View>
                  {mockTeam2.map((participant) => (
                    <ParticipantCardPoints
                      avatar={participant.avatar}
                      editable={true}
                      initialPoints={participant.initialPoints}
                      name={participant.name}
                      key={participant.id}
                      description={false}
                      gender={participant.gender}
                      schoolYear={participant.schoolYear}
                    />
                  ))}
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </View>
      <ConfirmModal
        visible={modalVisible}
        description={"Tem certeza que deseja"}
        descriptionBold={" finalizar "}
        descriptionContinue={"esta partida?"}
        textButton={"Retornar a tela anterior"}
        textSecondatyButton={"Sim, finalizar partida"}
        title={"Finalizar jogo"}
        component={
          <View>
            <View style={styles.card}>
              <View style={[styles.header]}>
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
  tabs: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "#F0F0F0",
    gap: 5,
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
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    alignItems: "center",
  },
  scroll: {
    paddingBottom: 120,
  },
});
