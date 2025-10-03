import { Header } from "../../components/Header/index";
import { Button } from "../../components/Button/index";
import { useRouter } from "expo-router";

import { ParticipantCard } from "../../components/Cards/ParticipantCard";
import { SearchInput } from "../../components/Inputs/SeachInput";

import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

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

      <View style={styles.filterRow}>
        <Text style={styles.filterLabel}>Exibindo:</Text>
        <TouchableOpacity style={styles.filterButtonActive}>
          <Text style={styles.filterTextActive}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Feminino (13)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Masculino (5)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Filtrar por ano escolar"
          style={styles.selectInput}
        />
        <View style={styles.searchInputContainer}>
          <SearchInput />
        </View>
      </View>

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

  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
    gap: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  filterButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#EB2F96",
  },
  filterButtonActive: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#EB2F96",
  },
  filterText: {
    color: "#EB2F96",
    fontSize: 12,
  },
  filterTextActive: {
    color: "#fff",
    fontSize: 12,
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
});
