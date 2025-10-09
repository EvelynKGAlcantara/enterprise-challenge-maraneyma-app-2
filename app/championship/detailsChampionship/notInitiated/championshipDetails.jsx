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

// exemplo de times cadastrados
const mockTeams = [
  {
    id: 1,
    name: "Time Sala 1",
    description: "Primeiro Colegial (Ensino Médio)",
  },
  {
    id: 2,
    name: "Time Sala 2",
    description: "Primeiro Colegial (Ensino Médio)",
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
  const router = useRouter();
  const handleStarChampionship = () => {
    setModalVisible(true);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmStarChampionship = () => {
    router.push(
      "../../../championship/detailsChampionship/inProgress/instructionsForStartChampionship"
    );
  };

  const handleCreateTeam = () => {
    router.push("../createTeam/createNameTeam(1)");
  };

  // simula ter ou não times criados
  const hasTeams = mockTeams.length > 0;

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
              <View
                style={{
                  backgroundColor: "#FAFAFA",
                  borderRadius: 8,
                  padding: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#000",
                    textAlign: "center",
                    marginBottom: 12,
                  }}
                >
                  Aguardando ser iniciado
                </Text>

                <View
                  style={{
                    backgroundColor: "#FFF9C4",
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 4,
                    marginBottom: 12,
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontSize: 13,
                      fontWeight: "600",
                    }}
                  >
                    {mockTeams.length} equipes cadastradas
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 13,
                    color: "#000000b0",
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  <Text style={{ fontWeight: "700" }}>Importante: </Text>
                  Inicie o campeonato somente após ter cadastrado todas as
                  equipes.
                </Text>

                <Button
                  text="Cadastrar mais equipes"
                  onPress={handleCreateTeam}
                  style={{ marginBottom: 10 }}
                />
                <Button
                  text="Dar início ao campeonato"
                  onPress={handleStarChampionship}
                />

                <ConfirmModal
                  visible={modalVisible}
                  onConfirm={handleConfirmStarChampionship}
                  onClose={() => setModalVisible(false)}
                  description={"Já cadastrou"}
                  descriptionBold={" todas as equipes que vão participar "}
                  descriptionContinue={"deste campeonato?"}
                  textSecondatyButton={"Já cadastrei (INICIAR)"}
                  textButton={"Falta cadastrar equipes"}
                  title={"Iniciar Campeonato"}
                />
              </View>
            ) : (
              <View style={styles.content}>
                <Image
                  source={require("../../../../assets/images/futebol.png")}
                  style={styles.image}
                />
                <View style={styles.infoText}>
                  <Text style={styles.bold}>Importante: </Text>
                  <Text style={styles.text}>
                    Monte as equipes para ativar o campeonato
                  </Text>
                </View>
                <View style={styles.button}>
                  <Button text="Montar equipes" onPress={handleCreateTeam} />
                </View>
              </View>
            )}
          </View>
        )}

        {/* Conteúdo da tab de Equipes */}

        {tab === "team" && (
          <View style={styles.section}>
            {hasTeams ? (
              <View>
                {mockTeams.map((team) => (
                  <TeamCard
                    key={team.id}
                    name={team.name}
                    description={team.description}
                    onPressData={() => console.log("Ver dados")}
                    onPressMembers={() => console.log("Ver membros")}
                    onPressDelete={() => console.log("Excluir")}
                  />
                ))}

                <Text style={styles.helperText}>
                  Este campeonato precisa ter pelo menos 3 equipes
                </Text>

                <View style={{ marginTop: 16 }}>
                  <Button text="Montar equipes" onPress={handleCreateTeam} />
                </View>
              </View>
            ) : (
              <View style={styles.content}>
                <Image
                  source={require("../../../../assets/images/atividades_grupo.png")}
                  style={styles.image}
                />
                <Text style={styles.infoText}>
                  Monte as equipes para ativar o campeonatoOOOOOOOO
                </Text>
                <Button text="Montar equipes" onPress={handleCreateTeam} />
              </View>
            )}
          </View>
        )}
        {/* Conteúdo da tab de Classificação */}
        {tab === "ranking" && (
          <View style={styles.section}>
            <Image
              source={require("../../../../assets/images/trophy.png")}
              style={styles.image}
            />
            <Text style={styles.infoText}>Aguardando início dos jogssos</Text>
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
  category: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 40,
    color: "#000",
  },
  title: {
    fontSize: 24,
    marginTop: 4,
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
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 16,
  },
  badgeTextDark: {
    fontSize: 12,
    fontWeight: "700",
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
  infoText: {
    textAlign: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#BFBFBF",
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
});
