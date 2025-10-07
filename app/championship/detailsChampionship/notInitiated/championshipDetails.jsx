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

const mockChampionships = [
  {
    id: 1,
    status: "waiting",
    category: "Campeonato de futebol / Feminino",
    title: "Jogos do Segundo Ano",
    schoolYear: "ANO ESCOLAR: Segundo Colegial (Ensino Médio)",
    participatingTeams: "0 equipes participantes",
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
            <Text style={styles.subtitle}>{championship.schoolYear}</Text>
            <Text style={styles.participants}>
              {championship.participatingTeams}
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

        {/* Conteúdo das abas */}
        {tab === "championship" && (
          <View style={styles.section}>
            <Image
              // source={require("../../../../assets/images/soccer.png")}
              style={styles.image}
            />
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Importante: </Text>
              Monte as equipes para ativar o campeonato
            </Text>
            <Button text="Montar equipes" onPress={() => {}} />
          </View>
        )}

        {tab === "team" && (
          <View style={styles.section}>
            <Image
              // source={require("../../../../assets/images/teams.png")}
              style={styles.image}
            />
            <Text style={styles.infoText}>
              Monte as equipes para ativar o campeonato
            </Text>
            <Button text="Montar equipes" onPress={() => {}} />
          </View>
        )}

        {tab === "ranking" && (
          <View style={styles.section}>
            <Image
              // source={require("../../../../assets/images/trophy.png")}
              style={styles.image}
            />
            <Text style={styles.infoText}>Aguardando início dos jogos</Text>
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
    fontSize: 22,
    fontWeight: "800",
    marginTop: 4,
    color: "#000",
  },
  subtitle: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
  participants: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
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

  section: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    gap: 16,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  infoText: {
    textAlign: "center",
    fontSize: 15,
    color: "#666",
    marginHorizontal: 16,
  },
  bold: {
    fontWeight: "700",
  },
});
