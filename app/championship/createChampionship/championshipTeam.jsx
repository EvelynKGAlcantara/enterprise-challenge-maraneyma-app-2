import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { CardSelect } from "../../../components/Cards/ChampionshipCard";
import { HeaderBack } from "../../../components/Header/HeaderBack";

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
      <View style={styles.containerHeader}>
        <HeaderBack />
      </View>
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
  },
  containerHeader: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#515151",
    marginBottom: 4,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "#7B7B7B",
    marginBottom: 20,
    paddingHorizontal: 24,
  },
});
