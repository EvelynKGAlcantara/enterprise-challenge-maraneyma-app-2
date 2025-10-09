import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Button } from "../../../../components/Button/index";
import { PhotoInput } from "../../../../components/Inputs/PhotoInput";
import { HeaderBack } from "../../../../components/Header/HeaderBack";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function CreateTeamScreen() {
  const [teamName, setTeamName] = useState("");
  const [photo, setPhoto] = useState("");
  const router = useRouter();

  const handleNext = () => {
    router.push("./selectMembers(2)");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderBack title="Montagem de Equipes" />

        <View style={styles.content}>
          <Text style={styles.title}>Crie um nome pra equipe</Text>

          <View style={styles.subtitleBlock}>
            <Text style={styles.subtitleSmall}>
              Campeonato de futebol / Feminino
            </Text>
            <Text style={styles.subtitleSmall}>
              ANO ESCOLAR:{" "}
              <Text style={styles.subtitleBold}>
                Segundo Colegial | Ensino Médio
              </Text>
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>
              Crie um nome da equipe{" "}
              <Text style={styles.optional}>(obrigatório)</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.: Time Sala 1"
              value={teamName}
              onChangeText={setTeamName}
            />

            <Text style={styles.label}>
              Símbolo do time <Text style={styles.optional}>(opcional)</Text>
            </Text>
            <PhotoInput onChangePhoto={setPhoto} />
          </View>
        </View>

        <View style={styles.footer}>
          <Button text="Avançar" onPress={handleNext} />
        </View>
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
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "#515151",
    fontFamily: "SofiaSans_800ExtraBold",
    marginTop: 12,
  },
  subtitleBlock: {
    marginTop: 8,
    marginBottom: 24,
  },
  subtitleSmall: {
    fontSize: 12,
    color: "#7B7B7B",
    fontFamily: "SofiaSans_400Regular",
  },
  subtitleBold: {
    fontFamily: "SofiaSans_600SemiBold",
  },
  form: {
    gap: 16,
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontFamily: "SofiaSans_400Regular",
  },
  optional: {
    color: "#bcbcbc",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  footer: {
    marginTop: "auto",
    marginBottom: 32,
  },
});
