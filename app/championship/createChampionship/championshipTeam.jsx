import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CardSelect } from "../../../components/Cards/ChampionshipCard";

export default function ChampionshipTeams() {
  const router = useRouter();

  const options = [
    "Cabo de guerra",
    "Corrida de revezamento",
    "Futebol",
    "Handball",
    "Peteca",
    "Queimada (Carimbada)",
  ];

  return (
    <View style={styles.container}>
      <AntDesign
        name="arrow-left"
        size={28}
        color="#EB2F96"
        onPress={router.back}
        style={styles.backButton}
      />

      <Text style={styles.title}>Competição de equipes</Text>
      <Text style={styles.subtitle}>Selecione um tipo de competição:</Text>

      {options.map((item, index) => (
        <CardSelect
          key={index}
          title={item}
          onPress={() => router.push("./championshipForm")}
        />
      ))}
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
  },
  subtitle: {
    fontSize: 14,
    color: "#7B7B7B",
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 16,
  },
});
