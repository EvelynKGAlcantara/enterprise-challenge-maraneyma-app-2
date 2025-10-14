import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from "../../../components/Header/index";
import { Button } from "../../../components/Button/index";

import { useStudents } from "../../context/Context";
import { ParticipantCard } from "../../../components/Cards/ParticipantCard";

import { useRouter } from "expo-router";

import { Filter } from "../../../components/Filters/Filter";

import { InputsFilter } from "../../../components/Filters/InputsFilter";

export default function Students() {
  const router = useRouter();
  const { students, setIdStudents } = useStudents();

  const handleRegister = () => {
    router.push("/students_screens/registerStudents");
  };

  const handleEdit = (id) => {
    setIdStudents(id);
    router.push("../../students_screens/editStudents");
  };

  const maleCount = students.filter((s) => s.gender === "Masculino").length;
  const femaleCount = students.filter((s) => s.gender === "Feminino").length;

  return (
    <View style={styles.safeArea}>
      <Header title={"Alunos"} />

      {students.length === 0 ? (
        //SEM ALUNOS
        <>
          <ScrollView contentContainerStyle={styles.emptyContainer}>
            <Image
              source={require("../../../assets/images/register-student.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.subText}>Cadastre e gerencie os alunos</Text>
          </ScrollView>

          <View style={styles.spaceFixed}>
            <Button text={"Cadastrar Alunos"} onPress={handleRegister} />
          </View>
        </>
      ) : (
        //COM ALUNOS
        <>
          <Filter
            FirstItem={"Feminino"}
            SecondItem={"Masculino"}
            firtItemNumer={`(${femaleCount})`}
            SecondItemNumber={`(${maleCount})`}
          />

          <ScrollView>
            <View style={styles.space}>
              <InputsFilter />

              {students.map((student, index) => (
                <ParticipantCard
                  key={index}
                  name={student.name}
                  gender={student.gender}
                  classInfo={`${student.schoolYear}º Ano - ${
                    student.classroom || "Sem turma"
                  }`}
                  imageURL={
                    student.photoUri ||
                    Image.resolveAssetSource(student.image).uri
                  }
                  onEdit={() => handleEdit(index)}
                />
              ))}
            </View>
          </ScrollView>

          <View style={styles.spaceFixed}>
            <Button text={"Cadastrar Alunos"} onPress={handleRegister} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 100,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 20,
  },

  searchBox: {
    marginTop: 12,
    paddingHorizontal: 16,
    gap: 10,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 8,
    fontSize: 14,
    color: "#444",
  },

  space: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  spaceFixed: {
    paddingTop: 20,
    paddingBottom: 110,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
  },

  subText: {
    fontSize: 18,
    textAlign: "center",
    color: "#BFBFBF",
  },
  image: { width: 190, resizeMode: "contain" },
});
