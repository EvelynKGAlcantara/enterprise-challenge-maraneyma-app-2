import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Button } from "../../../../components/Button/index";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TeamCard } from "../../../../components/Cards/TeamCard";
import { ConfirmModal } from "../../../../components/Modals/ConfirmModal";
import { useStudents } from "../../../context/Context";
import { DeleteModal } from "../../../../components/Modals/DeleteModal";

const mockChampionships = [
  {
    id: 1,
    status: "waiting",
    category: "Campeonato de futebol / Feminino",
    title: "Jogos do Segundo Ano",
    schoolYear: "Segundo Colegial (Ensino Médio)",
    participatingTeams: "2",
  },
];

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

export default function ChampionshipDetails() {
  const [tab, setTab] = useState("championship");
  const [idTeam, setIdTeam] = useState();

  const router = useRouter();

  const { teams, removeTeams } = useStudents();
  const handleStarChampionship = () => {
    setModalVisible(true);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemoveTeam = (id) => {
    setModalVisible(true);
    setIdTeam(id);
  };

  const handleConfirmRemoveTeam = () => {
    router.push(
      "../../../championship/detailsChampionship/notInitiated/deleteTeamSucess"
    );
    setModalVisible(false);
    removeTeams(idTeam);
  };

  const handleConfirmStarChampionship = () => {
    router.push(
      "../../../championship/detailsChampionship/inProgress/instructionsForStartChampionship"
    );
  };

  const handleCreateTeam = () => {
    router.push("../createTeam/createNameTeam(1)");
  };

  const hasTeams = teams?.length > 0;

  return (
    <View style={styles.safeArea}>
      <AntDesign
        name="arrow-left"
        size={40}
        color="#EB2F96"
        onPress={router.back}
        style={styles.backButton}
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {mockChampionships.map((championship) => (
          <View key={championship.id}>
            <Text style={styles.category}>{championship.category}</Text>
            <Text style={styles.title}>{championship.title}</Text>
            <Text style={styles.subtitle}>
              <Text style={styles.subtitleBold}>ANO ESCOLAR: </Text>
              {championship.schoolYear}{" "}
            </Text>
            <Text style={styles.subtitleBold}>
              {championship.participatingTeams} <Text>equipes cadastradas</Text>
            </Text>
            {renderStatus(championship.status)}
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
        {/* Conteúdo da tab de Campeonato */}
        {tab === "championship" && (
          <View style={styles.section}>
            {hasTeams ? (
              <View style={styles.space}>
                <View style={styles.cardChampionship}>
                  <Image
                    source={require("../../../../assets/images/trophy-start.png")}
                    style={styles.imageTrophy}
                  />
                  <Text style={styles.titleCard}>Aguardando ser iniciado</Text>

                  <View style={styles.tagTeams}>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "500",
                      }}
                    >
                      {teams?.length} equipes cadastradas
                    </Text>
                  </View>

                  <Text style={styles.titleChampionship}>
                    <Text>Importante:</Text>
                  </Text>

                  <Text style={styles.subtitleChampionship}>
                    Inicie o campeonato somente após ter cadastrado todas as
                    equipes.
                  </Text>
                </View>
                <View style={styles.buttonsChamp}>
                  <Button
                    text="Cadastrar mais equipes"
                    onPress={handleCreateTeam}
                  />
                  <Button
                    text="Dar início ao campeonato"
                    onPress={handleStarChampionship}
                  />

                  <ConfirmModal
                    visible={modalVisible}
                    onConfirm={handleConfirmStarChampionship}
                    onClose={() => setModalVisible(false)}
                    navigate={() => setModalVisible(false)}
                    description={"Já cadastrou"}
                    descriptionBold={" todas as equipes que vão participar "}
                    descriptionContinue={"deste campeonato?"}
                    textSecondatyButton={"Já cadastrei (INICIAR)"}
                    textButton={"Falta cadastrar equipes"}
                    title={"Iniciar Campeonato"}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.spaceNoTeam}>
                <View style={styles.content}>
                  <Image
                    source={require("../../../../assets/images/futebol.png")}
                    style={styles.image}
                  />
                  <View style={styles.infoText}>
                    <Text style={styles.bold}>Importante:</Text>
                    <Text style={styles.text}>
                      Monte as equipes para ativar o campeonato
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={styles.buttonsChamp}>
                    <Button text="Montar equipes" onPress={handleCreateTeam} />
                  </View>
                </View>
              </View>
            )}
          </View>
        )}

        {/* Conteúdo da tab de Equipes */}

        {tab === "team" && (
          <View style={styles.section}>
            {hasTeams ? (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, marginBottom: 40 }}>
                  <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                  >
                    {teams.map((team) => (
                      <TeamCard
                        key={team.id}
                        name={team.name}
                        description={team.description}
                        onPressData={() => console.log("Ver dados")}
                        onPressMembers={() => console.log("Ver membros")}
                        onPressDelete={() => handleRemoveTeam(team.id)}
                      />
                    ))}

                    <View style={styles.space}>
                      <Text style={styles.helperTextTeams}>
                        Este campeonato precisa ter pelo menos 3 equipes
                      </Text>
                    </View>
                  </ScrollView>
                  <View style={styles.fixedFooter}>
                    <Button text="Montar equipes" onPress={handleCreateTeam} />
                  </View>
                </View>

                <DeleteModal
                  visible={modalVisible}
                  onClose={handleConfirmRemoveTeam}
                  onConfirm={() => setModalVisible(false)}
                  title={"Excluir"}
                  description={"Tem certeza que desenha excluir a equipe?"}
                  textButton={"Sim, excluir"}
                  textSecondatyButton={"Não, desistir"}
                />
              </View>
            ) : (
              <View style={styles.spaceNoTeam}>
                <View style={styles.content}>
                  <Image
                    source={require("../../../../assets/images/team.png")}
                    style={styles.imageTeam}
                  />
                  <Text style={styles.text}>
                    Monte as equipes para ativar o campeonato
                  </Text>
                </View>
                <View style={styles.buttonsChamp3}>
                  <Button text="Montar equipes" onPress={handleCreateTeam} />
                </View>
              </View>
            )}
          </View>
        )}
        {/* Conteúdo da tab de Classificação */}
        {tab === "ranking" && (
          <View style={styles.sectionRanking}>
            <Image
              source={require("../../../../assets/images/trophy.png")}
              style={styles.imageRanking}
            />
            <Text style={styles.text}>Aguardando início dos jogos</Text>
          </View>
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },

  category: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 40,
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
    marginVertical: 4,
    fontFamily: "SofiaSans_800ExtraBold",
  },
  titleChampionship: {
    fontSize: 16,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#434343",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitleChampionship: {
    fontSize: 16,
    fontFamily: "SofiaSans_400Regular",
    color: "#BFBFBF",
    textAlign: "center",
    marginBottom: 16,
  },
  titleCard: {
    fontSize: 20,
    marginBottom: 8,
    fontFamily: "SofiaSans_400Regular",
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
  content: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    width: "100%",
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: "contain",
  },
  imageTeam: {
    width: 350,
    height: 170,
    resizeMode: "contain",
    marginBottom: 10,
  },
  infoText: {
    marginTop: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  imageTrophy: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 100,
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: "SofiaSans_400Regular",
    color: "#BFBFBF",
    textAlign: "center",
    marginBottom: 16,
  },
  bold: {
    fontSize: 18,
    fontWeight: "700",
  },
  helperText: {
    fontSize: 13,
    color: "#999",
    textAlign: "center",
    marginTop: 12,
  },
  helperTextTeams: {
    fontSize: 18,
    color: "#BFBFBF",
    textAlign: "center",
    marginTop: 12,
  },
  tagTeams: {
    backgroundColor: "#FFF9C4",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 12,
  },
  cardChampionship: {
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    borderColor: "#e4e4e4ff",
    borderWidth: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    flex: 1,
    height: "100%",
    gap: 100,
  },
  spaceNoTeam: {
    flex: 1,
    height: "100%",
    gap: 140,
  },
  buttonsChamp: {
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderTopWidth: 1,
    width: "100%",
    borderTopColor: "#EEE",
  },
  buttonsChamp2: {
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    marginTop: 20,
    borderTopWidth: 1,
    width: "100%",
    borderTopColor: "#EEE",
  },
  buttonsChamp3: {
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    marginTop: 20,
    borderTopWidth: 1,
    width: "100%",
    borderTopColor: "#EEE",
  },
  buttons: {
    marginBottom: -20,
  },
  imageRanking: {
    height: 180,
    width: 180,
    marginVertical: 20,
    borderRadius: 100,
    opacity: 0.5,
  },
  sectionRanking: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  fixedFooter: {
    paddingVertical: 16,
    marginTop: 210,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    backgroundColor: "#fff",
  },
});
