import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CardSelect } from "../../../components/Cards/ChampionshipCard";
import { HeaderBack } from "../../../components/Header/HeaderBack";

export default function ChampionshipTypeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBack
          onPress={() => router.push("../../../app/(tabs)/championship")}
        />
      </View>

      <Text style={styles.title}>Qual tipo de campeonato você quer criar?</Text>

      <View style={styles.cards}>
        <CardSelect
          title="Competição individual"
          subtitle="Alunos competindo uns contra os outros"
          onPress={() => router.push("./championshipIndividual")}
        />

        <CardSelect
          title="Times contra times"
          subtitle="Mínimo de 2 contra 2"
          onPress={() => router.push("./championshipTeam")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
  },
  containerHeader: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#515151",
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  backButton: {
    width: "100%",
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 100,
    backgroundColor: "#fbfbfb",
  },
  cards: {
    marginTop: 20,
    width: "100%",
  },
});
