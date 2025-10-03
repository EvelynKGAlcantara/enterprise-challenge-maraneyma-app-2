import { Header } from "../../components/Header/index";
import { Button } from "../../components/Button/index";
import { useRouter } from "expo-router";

import { ParticipantCard } from "../../components/Cards/ParticipantCard";
import { SearchInput } from "../../components/Inputs/SeachInput";
import { Filter } from "../../components/Filters/Filter";

import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { InputsFilter } from "../../components/Filters/InputsFilter";

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
  {
    id: 4,
    name: "Pedro Souza",
    gender: "Masculino",
    classInfo: "2º colegial / Sala C",
    image: require("../../assets/images/register-student.png"),
  },
  {
    id: 5,
    name: "Pedro Souza",
    gender: "Masculino",
    classInfo: "2º colegial / Sala C",
    image: require("../../assets/images/register-student.png"),
  },
  {
    id: 6,
    name: "Pedro Souza",
    gender: "Masculino",
    classInfo: "2º colegial / Sala C",
    image: require("../../assets/images/register-student.png"),
  },
  {
    id: 7,
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
  const handleRegister = () => {
    router.push("./registerStudents");
  };

  return (
    <View style={styles.safeArea}>
      <Header title={"Alunos"} />
      <Filter femItem={20} masItem={10} />
      <ScrollView>
        <View style={styles.space}>
          <InputsFilter />
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
      </ScrollView>
      <View style={styles.spaceFixed}>
        <Button text={"Cadastrar Alunos"} onPress={handleRegister} />
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
    paddingBottom: 100,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
  },
});
