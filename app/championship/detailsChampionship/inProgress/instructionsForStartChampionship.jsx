import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Button } from "../../../../components/Button/index";
import { useRouter } from "expo-router";

import { HeaderBack } from "../../../../components/Header/HeaderBack";

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

export default function ChampionshipDetailsForStart() {
  const router = useRouter();

  const handleConfirmStarChampionship = () => {
    router.push(
      "../../../championship/detailsChampionship/inProgress/sucessStart"
    );
  };

  return (
    <View style={styles.safeArea}>
      <HeaderBack title={"Campeonato"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockChampionships.map((championship) => (
          <View key={championship.id}>
            <Text style={styles.category}>{championship.category}</Text>
            <Text style={styles.title}>{championship.title}</Text>
            <Text style={styles.subtitle}>
              <Text style={styles.subtitleBold}>ANO ESCOLAR: </Text>
              {championship.schoolYear}{" "}
            </Text>
            <Text style={styles.highlighted}>
              {championship.participatingTeams}
              <Text> equipes participantes</Text>
            </Text>
          </View>
        ))}

        <View style={styles.space}>
          <View style={styles.content}>
            <Text style={styles.description}>
              IMPORTANTE:{"\n"}
              {"\n"}
              1. A ordem dos jogos das equipes é sorteada aleatoriamente pelo
              Maraneyma.{"\n"}
              {"\n"}
              2. Não é possível cadastrar novas equipes neste campeonato após
              iniciado.{"\n"}
              {"\n"}
              3. Os jogos não possuem data fixa para acontecer e podem seguir o
              ritmo da disponibilidade das equipes.
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              text={"Iniciar Campeonato"}
              onPress={handleConfirmStarChampionship}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },

  category: {
    fontSize: 14,
    fontWeight: "600",
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

  highlighted: {
    backgroundColor: "#FFFB8F",
    padding: 5,
    fontSize: 12,
    width: 150,
    color: "#555",
    marginTop: 10,
    fontFamily: "SofiaSans_800ExtraBold",
  },
  description: {
    color: "#7B7B7B",
    fontSize: 18,
  },
  content: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    justifyContent: "space-between",
  },
  button: { marginTop: 230 },
});
