import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { useRouter } from "expo-router";

import { HeaderBack } from "../../../../components/Header/HeaderBack";
import { ParticipantCardPoints } from "../../../../components/Cards/ParticipantCardPoints";
import { TeamCardInProgress } from "../../../../components/Cards/TeamCardInProgress";
import { Feather } from "@expo/vector-icons";

export const mockParticipants = [
  {
    id: 1,
    name: "Maria Silva",
    avatar: null,
    initialPoints: 5,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala B",
  },
  {
    id: 2,
    name: "João Santos",
    avatar: null,
    initialPoints: 8,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala A",
  },
  {
    id: 3,
    name: "Ana Costa",
    avatar: null,
    initialPoints: 12,
    gender: "Feminino",
    schoolYear: "Primeiro colegial / Sala C",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    avatar: null,
    initialPoints: 3,
    gender: "Masculino",
    schoolYear: "Segundo colegial / Sala A",
  },
  {
    id: 5,
    name: "Carla Mendes",
    avatar: null,
    initialPoints: 15,
    gender: "Feminino",
    schoolYear: "Terceiro colegial / Sala B",
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    avatar: null,
    initialPoints: 7,
    gender: "Masculino",
    schoolYear: "Primeiro colegial / Sala A",
  },
  {
    id: 7,
    name: "Juliana Rocha",
    avatar: null,
    initialPoints: 10,
    gender: "Feminino",
    schoolYear: "Segundo colegial / Sala C",
  },
  {
    id: 8,
    name: "Rafael Alves",
    avatar: null,
    initialPoints: 6,
    gender: "Masculino",
    schoolYear: "Terceiro colegial / Sala C",
  },
];

export default function TeamDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <HeaderBack title={"Detalhes da Equipe"} />

      <ScrollView>
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../../../../assets/images/profile-circle.png")}
                style={styles.avatar}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>Time Sala 1</Text>
              <Text style={styles.description}>
                Campeonato de futebol / feminino
              </Text>
              <Text style={styles.description}>
                Primeiro Colegial (Ensino Médio)
              </Text>
            </View>
          </View>
        </View>

        {mockParticipants.map((participant) => (
          <ParticipantCardPoints
            avatar={participant.avatar}
            editable={false}
            initialPoints={participant.initialPoints}
            name={participant.name}
            key={participant.id}
            description={false}
            gender={participant.gender}
            schoolYear={participant.schoolYear}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
    paddingHorizontal: 24,
  },
  card: {
    borderRadius: 10,

    padding: 14,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  description: {
    fontSize: 13,
    color: "#9A9A9A",
    marginTop: 2,
  },
  button: {
    borderWidth: 1,
    borderColor: "#FF1493",
    borderRadius: 4,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FF1493",
    fontWeight: "500",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
});
