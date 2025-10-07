import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Header } from "../../../components/Header/index";
import { Button } from "../../../components/Button/index";
import { useRouter } from "expo-router";
import { Filter } from "../../../components/Filters/Filter";
import { StatusChampionshipCard } from "../../../components/Cards/StatusChampionshipCard";

export default function ChampionshipListScreen() {
  const router = useRouter();

  const mockChampionships = [
    {
      id: 1,
      status: "waiting",
      category: "Vôlei / Misto",
      title: "Campeonato Interclasses",
      schoolYear: "Ano escolar: Terceiro Colegial (Ensino Médio)",
      participatingTeams: "10 equipes participantes",
      totalGames: "Falta cadastrar participantes",
    },
    {
      id: 2,
      status: "inProgress",
      category: "Basquete / Masculino",
      title: "Torneio do Primeiro Ano",
      schoolYear: "Ano escolar: Primeiro Colegial (Ensino Médio)",
      participatingTeams: "8 equipes participantes",
      totalGames: "Serão 15 jogos no total (5 já ocorreram)",
    },
    {
      id: 3,
      status: "waiting",
      category: "Vôlei / Misto",
      title: "Campeonato Interclasses",
      schoolYear: "Ano escolar: Terceiro Colegial (Ensino Médio)",
      participatingTeams: "10 equipes participantes",
      totalGames: "Falta cadastrar participantes",
    },
    {
      id: 4,
      status: "finished",
      category: "Futebol / Masculino",
      title: "Copa do Ensino Médio",
      schoolYear: "Ano escolar: Segundo Colegial (Ensino Médio)",
      participatingTeams: "12 equipes participantes",
      totalGames: "Finalizado em: 25/09/2025 às 16:00",
    },
    {
      id: 5,
      status: "inProgress",
      category: "Handebol / Feminino",
      title: "Desafio Interclasse",
      schoolYear: "Ano escolar: Primeiro Colegial (Ensino Médio)",
      participatingTeams: "6 equipes participantes",
      totalGames: "Serão 15 jogos no total (5 já ocorreram)",
    },
    {
      id: 6,
      status: "waiting",
      category: "Basquete / Feminino",
      title: "Campeonato de Primavera",
      schoolYear: "Ano escolar: Terceiro Colegial (Ensino Médio)",
      participatingTeams: "4 equipes participantes",
      totalGames: "Falta cadastrar participantes",
    },
  ];

  const handleCreateChampionship = () => {
    router.push("../createChampionship/championshipForm");
  };
  const handleDetailChampionship = () => {
    router.push("../detailsChampionship/notInitiated/championshipDetails");
  };

  return (
    <View style={styles.safeArea}>
      <Header title={"Campeonatos"} />

      <ScrollView>
        <View>
          <Filter
            FirstItem={"Ativos"}
            SecondItem={"Inativos"}
            SecondItemNumber={"(5)"}
            firtItemNumer={"(5)"}
          />
        </View>

        <View style={styles.card}>
          {mockChampionships.map((championship) => (
            <StatusChampionshipCard
              key={championship.id}
              status={championship.status}
              category={championship.category}
              title={championship.title}
              schoolYear={championship.schoolYear}
              participatingTeams={championship.participatingTeams}
              totalGames={championship.totalGames}
              onPress={handleDetailChampionship}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          text={"Cadastrar campeonato"}
          onPress={handleCreateChampionship}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 16,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  filterActive: {
    color: "#FF007A",
    fontWeight: "bold",
  },
  filter: {
    color: "#999",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 20,
  },
  cardHeader: {
    marginBottom: 8,
  },
  status: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 8,
  },
  cardDescription: {
    color: "#888",
    marginBottom: 12,
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: "#FF007A",
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  detailsText: {
    color: "#FF007A",
    fontWeight: "600",
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
