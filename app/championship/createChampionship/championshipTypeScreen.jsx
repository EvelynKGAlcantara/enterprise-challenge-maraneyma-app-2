import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CardSelect } from "../../../components/Cards/ChampionshipCard";

export default function ChampionshipTypeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <AntDesign
        name="arrow-left"
        size={28}
        color="#EB2F96"
        onPress={router.back}
        style={styles.backButton}
      />

      <Text style={styles.title}>Qual tipo de campeonato você quer criar?</Text>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#515151",
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 16,
  },
});
