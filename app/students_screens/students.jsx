import { Header } from "../../components/Header/index";
import { Button } from "../../components/Button/index";
import { useRouter } from "expo-router";
import { ParticipantCard } from "../../components/Cards/ParticipantCard";

import { View, StyleSheet, Image } from "react-native";

const mockParticipants = [
  {
    id: 1,
    name: "João Silva",
    gender: "Masculino",
    classInfo: "2º colegial / Sala A",
    image: require("../../assets/images/register-student.png"),
  },
  {
    id: 2,
    name: "Maria Oliveira",
    gender: "Feminino",
    classInfo: "2º colegial / Sala B",
    image: require("../../assets/images/register-student-f.png"),
  },
  {
    id: 3,
    name: "Pedro Souza",
    gender: "Masculino",
    classInfo: "2º colegial / Sala C",
    image: require("../../assets/images/register-student.png"),
  },
];

export default function StudentsList() {
  const router = useRouter();
  const handleEdit = () => {
    router.push("./editStudents");
  };
  return (
    <View style={styles.safeArea}>
      <Header title={"Alunos"} />
      <View style={styles.container}>
        <View style={styles.space}>
          {mockParticipants.map((partipant) => (
            <ParticipantCard
              key={partipant.id}
              name={partipant.name}
              gender={partipant.gender}
              classInfo={partipant.classInfo}
              imageURL={Image.resolveAssetSource(partipant.image).uri}
              onEdit={handleEdit}
            />
          ))}
        </View>
        <View style={styles.space}>
          <Button text={"Cadastrar Alunos"} onPress={handleEdit} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 16,
    gap: 290,
  },

  subText: {
    fontSize: 18,
    textAlign: "center",
    color: "#BFBFBF",
  },
  image: {
    marginTop: 100,
    marginBottom: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
