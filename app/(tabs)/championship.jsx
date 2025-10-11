import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useRouter } from "expo-router";
import { ConfirmModal } from "../../components/Modals/ConfirmModal";
import { useState } from "react";
import { useStudents } from "../context/Context";
import { Filter } from "../../components/Filters/Filter";
import { StatusChampionshipCard } from "../../components/Cards/StatusChampionshipCard";

export default function Championship() {
  const router = useRouter();
  const { championships } = useStudents();
  const handleRegister = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    router.push("../championship/createChampionship/championshipTypeScreen");
  };

  const handleRegisterStudents = () => {
    router.push("../students_screens/registerStudents");
  };

  const handleDetailChampionship = () => {
    router.push(
      "../championship/detailsChampionship/notInitiated/championshipDetails"
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.safeArea}>
      <Header title={"Campeonatos"} />
      <ScrollView>
        {championships?.length > 0 ? (
          <View>
            <View>
              <Filter
                FirstItem={"Ativos"}
                SecondItem={"Inativos"}
                SecondItemNumber={"(5)"}
                firtItemNumer={"(5)"}
              />

              <View style={styles.card}>
                {championships.map((championship) => (
                  <StatusChampionshipCard
                    key={championship?.id}
                    status={championship?.status ?? "waiting"}
                    category={championship?.championshipType}
                    title={championship?.championshipName}
                    schoolYear={championship?.schoolYear}
                    participatingTeams={championship?.participatingTeams}
                    totalGames={championship?.totalGames}
                    gender={championship?.gender}
                    onPress={handleDetailChampionship}
                  />
                ))}
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.space}>
              <Image
                source={require("../../assets/images/championship.png")}
                style={styles.image}
              />
              <Text style={styles.subText}>
                Cadastre e gerencie campeonatos
              </Text>
            </View>
            <View style={styles.space}>
              <Text style={styles.textBold}>Importante:</Text>
              <Text style={styles.subText}>
                Apenas crie um campeonato após ter cadastrado todos os alunos
                que vão participar
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.spaceFixed}>
        <Button text={"Cadastrar campeonato"} onPress={handleRegister} />
      </View>
      <ConfirmModal
        visible={modalVisible}
        onConfirm={handleConfirm}
        onClose={() => setModalVisible(false)}
        description={"Já cadastrou"}
        descriptionBold={" todos os alunos que vão participar "}
        descriptionContinue={"deste campeonato?"}
        textSecondatyButton={"Já cadastrei"}
        textButton={"Falta cadastrar"}
        title={"IMPORTANTE"}
        navigate={handleRegisterStudents}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    gap: 16,
  },

  subText: {
    fontSize: 18,
    textAlign: "center",
    color: "#BFBFBF",
  },
  textBold: {
    fontSize: 18,
    textAlign: "center",
    color: "#000000",
    fontWeight: "800",
  },
  image: {
    width: 190,
    marginTop: 20,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: -22,
  },
  space: {
    paddingHorizontal: 16,
  },
  spaceFixed: {
    paddingTop: 20,
    paddingBottom: 110,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 20,
  },
});
