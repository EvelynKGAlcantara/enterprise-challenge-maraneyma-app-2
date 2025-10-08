import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CardSelect } from "../../../components/Cards/ChampionshipCard";

export default function ChampionshipTypeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <AntDesign
        name="arrow-left"
        size={40}
        color="#EB2F96"
        onPress={router.back}
        style={styles.backButton}
      />

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
    paddingTop: "30%",
    paddingBottom: 40,
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
    width: "100%",
  },
});
