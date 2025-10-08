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
        size={40}
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
    backgroundColor: "#fbfbfbff",
    paddingTop: "30%",
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#515151",
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 14,
    color: "#7B7B7B",
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
});
